@echo off
cd /d c:\Users\ASUS\Desktop\Portfolio
node setup-portfolio.js
if %ERRORLEVEL% EQU 0 (
  echo.
  echo Setup completed successfully!
) else (
  echo Setup failed!
)

