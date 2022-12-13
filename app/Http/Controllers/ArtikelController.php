<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use App\Models\Disease;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ArtikelController extends Controller
{
    public function store(Request $request)
    {
        // return $request;
        $request->validate([
            'judul_artikel' => ['required', 'unique:artikels,judul_artikel'],
            'isi_artikel' => 'required',
            'sumber_artikel' => 'required',
            'gambar' => 'required',
        ], [
            'judul_artikel.required' => 'Judul artikel harus diisi!',
            'isi_artikel.required' => 'Isi artikel harus diisi!',
            'sumber_artikel.required' => 'Sumber artikel harus diisi!',
            'gambar.required' => 'Gambar harus diisi',
            'judul_artikel.unique' => 'Kode penyakit sudah digunakan!',
        ]);

        $foto = $request->file('gambar');

        $path = $request->gambar[0]->store('public/gambar');

        Artikel::create([
            'judul_artikel' => $request->judul_artikel,
            'isi_artikel' => $request->isi_artikel,
            'sumber_artikel' => $request->sumber_artikel,
            'gambar' => $path,
        ]);

        return back();
    }

    public function delete(Request $request)
    {
        Artikel::where('id', $request->id)->delete();
        return back();
    }

    public function update(Request $request)
    {
        $request->validate([
            'judul_artikel' => ['required', 'unique:artikels,judul_artikel,' . $request->id],
            'isi_artikel' => ['required'],
            'sumber_artikel' => ['required'],

            'gambar' => ['required']
        ], [
            'judul_artikel.required' => 'Kode Penyakit belum di isi!',
            'isi_artikel.required' => 'Nama Penyakit belum di isi!',
            'judul_artikel.unique' => 'Judul artikel sudah ada!',
            'sumber_artikel.required' => 'Sumber artikel belum di isi!',

            'gambar.path' => 'Gambar belum diisi!'
        ]);

        if ($request->file('gambar')) {
            // return "ada";
            Storage::delete(Artikel::where('id', $request->id)->first()->gambar);

            $path = $request->gambar[0]->store('public/gambar/penyakit');

            Artikel::where('id', $request->id)->update([
                'judul_artikel' => $request->judul_artikel,
                'isi_artikel' => $request->isi_artikel,
                'sumber_artikel' => $request->sumber_artikel,

                'gambar' => $path,
            ]);
            return back();
        } else {
            // return "tdk ada";
            Artikel::where('id', $request->id)->update([
                'judul_artikel' => $request->judul_artikel,
                'isi_artikel' => $request->isi_artikel,
                'sumber_artikel' => $request->sumber_artikel,


            ]);
        }
        return back();
    }

    public function index()
    {
        return inertia('Admin/Artikel');
    }

    public function indexUser()
    {
        $dataArtikel = Artikel::all();
        return inertia('User/Artikel', [
            'artikel' => $dataArtikel
        ]);
    }

    public function data()
    {
        return Artikel::latest()->get();
    }
}
