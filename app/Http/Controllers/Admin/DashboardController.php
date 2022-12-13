<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\artikel;
use App\Models\Disease;
use App\Models\History;
use App\Models\Rule;
use App\Models\Symptom;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $jenispenyakit = Disease::all();
        // dd(History::all());
        $stat = [];
        foreach ($jenispenyakit as $index => $jp) {
            $stat[$index]["name"] = $jp["nama_penyakit"];
            $stat[$index][$jp["nama_penyakit"]] = History::where('hasildiagnosa', 'like', '%' . $jp["nama_penyakit"] . '%')->count();
        }
        // dd(User::where('jenis_kelamin', 'like', '%' . 'perempuan' . '%')->count());
        return inertia('Admin/Dashboard', [
            'jumlahdatapengguna' => User::role('user')->count(),
            'jumlahdatapenyakit' => Symptom::count(),
            'jumlahdatagejala' => Disease::count(),
            'jumlahdataaturan' => Rule::count(),
            'jumlahdataartikel' => artikel::count(),
            'jumlahdatariwayat' => History::count(),
            'data_diagram' => [
                'penyakit' => $stat,
                'gender' => [
                    'L' => User::where('jenis_kelamin', 'like', '%' . 'laki-laki' . '%')->count(),
                    'P' => User::where('jenis_kelamin', 'like', '%' . 'Perempuan' . '%')->count(),
                ]
            ]
        ]);
    }
}
