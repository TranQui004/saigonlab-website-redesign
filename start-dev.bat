@echo off
echo Installing dependencies...
call npm install

echo Starting development server...
echo Website will be available at: http://localhost:5000
npm run dev