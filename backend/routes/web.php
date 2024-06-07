<?php

use App\Http\Controllers\Web\Auth\LoginController;
use App\Http\Controllers\Web\BannersController;
use App\Http\Controllers\Web\ClientReviewsController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\PartnersController;
use App\Http\Controllers\Web\PostsController;
use App\Http\Controllers\Web\ProfilesController;
use App\Http\Controllers\Web\ServicesController;
use App\Http\Controllers\Web\SettingsController;
use App\Http\Controllers\Web\UsersController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [LoginController::class, 'showLoginForm']);
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function() {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::resource('users', UsersController::class);
    Route::resource('posts', PostsController::class);
    Route::resource('services', ServicesController::class);
    Route::resource('partners', PartnersController::class);
    Route::resource('client-reviews', ClientReviewsController::class);
    Route::resource('profiles', ProfilesController::class);
    Route::resource('settings', SettingsController::class);
    Route::resource('banners', BannersController::class);
});
