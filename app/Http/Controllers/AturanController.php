<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AturanController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'penyakit_id' => 'required',
            'gejala_id' => 'required',
            'bobot' => 'required',

        ], [
            'penyakit_id.required' => 'Nama penyakit harus diisi!',
            'gejala_id.required' => 'Nama Gejala harus diisi!',
            'bobot.unique' => 'Bobot harus diisi!',
        ]);
        $cedata = Rule::where('penyakit_id', $request->penyakit_id)->where('gejala_id', $request->gejala_id)->first();
        if ($cedata == null) {
            Rule::create([
                'penyakit_id' => $request->penyakit_id,
                'gejala_id' => $request->gejala_id,
                'bobot' => $request->bobot,
            ]);
            return back();
        } else {
            // dd("asdsa");
            throw ValidationException::withMessages([
                'type' => 'error',
                'message' => 'Data Aturan yang dimasukkan sudah ada!'
            ]);
        }
    }

    public function index()
    {
        return inertia('Admin/Aturan');
    }

    public function data()
    {
        return Rule::with(['disease', 'symptom'])->latest()->get();
    }

    public function delete(Request $request)
    {
        Rule::where('id', $request->id)->delete();
        return back();
    }

    public function update(Request $request)
    {
        $request->validate([
            'penyakit_id' => ['required'],
            'gejala_id' => ['required'],
            'bobot' => ['required'],
        ], [
            'penyakit_id.required' => 'Penyakit belum di isi!',
            'gejala_id.required' => 'Gejala belum di isi!',
            'bobot.required' => 'Bobot belum di isi!',
        ]);
        $cek = Rule::where('id', $request->id)->where('penyakit_id', $request->penyakit_id)->where('gejala_id', $request->gejala_id)->first();
        if ($cek != null) {
            Rule::where('id', $request->id)->update([
                'bobot' => $request->bobot,
            ]);
            return back();
        } else {
            $cek2 = Rule::where('penyakit_id', $request->penyakit_id)->where('gejala_id', $request->gejala_id)->first();
            if ($cek2 == null) {
                Rule::where('id', $request->id)->update([
                    'penyakit_id' => $request->penyakit_id,
                    'gejala_id' => $request->gejala_id,
                    'bobot' => $request->bobot,
                ]);
                return back();
            } else {
                // return "salah";
                throw ValidationException::withMessages([
                    'type' => 'error',
                    'message' => 'Data Aturan yang dimasukkan sudah ada!'
                ]);
            }
        }
    }
}
