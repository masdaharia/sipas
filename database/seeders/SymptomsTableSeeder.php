<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SymptomsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('symptoms')->delete();
        
        \DB::table('symptoms')->insert(array (
            0 => 
            array (
                'id' => 1,
                'kode_gejala' => 'G01',
                'nama_gejala' => 'Terdapat benjolan berwarna putih',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'kode_gejala' => 'G02',
                'nama_gejala' => 'Terdapat benjolan berwarna hitam / kecoklatan',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'kode_gejala' => 'G03',
                'nama_gejala' => 'Terdapat benjolan berwarna merah mudah atau merah',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'kode_gejala' => 'G04',
                'nama_gejala' => 'Muncul benjolan di daerah dahi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'kode_gejala' => 'G05',
                'nama_gejala' => 'Muncul benjolan di daerah hidung',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'kode_gejala' => 'G06',
                'nama_gejala' => 'Muncul benjolan di daerah pipi',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'kode_gejala' => 'G07',
                'nama_gejala' => 'Muncul benjolan di daerah dagu',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'kode_gejala' => 'G08',
                'nama_gejala' => 'Menimbulkan rasa gatal atau panas',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'kode_gejala' => 'G09',
                'nama_gejala' => 'Terdapat benjolan yang meradang',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'kode_gejala' => 'G010',
                'nama_gejala' => 'Terdapat benjolan yang tidak meradang',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'kode_gejala' => 'G011',
                'nama_gejala' => 'Benjolan berukuran <5mm',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'kode_gejala' => 'G012',
                'nama_gejala' => 'Benjolan berukuran 5-10mm ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 13,
                'kode_gejala' => 'G013',
            'nama_gejala' => 'Tekstur benjolan lunak (pastikan tangan dalam keadaan bersih saat memegang benjolan)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 14,
                'kode_gejala' => 'G014',
            'nama_gejala' => 'Tekstur benjolan keras (pastikan tangan dalam keadaan bersih saat memegang benjolan)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'kode_gejala' => 'G015',
            'nama_gejala' => 'Penyembuhan benjolan cepat (benjolan mudah kempes)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'kode_gejala' => 'G016',
            'nama_gejala' => 'Penyembuhan benjolan lama (benjolan sulit dihilangkan)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
                'kode_gejala' => 'G017',
            'nama_gejala' => 'Menimbulkan rasa sakit atau nyeri ketika benjolan disentuh atau tidak disentuh (pastikan tangan dalam keadaan bersih saat memegang benjolan)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'kode_gejala' => 'G018',
                'nama_gejala' => 'Warna kulit disekitar benjolan berwarna merah muda atau merah',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'kode_gejala' => 'G019',
                'nama_gejala' => 'Menimbulkan jaringan parut pada bekas benjolan',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'kode_gejala' => 'G020',
                'nama_gejala' => 'Terdapat nanah pada benjolan',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 21,
                'kode_gejala' => 'G021',
                'nama_gejala' => 'Terdapat benjolan yang saling menyambung dalam satu area',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 22,
                'kode_gejala' => 'G022',
            'nama_gejala' => 'Benjolan muncul disaat tertentu (saat menstruasi atau kondisi wajah sangat kotor)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            22 => 
            array (
                'id' => 23,
                'kode_gejala' => 'G023',
                'nama_gejala' => 'Benjolan muncul setiap saat',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}