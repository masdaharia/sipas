<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KonsultasiController extends Controller
{
    public function index()
    {
        return inertia('User/Konsultasi');
    }
}
