<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use domain\Facades\UserFacade;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $response['student'] = UserFacade::all();

    return Inertia::render('Dashboard', $response);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('delete/{id}', [HomeController::class, "delete"])->name('student.delete');

Route::get('status/{id}', [HomeController::class, "status"])->name('student.status');


Route::post('/add', [HomeController::class, "add"])->name('student.add');

Route::post('/update', [HomeController::class, "update"])->name('student.update');


require __DIR__.'/auth.php';
