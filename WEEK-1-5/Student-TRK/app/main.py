from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer
from app.routers import router
from app.database import engine
from app.models import Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Attendance Tracker API",
    description="A backend system for tracking student attendance with JWT authentication",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure JWT Bearer authentication for Swagger
security = HTTPBearer()

app.include_router(router, tags=["students"])

@app.get("/")
async def root():
    return {"message": "Attendance Tracker API is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
