# Attendance Tracker API

A FastAPI backend system for tracking student attendance with MySQL database and Docker containerization.

## Features

- Student registration and login
- Automatic attendance counting on login
- Admin-only endpoints for viewing attendance data
- JWT authentication for security
- First registered user becomes admin
- Database migrations with Alembic
- Docker containerization

## API Endpoints

### Student Endpoints
- `POST /register` - Register a new student
- `POST /login` - Student login (increments attendance count)

### Admin Endpoints (JWT token required)
- `GET /admin/students` - Get all students
- `GET /admin/attendance` - Get attendance data for all students

### General Endpoints
- `GET /` - Root endpoint
- `GET /health` - Health check

## Setup with Docker

1. Clone the repository
2. Run with Docker Compose:
```bash
docker-compose up --build
```

The API will be available at `http://localhost:8000`
MySQL will be available at `localhost:3306`

## Manual Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set up MySQL database and update `.env` file

3. Run database migrations:
```bash
alembic upgrade head
```

4. Start the server:
```bash
uvicorn app.main:app --reload
```

## Usage

1. Register the first user (this user will be admin):
```bash
curl -X POST "http://localhost:8000/register" \
     -H "Content-Type: application/json" \
     -d '{"name": "Admin User", "email": "admin@example.com", "password": "password123"}'
```

2. Login to get JWT token:
```bash
curl -X POST "http://localhost:8000/login" \
     -H "Content-Type: application/json" \
     -d '{"email": "admin@example.com", "password": "password123"}'
```

3. Use the token to access admin endpoints:
```bash
curl -X GET "http://localhost:8000/admin/students" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Database Schema

### Students Table
- id (Primary Key)
- name
- email (Unique)
- password (Hashed)
- attendance_count (Default: 0)
- is_admin (Boolean)
- created_at
- updated_at

## Environment Variables

- `DATABASE_URL` - MySQL connection string
- `SECRET_KEY` - JWT secret key (change in production)
