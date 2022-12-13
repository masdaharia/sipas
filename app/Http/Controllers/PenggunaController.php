<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PenggunaController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'username' => ['required', 'unique:users,username'],
            'jenis_kelamin' => 'required',
            'tanggal_lahir' => 'required',
            'address' => 'required',
            'email' => ['required', 'unique:users,email'],
            'role' => 'required',
        ], [
            'name.required' => 'Nama Lengkap harus diisi!',
            'username.required' => 'Nama pengguna harus diisi!',
            'jenis_kelamin.required' => 'Jenis kelamin harus diisi!',
            'tanggal_lahir.required' => 'Tanggal lahir harus diisi!',
            'address.required' => 'Alamat harus diisi!',
            'email.required' => 'Email harus diisi!',
            'username.unique' => 'Nama pengguna sudah ada!',
            'email.unique' => 'Email sudah ada!',
        ]);
        $user = User::create([

            'name' => $request->name,
            'username' => $request->username,
            'jenis_kelamin' => $request->jenis_kelamin,
            'tanggal_lahir' => $request->tanggal_lahir,
            'address' => $request->address,
            'email' => $request->email,
            'password' => Hash::make('123'),
            'profil' => 'default',
        ]);
        $user->assignRole($request->role);
        return back();
    }

    public function update(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        $request->validate([
            'name' => 'required',
            'username' => ['required', 'unique:users,username,' . $request->id],
            'jenis_kelamin' => 'required',
            'tanggal_lahir' => 'required',
            'address' => 'required',
            'email' => ['required', 'unique:users,email,' . $request->id],
            'role' => 'required',
        ], [
            'name.required' => 'Nama Lengkap harus diisi!',
            'username.required' => 'Nama pengguna harus diisi!',
            'jenis_kelamin.required' => 'Jenis kelamin harus diisi!',
            'tanggal_lahir.required' => 'Tanggal lahir harus diisi!',
            'address.required' => 'Alamat harus diisi!',
            'email.required' => 'Email harus diisi!',
            'role.required' => 'Role harus diisi!',
            'username.unique' => 'Nama pengguna sudah ada!',
            'email.unique' => 'Email sudah ada!',
        ]);
        user::where('id', $request->id)->update([
            'name' => $request->name,
            'username' => $request->username,
            'jenis_kelamin' => $request->jenis_kelamin,
            'tanggal_lahir' => $request->tanggal_lahir,
            'address' => $request->address,
            'email' => $request->email,
            'password' => Hash::make('123'),
        ]);
        $user->syncRoles($request->role);
        return back();
    }

    public function index()
    {
        return inertia('Admin/Pengguna');
    }

    public function data()
    {
        User::with('roles')->latest()->get();
        return User::with('roles')->latest()->get();
    }

    public function delete(Request $request)
    {
        User::where('id', $request->id)->delete();
        History::where('id_Client', $request->id)->delete();
        return back();
    }
}
