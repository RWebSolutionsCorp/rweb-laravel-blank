<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend as FrontendController;
use App\Http\Controllers\Backend as BackendController;
use App\Http\Controllers\Frontend\PageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PageController::class, 'home']);
Route::get('/success', [App\Http\Controllers\ResponseController::class, 'success'])->name('success');
Route::get('/error', [App\Http\Controllers\ResponseController::class, 'error'])->name('error');

// DEFAULT AUTH ROUTES
Auth::routes();

// AUTH USER ACCESS
Route::middleware(['auth', 'user-access:user'])->group(function () {
});

// AUTH CMS ACCESS
Route::get('/admin/login', [ BackendController\AuthController::class, 'login' ])->name('admin.login');
Route::post('/admin/login', [ BackendController\AuthController::class, 'signIn' ])->name('admin.signin');
Route::prefix('admin')->middleware(['auth', 'user-access:cms'])->group(function () {
    Route::post('/logout', [ BackendController\AuthController::class, 'logout' ])->name('admin.logout');

    Route::get('/dashboard', function () {
        return view('backend.modules.dashboard.index');
    });

});
