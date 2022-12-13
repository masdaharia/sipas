<?php

namespace Database\Seeders;

use App\Models\Symptom;
use App\Models\User;
use Illuminate\Database\Seeder;

class GejalaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $gejala = [
            [
                'kode_gejala' => 'G01',
                'nama_gejala' => 'Terdapat benjolan berwarna putih',
            ],
            [
                'kode_gejala' => 'G02',
                'nama_gejala' => 'Terdapat benjolan berwarna hitam / kecoklatan',
            ],
            [
                'kode_gejala' => 'G03',
                'nama_gejala' => 'Terdapat benjolan berwarna merah mudah atau merah',
            ],
            [
                'kode_gejala' => 'G04',
                'nama_gejala' => 'Muncul benjolan di daerah dahi',
            ],
            [
                'kode_gejala' => 'G05',
                'nama_gejala' => 'Muncul benjolan di daerah hidung',
            ],
            [
                'kode_gejala' => 'G06',
                'nama_gejala' => 'Muncul benjolan di daerah pipi',
            ],
            [
                'kode_gejala' => 'G07',
                'nama_gejala' => 'Muncul benjolan di daerah dagu',
            ],
            [
                'kode_gejala' => 'G08',
                'nama_gejala' => 'Menimbulkan rasa gatal atau panas',
            ],
            [
                'kode_gejala' => 'G09',
                'nama_gejala' => 'Terdapat benjolan yang meradang',
            ],
            [
                'kode_gejala' => 'G010',
                'nama_gejala' => 'Terdapat benjolan yang tidak meradang',
            ],
            [
                'kode_gejala' => 'G011',
                'nama_gejala' => 'Benjolan berukuran <5mm, seperti ujung beras',
            ],
            [
                'kode_gejala' => 'G012',
                'nama_gejala' => 'Benjolan berukuran 5-10mm ',
            ],
            [
                'kode_gejala' => 'G013',
                'nama_gejala' => 'Tekstur benjolan lunak (pastikan tangan dalam keadaan bersih saat memegang benjolan)',
            ],
            [
                'kode_gejala' => 'G014',
                'nama_gejala' => 'Tekstur benjolan keras (pastikan tangan dalam keadaan bersih saat memegang benjolan)',
            ],
            [
                'kode_gejala' => 'G015',
                'nama_gejala' => 'Penyembuhan benjolan cepat (benjolan mudah kempes)',
            ],
            [
                'kode_gejala' => 'G016',
                'nama_gejala' => 'Penyembuhan benjolan lama (benjolan sulit dihilangkan)',
            ],
            [
                'kode_gejala' => 'G017',
                'nama_gejala' => 'Menimbulkan rasa sakit atau nyeri ketika benjolan disentuh atau tidak disentuh (pastikan tangan dalam keadaan bersih saat memegang benjolan)',
            ],
            [
                'kode_gejala' => 'G018',
                'nama_gejala' => 'Warna kulit disekitar benjolan berwarna merah muda atau merah',
            ],
            [
                'kode_gejala' => 'G019',
                'nama_gejala' => 'Menimbulkan jaringan parut pada bekas benjolan',
            ],
            [
                'kode_gejala' => 'G020',
                'nama_gejala' => 'Terdapat nanah pada benjolan',
            ],
            [
                'kode_gejala' => 'G021',
                'nama_gejala' => 'Terdapat benjolan yang saling menyambung dalam satu area',
            ],
            [
                'kode_gejala' => 'G022',
                'nama_gejala' => 'Benjolan muncul disaat tertentu (saat menstruasi atau kondisi wajah sangat kotor)',
            ],
            [
                'kode_gejala' => 'G023',
                'nama_gejala' => 'Benjolan muncul setiap saat',
            ]
        ];
        Symptom::insert($gejala);
    }
}
