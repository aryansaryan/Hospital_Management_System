# Hospital MS (Hospital Management System)

**Hospital Management System** is a full-stack web application designed to streamline hospital operations by managing doctors, patients, appointments, and authentication in a centralized platform. The system provides secure user registration and login, efficient data handling using a relational database, and a responsive frontend interface for smooth user interaction. Built using **Spring Boot, PostgreSQL, and React**, this project demonstrates real-world backend API development, database integration, and frontend communication while following clean architecture and security best practices.

Full‑stack Hospital Management System built with:
- **Backend:** Spring Boot (Java) + PostgreSQL
- **Frontend:** React (Create React App)

## Repo structure
- `backend/` — Spring Boot API
- `frontend/` — React UI

## Prerequisites
- Java 17+ (or the version your project uses)
- Maven (or use `./mvnw`)
- Node.js + npm
- PostgreSQL (local)

## Run locally

### 1) Backend
```bash
cd backend
cp .env.example .env   # fill DB_* values if needed
# mac/linux
export $(cat .env | xargs)
# windows (powershell)
# Get-Content .env | ForEach-Object { if ($_ -match '=') { $k,$v=$_ -split '=',2; [Environment]::SetEnvironmentVariable($k,$v,'Process') } }

./mvnw spring-boot:run
```

Backend runs on: `http://localhost:1234`

### 2) Frontend
```bash
cd ../frontend
cp .env.example .env
npm install
npm start
```

Frontend runs on: `http://localhost:3000`


## Author
**Aryan Sudhagoni**
