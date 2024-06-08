<?php

use App\Http\Controllers\Api\CompanyInformationsController;
use App\Http\Controllers\Api\ContactUsController;
use App\Http\Controllers\Api\GalleriesController;
use App\Http\Controllers\Api\LandingPagesController;
use App\Http\Controllers\Api\PostsController;
use App\Models\ConsultationRequest;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/home-data', [LandingPagesController::class, 'index']);

Route::prefix('posts')->group(function() {
    Route::get('/', [PostsController::class, 'index']);
    Route::get('/get-by-type', [PostsController::class, 'getPostsByType']);
    Route::get('/show', [PostsController::class, 'show']);
});

Route::prefix('contact-us')->group(function() {
    Route::get('/', [ContactUsController::class, 'index']);
});

Route::prefix('consultation-requests')->group(function() {
    Route::post('/submit', [ConsultationRequest::class, 'submit']);
});

Route::get('about', [CompanyInformationsController::class, 'show']);

Route::prefix('galleries')->group(function() {
    Route::get('/', [GalleriesController::class, 'index']);
});
