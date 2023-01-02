<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\History;
use App\Models\Symptom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardUserController extends Controller
{
    public function index()
    {
        $auth = Auth::user();
        // \dd(History::where('id_client', $auth->id)->orderBy('id', 'desc')->first());
        return inertia('User/Dashboard', with([
            'gejala' => Symptom::get(),
            'lastcheck' => History::where('id_client', $auth->id)->orderBy('id', 'desc')->first()
        ]));
    }
}
