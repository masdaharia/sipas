<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RulesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('rules')->delete();
        
        \DB::table('rules')->insert(array (
            0 => 
            array (
                'id' => 1,
                'penyakit_id' => '1',
                'gejala_id' => '1',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'penyakit_id' => '2',
                'gejala_id' => '2',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'penyakit_id' => '3',
                'gejala_id' => '3',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'penyakit_id' => '4',
                'gejala_id' => '3',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'penyakit_id' => '5',
                'gejala_id' => '3',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'penyakit_id' => '6',
                'gejala_id' => '3',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'penyakit_id' => '1',
                'gejala_id' => '4',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'penyakit_id' => '2',
                'gejala_id' => '4',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'penyakit_id' => '3',
                'gejala_id' => '4',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'penyakit_id' => '4',
                'gejala_id' => '4',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'penyakit_id' => '5',
                'gejala_id' => '4',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'penyakit_id' => '6',
                'gejala_id' => '4',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 13,
                'penyakit_id' => '1',
                'gejala_id' => '5',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 14,
                'penyakit_id' => '2',
                'gejala_id' => '5',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'penyakit_id' => '3',
                'gejala_id' => '5',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'penyakit_id' => '4',
                'gejala_id' => '5',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
                'penyakit_id' => '5',
                'gejala_id' => '5',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'penyakit_id' => '6',
                'gejala_id' => '5',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'penyakit_id' => '1',
                'gejala_id' => '6',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'penyakit_id' => '2',
                'gejala_id' => '6',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 21,
                'penyakit_id' => '3',
                'gejala_id' => '6',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 22,
                'penyakit_id' => '4',
                'gejala_id' => '6',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            22 => 
            array (
                'id' => 23,
                'penyakit_id' => '5',
                'gejala_id' => '6',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            23 => 
            array (
                'id' => 24,
                'penyakit_id' => '6',
                'gejala_id' => '6',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            24 => 
            array (
                'id' => 25,
                'penyakit_id' => '1',
                'gejala_id' => '7',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            25 => 
            array (
                'id' => 26,
                'penyakit_id' => '2',
                'gejala_id' => '7',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            26 => 
            array (
                'id' => 27,
                'penyakit_id' => '3',
                'gejala_id' => '7',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            27 => 
            array (
                'id' => 28,
                'penyakit_id' => '4',
                'gejala_id' => '7',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            28 => 
            array (
                'id' => 29,
                'penyakit_id' => '5',
                'gejala_id' => '7',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            29 => 
            array (
                'id' => 30,
                'penyakit_id' => '6',
                'gejala_id' => '7',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            30 => 
            array (
                'id' => 31,
                'penyakit_id' => '4',
                'gejala_id' => '8',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            31 => 
            array (
                'id' => 32,
                'penyakit_id' => '5',
                'gejala_id' => '8',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            32 => 
            array (
                'id' => 33,
                'penyakit_id' => '6',
                'gejala_id' => '8',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            33 => 
            array (
                'id' => 34,
                'penyakit_id' => '3',
                'gejala_id' => '9',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            34 => 
            array (
                'id' => 35,
                'penyakit_id' => '4',
                'gejala_id' => '9',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            35 => 
            array (
                'id' => 36,
                'penyakit_id' => '5',
                'gejala_id' => '9',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            36 => 
            array (
                'id' => 37,
                'penyakit_id' => '6',
                'gejala_id' => '9',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            37 => 
            array (
                'id' => 38,
                'penyakit_id' => '1',
                'gejala_id' => '10',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            38 => 
            array (
                'id' => 39,
                'penyakit_id' => '2',
                'gejala_id' => '10',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            39 => 
            array (
                'id' => 40,
                'penyakit_id' => '1',
                'gejala_id' => '11',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            40 => 
            array (
                'id' => 41,
                'penyakit_id' => '2',
                'gejala_id' => '11',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            41 => 
            array (
                'id' => 42,
                'penyakit_id' => '3',
                'gejala_id' => '11',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            42 => 
            array (
                'id' => 43,
                'penyakit_id' => '4',
                'gejala_id' => '11',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            43 => 
            array (
                'id' => 44,
                'penyakit_id' => '5',
                'gejala_id' => '12',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            44 => 
            array (
                'id' => 45,
                'penyakit_id' => '6',
                'gejala_id' => '12',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            45 => 
            array (
                'id' => 46,
                'penyakit_id' => '3',
                'gejala_id' => '13',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            46 => 
            array (
                'id' => 47,
                'penyakit_id' => '4',
                'gejala_id' => '13',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            47 => 
            array (
                'id' => 48,
                'penyakit_id' => '5',
                'gejala_id' => '13',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            48 => 
            array (
                'id' => 49,
                'penyakit_id' => '1',
                'gejala_id' => '14',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            49 => 
            array (
                'id' => 50,
                'penyakit_id' => '2',
                'gejala_id' => '14',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            50 => 
            array (
                'id' => 51,
                'penyakit_id' => '6',
                'gejala_id' => '14',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            51 => 
            array (
                'id' => 52,
                'penyakit_id' => '1',
                'gejala_id' => '15',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            52 => 
            array (
                'id' => 53,
                'penyakit_id' => '2',
                'gejala_id' => '15',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            53 => 
            array (
                'id' => 54,
                'penyakit_id' => '3',
                'gejala_id' => '15',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            54 => 
            array (
                'id' => 55,
                'penyakit_id' => '4',
                'gejala_id' => '16',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            55 => 
            array (
                'id' => 56,
                'penyakit_id' => '5',
                'gejala_id' => '16',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            56 => 
            array (
                'id' => 57,
                'penyakit_id' => '6',
                'gejala_id' => '16',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            57 => 
            array (
                'id' => 58,
                'penyakit_id' => '4',
                'gejala_id' => '17',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            58 => 
            array (
                'id' => 59,
                'penyakit_id' => '5',
                'gejala_id' => '17',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            59 => 
            array (
                'id' => 60,
                'penyakit_id' => '6',
                'gejala_id' => '17',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            60 => 
            array (
                'id' => 61,
                'penyakit_id' => '4',
                'gejala_id' => '18',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            61 => 
            array (
                'id' => 62,
                'penyakit_id' => '5',
                'gejala_id' => '18',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            62 => 
            array (
                'id' => 63,
                'penyakit_id' => '6',
                'gejala_id' => '18',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            63 => 
            array (
                'id' => 64,
                'penyakit_id' => '5',
                'gejala_id' => '19',
                'bobot' => 0.4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            64 => 
            array (
                'id' => 65,
                'penyakit_id' => '6',
                'gejala_id' => '19',
                'bobot' => 0.4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            65 => 
            array (
                'id' => 66,
                'penyakit_id' => '4',
                'gejala_id' => '20',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            66 => 
            array (
                'id' => 67,
                'penyakit_id' => '6',
                'gejala_id' => '20',
                'bobot' => 0.6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            67 => 
            array (
                'id' => 68,
                'penyakit_id' => '6',
                'gejala_id' => '21',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            68 => 
            array (
                'id' => 69,
                'penyakit_id' => '1',
                'gejala_id' => '22',
                'bobot' => 0.4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            69 => 
            array (
                'id' => 70,
                'penyakit_id' => '2',
                'gejala_id' => '22',
                'bobot' => 0.4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            70 => 
            array (
                'id' => 71,
                'penyakit_id' => '3',
                'gejala_id' => '22',
                'bobot' => 0.4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            71 => 
            array (
                'id' => 72,
                'penyakit_id' => '4',
                'gejala_id' => '22',
                'bobot' => 0.4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            72 => 
            array (
                'id' => 73,
                'penyakit_id' => '1',
                'gejala_id' => '23',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            73 => 
            array (
                'id' => 74,
                'penyakit_id' => '2',
                'gejala_id' => '23',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            74 => 
            array (
                'id' => 75,
                'penyakit_id' => '3',
                'gejala_id' => '23',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            75 => 
            array (
                'id' => 76,
                'penyakit_id' => '4',
                'gejala_id' => '23',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            76 => 
            array (
                'id' => 77,
                'penyakit_id' => '5',
                'gejala_id' => '23',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            77 => 
            array (
                'id' => 78,
                'penyakit_id' => '6',
                'gejala_id' => '23',
                'bobot' => 0.8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}