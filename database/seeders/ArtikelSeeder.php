<?php

namespace Database\Seeders;

use App\Models\artikel;
use Illuminate\Database\Seeder;

class ArtikelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $artikel = [
            [
                'judul_artikel' => 'Judul 1',
                'isi_artikel' => 'Isi 1',
                'sumber_artikel' => 'Sumber 1',
                'gambar' => 'tes1.jpg',
            ],
            [
                'judul_artikel' => 'Judul 2',
                'isi_artikel' => 'Isi 2',
                'sumber_artikel' => 'Sumber 2',
                'gambar' => 'tes2.jpg',
            ],
            [
                'judul_artikel' => 'Judul 3',
                'isi_artikel' => 'Isi 3',
                'sumber_artikel' => 'Sumber 3',
                'gambar' => 'tes3.jpg',
            ],

            [
                'judul_artikel' => 'Judul n',
                'isi_artikel' => 'Isi n',
                'sumber_artikel' => 'Sumber n',
                'gambar' => 'n.jpg',
            ]
        ];

        artikel::insert($artikel);
    }
}
