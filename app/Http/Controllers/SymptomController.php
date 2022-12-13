<?php

namespace App\Http\Controllers;

use App\Models\Symptom;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SymptomController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'code' => 'required|unique:symptoms',
        ], [
            'name.required' => 'Nama gejala harus diisi!',
            'code.required' => 'Kode gejala harus diisi!',
            'name.unique' => 'Kode gejala sudah digunakan!',
        ]);

        Symptom::create([
            'name' => $request->name,
            'code' => $request->code,
        ]);

        return back();
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'code' => 'required',
        ]);

        $code = Symptom::where('code', $request->code)->whereNotIn('id', [$request->id])->get();

        if (count($code) > 0) {
            throw ValidationException::withMessages([
                'duplicate' => 'Kode Gejala Sudah terdaftar!'
            ]);
        } else {
            Symptom::where('id', $request->id)->update([
                'name' => $request->name,
                'code' => $request->code,
            ]);
        }

        return back();
    }

    public function delete(Request $request)
    {
        Symptom::where('id', $request->id)->delete();

        return back();
    }

    public function data()
    {
        return Symptom::latest()->get();
    }
}
