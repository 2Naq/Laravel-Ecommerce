<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\AuthController;
use App\Http\Controllers\backend\DashboardController;
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

// Route::group('backend', function () {
    
// });
/* BACKEMD ROUTE*/
Route::get('/dashboard/index', [DashboardController::class, 'index'])
    ->middleware('auth_check')
    ->name('dashboard.index');

Route::controller(AuthController::class)->group(function () {
    /*------GET------*/
    Route::get('/admin', 'index')->middleware('login')->name('auth.admin');
    Route::get('/logout','logout')->name('auth.logout');

    /*------POST------*/
    Route::post('/login','login')->name('auth.login');
});