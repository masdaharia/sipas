<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function index()
    {
        return inertia("Login");
    }

    public function register()
    {
        return inertia('Register');
    }

    public function insert(Request $request)
    {
        // return $request;

        $request->validate([
            'name' => 'required',
            'username' => ['required', 'unique:users,username'],
            'tanggal_lahir' => 'required',
            'jenis_kelamin' => 'required',
            'address' => 'required',
            'email' => ['required', 'unique:users,email'],
            'password' => 'required',
            'confpass' => 'required'

        ]);
        if ($request->password != $request->confpass) {
            throw ValidationException::withMessages([
                'confpass' => 'Konfirmasi kata sandi salah!',
            ]);
        } else {

            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'tanggal_lahir' => Date($request->tanggal_lahir),
                'jenis_kelamin' => $request->jenis_kelamin,
                'address' => $request->address,
                'profil' => "default",
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
            $user->assignRole('user');
        }


        // return back();
        return redirect('/login');
    }

    public function checklogin(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
        $user = User::where('username', $request->username)->first();

        if (!$user) {
            throw ValidationException::withMessages([
                'failed' => 'Nama Pengguna tidak terdaftar!',
            ]);
        } else {
            if (Auth::attempt($request->only('username', 'password'))) {
                session()->regenerate();

                if ($user->hasRole('admin')) {
                    return redirect()->route('admin.dashboard');
                } else {
                    return redirect()->route('user.dashboard');
                }
            } else {
                throw ValidationException::withMessages([
                    'failed' => 'Password salah!',
                ]);
            }
        };
    }
    public function logout()
    {
        Auth::logout();

        return redirect('/login');
    }
}
