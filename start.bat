@echo off
cd front
start cmd /k "npm run dev"
cd ..
cd back
call venv\Scripts\activate
start cmd /k "uvicorn main:app --reload"
cd ..
