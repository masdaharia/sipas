<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfilController extends Controller
{
    public function index()
    {
        return inertia('User/Profil');
    }

    public function ubah(Request $request)
    {
        // dd($request->id, $request->name, $request->tanggallahir, $request->gender, $request->email, $request->address, $request->username);
        $validated = $request->validate([
            'name' => 'required',
            'tanggal_lahir' => 'required',
            'jenis_kelamin' => 'required',
            'email' => ['required', 'unique:users,email,' . $request->id],
            'address' => 'required',
            'username' => ['required', 'unique:users,username,' . $request->id],
        ], [
            'name.required' => 'Nama lengkap harus diisi!',
            'tanggal_lahir.required' => 'Tanggal lahir harus diisi!',
            'jenis_kelamin.required' => 'Jenis kelamin harus diisi!',
            'email.required' => 'email harus diisi!',
            'password.required' => 'password harus diisi!',
            'username.required' => 'Nama pengguna harus diisi!',
            'username.unique' => 'Nama Pengguna sudah digunakan!',
            'email.unique' => 'Email sudah digunakan!',
        ]);
        if ($request->file('profil')) {
            $oldimage = User::where('id', $request->id)->first()->profil;
            Storage::delete($oldimage);

            $foto = $request->file('profil');
            // $nama = $foto->hashName();
            $validated['profil'] = $request->file('profil')->store('public/gambar/profil');
            // $validated['profil'] = $request->file('profil')->store('public/gambar/profil');
            // $request->gambar[0]->store('public/gambar/penyakit')
            User::where('id', $request->id)->update($validated);
            // dd($validated);
            return back();
        }


        User::where('id', $request->id)->update($validated);


        return back();
    }
}
