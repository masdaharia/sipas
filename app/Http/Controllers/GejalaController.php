<?php

namespace App\Http\Controllers;

use App\Models\Symptom;
use Illuminate\Http\Request;

class GejalaController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'kode_gejala' => 'required|unique:symptoms',
            'nama_gejala' => 'required',
            'gambar' => 'required'
        ], [
            'kode_gejala.required' => 'Kode gejala harus diisi!',
            'nama_gejala.required' => 'Nama gejala harus diisi!',
            'kode_gejala.unique' => 'Kode gejala sudah digunakan!',
            'gambar.required' => 'Gambar harus diupload!',
        ]);

        $path = $request->gambar[0]->store('public/gambar');

        Symptom::create([
            'kode_gejala' => $request->kode_gejala,
            'nama_gejala' => $request->nama_gejala,
            'gambar' => $path,
            'deskripsi' => $request->deskripsi
        ]);

        return back();
    }

    public function delete(Request $request)
    {
        Symptom::where('id', $request->id)->delete();
        return back();
    }

    public function update(Request $request)
    {
        $request->validate([
            'nama_gejala' => ['required'],
            'kode_gejala' => ['required'],
            'deskripsi' => ['required'],
        ], [
            'nama_gejala.required' => 'Nama Gejala belum di isi!',
            'kode_gejala.required' => 'Kode Gejala belum di isi!',
            'deskripsi.required' => 'Deskripsi tidak boleh kosong!',
        ]);
        if ($request->file("gambar")) {
            $path = $request->gambar[0]->store('public/gambar');
        }
        $cek = Symptom::where('id', $request->id)->first();
        if ($cek->kode_gejala == $request->kode_gejala && $cek->nama_gejala == $request->nama_gejala) {

            if ($request->file("gambar")) {
                Symptom::where('id', $request->id)->update([
                    'kode_gejala' => $request->kode_gejala,
                    'nama_gejala' => $request->nama_gejala,
                    'gambar' => $path,
                    'deskripsi' => $request->deskripsi
                ]);
            } else {
                Symptom::where('id', $request->id)->update([
                    'kode_gejala' => $request->kode_gejala,
                    'nama_gejala' => $request->nama_gejala,
                    'deskripsi' => $request->deskripsi
                ]);
            }

            return back();
        } else {
            if ($cek->kode_gejala == $request->kode_gejala) {
                $request->validate([
                    'nama_gejala' => ['required', 'unique:symptoms,nama_gejala'],

                ], [
                    'nama_gejala.required' => 'Nama Gejala belum di isi!',
                    'nama_gejala.unique' => 'Nama Gejala sudah ada!',
                ]);
            } elseif ($cek->nama_gejala == $request->nama_gejala) {
                $request->validate([
                    'kode_gejala' => ['required', 'unique:symptoms,kode_gejala'],

                ], [
                    'kode_gejala.required' => 'Kode Gejala belum di isi!',
                    'kode_gejala.unique' => 'Kode Gejala sudah ada!',
                ]);
            } else {
                $request->validate([
                    'nama_gejala' => ['required', 'unique:gejalas,nama_gejala'],
                    'kode_gejala' => ['required', 'unique:gejalas,kode_gejala'],
                ], [
                    'nama_gejala.required' => 'Nama Gejala belum di isi!',
                    'nama_gejala.unique' => 'Nama Gejala sudah ada!',
                    'kode_gejala.required' => 'Kode Gejala belum di isi!',
                    'kode_gejala.unique' => 'Kode Gejala sudah ada!',
                ]);
            }
        }
        if ($request->file("gambar")) {
            Symptom::where('id', $request->id)->update([
                'kode_gejala' => $request->kode_gejala,
                'nama_gejala' => $request->nama_gejala,
                'gambar' => $path,
                'deskripsi' => $request->deskripsi
            ]);
        } else {
            Symptom::where('id', $request->id)->update([
                'kode_gejala' => $request->kode_gejala,
                'nama_gejala' => $request->nama_gejala,
                'deskripsi' => $request->deskripsi
            ]);
        }
        return back();
    }

    public function index()
    {
        return inertia('Admin/Gejala');
    }
    public function data()
    {
        return Symptom::latest()->get();
    }
}
