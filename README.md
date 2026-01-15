# Hospital MS (Hospital Management System)

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
