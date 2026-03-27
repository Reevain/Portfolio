@echo off
setlocal enabledelayedexpansion

echo.
echo ================================
echo   Portfolio Setup - Starting
echo ================================
echo.

cd /d "c:\Users\ASUS\Desktop\Portfolio"

if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
  echo.
)

echo [1/1] Creating portfolio structure...
echo.

node setup-portfolio.js

if %ERRORLEVEL% EQU 0 (
  echo.
  echo ================================
  echo   Setup Completed Successfully!
  echo ================================
  echo.
  echo Your React portfolio structure is ready!
  echo.
  echo Next steps:
  echo   1. npm start  - Start development server
  echo   2. npm build  - Build for production
  echo.
) else (
  echo.
  echo ✗ Setup failed with error code %ERRORLEVEL%
  echo.
)

pause
