@echo off
cd /d "c:\Users\ASUS\Desktop\Portfolio"
mkdir src 2>nul
mkdir public 2>nul
mkdir "src\components\Navbar" 2>nul
mkdir "src\components\Hero" 2>nul
mkdir "src\components\About" 2>nul
mkdir "src\components\Skills" 2>nul
mkdir "src\components\Projects" 2>nul
mkdir "src\components\Education" 2>nul
mkdir "src\components\Contact" 2>nul
mkdir "src\components\Footer" 2>nul
echo Directory structure created successfully
dir /s /b
