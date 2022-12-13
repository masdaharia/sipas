<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin\ActivityController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DoctorsController;
use App\Http\Controllers\Admin\PatientsController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\AturanController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\DiseaseController;
use App\Http\Controllers\GejalaController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\PenyakitController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\RiwayatController;
use App\Http\Controllers\RulesController;
use App\Http\Controllers\SymptomController;
use App\Http\Controllers\user\DashboardUserController;
use App\Http\Controllers\user\DempsterController;
use App\Http\Controllers\user\KonsultasiController;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\DataCollector\DataCollector;

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

// default localhost:8000

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return inertia('About');
});

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'checklogin']);

Route::get('/register', [LoginController::class, 'register']);
Route::post('/register', [LoginController::class, 'insert']);


// Route::get('/about', [AboutController::class, 'index']);

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin||user')->group(function () {
        Route::post('/ubahprofil', [ProfilController::class, 'ubah'])->name('ubah-profil');
        Route::get('/detail-{history}', [RiwayatController::class, 'detailriwayat'])->name('hasil-riwayat');
        // Route::get('/diagnosa-{history}', [RiwayatController::class, 'detaildiagnosa'])->name('hasil-diagnosa');
    });

    Route::middleware('role:admin')->group(function () {
        Route::prefix('/admin')->group(function () {
            Route::name('admin.')->group(function () {
                Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
                Route::get('/penyakit', [PenyakitController::class, 'index'])->name('penyakit');
                Route::post('/tambah-penyakit', [PenyakitController::class, 'store'])->name('tambah-penyakit');
                Route::post('/hapus-penyakit', [PenyakitController::class, 'delete'])->name('hapus-penyakit');
                Route::post('/edit-penyakit', [PenyakitController::class, 'update'])->name('edit-penyakit');

                Route::get('/gejala', [GejalaController::class, 'index'])->name('gejala');
                Route::post('/tambah-gejala', [GejalaController::class, 'store'])->name('tambah-gejala');
                Route::post('/hapus-gejala', [GejalaController::class, 'delete'])->name('hapus-gejala');
                Route::post('/edit-gejala', [GejalaController::class, 'update'])->name('edit-gejala');

                Route::get('/aturan', [AturanController::class, 'index'])->name('aturan');
                Route::post('/tambah-aturan', [AturanController::class, 'store'])->name('tambah-aturan');
                Route::post('/hapus-aturan', [AturanController::class, 'delete'])->name('hapus-aturan');
                Route::post('/edit-aturan', [AturanController::class, 'update'])->name('edit-aturan');

                Route::get('/artikel', [ArtikelController::class, 'index'])->name('artikel');
                Route::post('/tambah-artikel', [ArtikelController::class, 'store'])->name('tambah-artikel');
                Route::post('/hapus-artikel', [ArtikelController::class, 'delete'])->name('hapus-artikel');
                Route::post('/edit-artikel', [ArtikelController::class, 'update'])->name('edit-artikel');

                Route::get('/pengguna', [PenggunaController::class, 'index'])->name('pengguna');
                Route::post('/tambah-pengguna', [PenggunaController::class, 'store'])->name('tambah-pengguna');
                Route::post('/hapus-pengguna', [PenggunaController::class, 'delete'])->name('hapus-pengguna');
                Route::post('/edit-pengguna', [PenggunaController::class, 'update'])->name('edit-pengguna');

                Route::get('/profil', [ProfilController::class, 'index'])->name('profil');

                Route::get('/riwayat', [RiwayatController::class, 'index'])->name('riwayat');
                Route::post('/hapus-riwayat', [RiwayatController::class, 'delete'])->name('hapus-riwayat');

                Route::post('/logout', [LoginController::class, 'logout']);

                Route::get('/detail-{history}', [RiwayatController::class, 'detailriwayat'])->name('hasil-riwayat');
                Route::get('/diagnosa-{history}', [RiwayatController::class, 'detaildiagnosa'])->name('hasil-diagnosa');
            });
        });
    });

    Route::middleware('role:user')->group(function () {
        Route::prefix('/user')->group(function () {
            Route::name('user.')->group(function () {
                Route::get('/dashboard-user', [DashboardUserController::class, 'index'])->name('dashboard');
                Route::get('/pengguna', [PenggunaController::class, 'index'])->name('pengguna');
                Route::get('/konsultasi', [KonsultasiController::class, 'index'])->name('konsultasi');

                Route::post('/diagnosa', [DempsterController::class, 'dempster'])->name('diagosa');

                Route::get('/profil', [ProfilController::class, 'index'])->name('profil');

                Route::get('/artikel', [ArtikelController::class, 'indexUser'])->name('artikel');

                Route::get('/riwayat', [RiwayatController::class, 'index'])->name('riwayat');
                Route::post('/hapus-riwayat', [RiwayatController::class, 'delete'])->name('hapus-riwayat');


                Route::get('/detail-{history}', [RiwayatController::class, 'detailriwayat'])->name('hasil-riwayat');
                Route::get('/diagnosa-{history}', [RiwayatController::class, 'detaildiagnosa'])->name('hasil-diagnosa');

                Route::post('/logout', [LoginController::class, 'logout']);
            });
        });
    });
});
