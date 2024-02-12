<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\AuthController;
use App\Http\Controllers\backend\DashboardController;
use App\Http\Controllers\backend\UserController;
// use App\Http\Middleware\AuthenticateMiddleware;
// use App\Http\Middleware\LoginMiddleware;
// use App\Http\Middleware\Authenticate;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/* BACKEMD ROUTE*/
Route::prefix('dashboard')->group(function () {
    Route::get('/index', [DashboardController::class, 'index'])
        ->middleware('auth_check')
        ->name('dashboard.index');
    
    Route::prefix('user')->group(function () {
        Route::get('/index', [UserController::class, 'index'])
        ->middleware('auth_check')
        ->name('user.index');
    });
});

/*ROUTE USER */

/*ROUTE AUTH */
Route::controller(AuthController::class)->group(function () {
    Route::get('/admin', 'index')->name('auth.admin')->middleware('login');
    Route::post('/login','login')->name('auth.login');
    Route::get('/logout','logout')->name('auth.logout');
});
