<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Models\Organizacion;
use App\Models\Voluntariado;
use App\Http\Controllers\OrganizacionController;
use App\Http\Controllers\VoluntariadoController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('voluntariados', function () {
    return Inertia::render('voluntariados');
})->name('voluntariados');

Route::get('organizaciones', function () {
    return Inertia::render('organizaciones');
})->name('organizaciones');

Route::get('quienes', function () {
    return Inertia::render('quienes');
})->name('quienes');

Route::get('api', function () {
    return Inertia::render('api');
})->name('api');

Route::get('api/organizaciones', function () {
    return Organizacion::all();
})->name('api.organizaciones');

Route::get('api/voluntariados', function () {
    return Voluntariado::all();
})->name('api.voluntariados');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/api/organizaciones', [OrganizacionController::class, 'index']);
Route::post('/api/organizaciones', [OrganizacionController::class, 'store']);
Route::get('/api/organizaciones/{id}', [OrganizacionController::class, 'show']);
Route::put('/api/organizaciones/{id}', [OrganizacionController::class, 'update']);
Route::delete('/api/organizaciones/{id}', [OrganizacionController::class, 'destroy']);

Route::get('/api/voluntariados', [VoluntariadoController::class, 'index']);
Route::get('/api/voluntariados/{id}', [VoluntariadoController::class, 'show']);
Route::post('/api/voluntariados', [VoluntariadoController::class, 'store']);
Route::put('/api/voluntariados/{id}', [VoluntariadoController::class, 'update']);
Route::delete('/api/voluntariados/{id}', [VoluntariadoController::class, 'destroy']);

Route::middleware(['auth', 'verified'])
    ->prefix('dashboard')
    ->group(function () {

    Route::get('/organizaciones', fn() => Inertia::render(
        'Dashboard/Organizaciones/Index'
    ));

    Route::get('/organizaciones/create', fn() => Inertia::render(
        'Dashboard/Organizaciones/Create'
    ));

    Route::get('/organizaciones/{id}/edit', fn($id) => Inertia::render(
        'Dashboard/Organizaciones/Edit',
        ['id' => $id]
    ));

    Route::get('/voluntariados', fn() => Inertia::render(
        'Dashboard/Voluntariados/Index'
    ));
    Route::get('/voluntariados/create', fn() => Inertia::render(
        'Dashboard/Voluntariados/Create'
    ));
    Route::get('/voluntariados/{id}/edit', fn($id) => Inertia::render(
        'Dashboard/Voluntariados/Edit',
        ['id' => $id]
    ));
});

require __DIR__.'/settings.php';
