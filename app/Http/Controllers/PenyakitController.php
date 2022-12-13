<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PenyakitController extends Controller
{
    public function store(Request $request)
    {
        // return $request;
        $request->validate([

            'kode_penyakit' => ['required', 'unique:diseases,kode_penyakit'],
            'nama_penyakit' => ['required', 'unique:diseases,nama_penyakit'],
            'tingkat_keparahan' => 'required',
            'keterangan' => 'required',
            'saran' => 'required',
            'gambar' => 'required',
        ], [
            'kode_penyakit.required' => 'Kode penyakit harus diisi!',
            'nama_penyakit.required' => 'Nama penyakit harus diisi!',
            'tingkat_keparahan.required' => 'Tingkat keparahan harus diisi!',
            'keterangan.required' => 'Keterangan harus diisi!',
            'saran.required' => 'Saran harus diisi!',
            'gambar.required' => 'Gambar harus diisi',
            'kode_penyakit.unique' => 'Kode penyakit sudah digunakan!',
        ]);

        $foto = $request->file('gambar');

        $path = $request->gambar[0]->store('public/gambar');

        Disease::create([
            'kode_penyakit' => $request->kode_penyakit,
            'nama_penyakit' => $request->nama_penyakit,
            'tingkat_keparahan' => $request->tingkat_keparahan,
            'keterangan' => $request->keterangan,
            'saran' => $request->saran,
            'gambar' => $path,
        ]);

        return back();
    }

    public function delete(Request $request)
    {
        Disease::where('id', $request->id)->delete();
        return back();
    }

    public function update(Request $request)
    {
        $request->validate([
            'kode_penyakit' => ['required', 'unique:diseases,kode_penyakit,' . $request->id],
            'nama_penyakit' => ['required', 'unique:diseases,nama_penyakit,' . $request->id],
            'tingkat_keparahan' => ['required'],
            'keterangan' => ['required'],
            'saran' => ['required'],
            'gambar' => ['required']
        ], [
            'kode_penyakit.required' => 'Kode Penyakit belum di isi!',
            'nama_penyakit.required' => 'Nama Penyakit belum di isi!',
            'kode_penyakit.unique' => 'Kode Penyakit sudah ada!',
            'nama_penyakit.unique' => 'Nama Penyakit sudah ada!',
            'tingkat_keparahan.required' => 'Tingkat Keparahan belum di isi!',
            'keterangan.required' => 'Keterangan belum di isi!',
            'saran.required' => 'Saran belum di isi!',
            'gambar.path' => 'Gambar belum diisi!'
        ]);

        if ($request->file('gambar')) {
            // return "ada";
            Storage::delete(Disease::where('id', $request->id)->first()->gambar);

            $path = $request->gambar[0]->store('public/gambar/penyakit');

            Disease::where('id', $request->id)->update([
                'kode_penyakit' => $request->kode_penyakit,
                'nama_penyakit' => $request->nama_penyakit,
                'tingkat_keparahan' => $request->tingkat_keparahan,
                'keterangan' => $request->keterangan,
                'saran' => $request->saran,
                'gambar' => $path,
            ]);
            return back();
        } else {
            // return "tdk ada";
            Disease::where('id', $request->id)->update([
                'kode_penyakit' => $request->kode_penyakit,
                'nama_penyakit' => $request->nama_penyakit,
                'tingkat_keparahan' => $request->tingkat_keparahan,
                'keterangan' => $request->keterangan,
                'saran' => $request->saran,
            ]);
        }
        return back();
    }

    public function index()
    {
        return inertia('Admin/Penyakit');
    }

    public function data()
    {
        return Disease::latest()->get();
    }
}
