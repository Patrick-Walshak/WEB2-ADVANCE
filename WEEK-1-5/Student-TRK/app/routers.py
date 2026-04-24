from fastapi import APIRouter, Depends, HTTPException, status, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from datetime import timedelta
from app.database import get_db
from app.models import Student
from app.schemas import StudentCreate, StudentLogin, StudentResponse, Token
from app.auth import (
    get_password_hash, 
    verify_password, 
    create_access_token,
    ACCESS_TOKEN_EXPIRE_MINUTES,
    get_current_admin_user
)

router = APIRouter()
security = HTTPBearer()

@router.post("/register", response_model=StudentResponse)
async def register_student(student: StudentCreate, db: Session = Depends(get_db)):
    # Check if user already exists
    db_user = db.query(Student).filter(Student.email == student.email).first()
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Check if this is the first user (make them admin)
    user_count = db.query(Student).count()
    is_admin = (user_count == 0)
    
    # Create new student
    hashed_password = get_password_hash(student.password)
    db_student = Student(
        name=student.name,
        email=student.email,
        password=hashed_password,
        is_admin=is_admin
    )
    
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    
    return db_student

@router.post("/login", response_model=Token)
async def login_student(student_credentials: StudentLogin, db: Session = Depends(get_db)):
    user = db.query(Student).filter(Student.email == student_credentials.email).first()
    
    if not user or not verify_password(student_credentials.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Increment attendance count
    user.attendance_count += 1
    db.commit()
    
    # Create access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/admin/students", response_model=list[StudentResponse])
async def get_all_students(
    credentials: HTTPAuthorizationCredentials = Security(security),
    current_user: Student = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    students = db.query(Student).all()
    return students

@router.get("/admin/attendance")
async def get_attendance_data(
    credentials: HTTPAuthorizationCredentials = Security(security),
    current_user: Student = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    students = db.query(Student).all()
    attendance_data = []
    
    for student in students:
        attendance_data.append({
            "id": student.id,
            "name": student.name,
            "email": student.email,
            "attendance_count": student.attendance_count,
            "is_admin": student.is_admin
        })
    
    return {
        "total_students": len(students),
        "attendance_records": attendance_data
    }
