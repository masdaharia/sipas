<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\Symptom;
use Illuminate\Http\Request;

class DashboardUserController extends Controller
{
    public function index()
    {
        return inertia('User/Dashboard', with([
            'gejala' => Symptom::get()
        ]));
    }
}
