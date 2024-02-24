@echo off
start "" wt pwsh -WorkingDirectory "%cd%" -Command "npm run dev"
timeout /t 2 >nul
start "" wt pwsh -WorkingDirectory "%cd%" -Command "php artisan serve"
timeout /t 3 >nul
start "" wt pwsh -WorkingDirectory "%cd%"
