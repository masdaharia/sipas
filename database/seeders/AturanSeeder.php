<?php

namespace Database\Seeders;

use App\Models\Rule;
use Illuminate\Database\Seeder;

class AturanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $aturan = [
            //Aturan gejala 1
            [
                'penyakit_id' => '1',
                'gejala_id' => '1',
                'bobot' => "0.8",
            ],
            //Aturan gejala 2
            [
                'penyakit_id' => '2',
                'gejala_id' => '2',
                'bobot' => "0.8",
            ],
            //Aturan gejala 3
            [
                'penyakit_id' => '3',
                'gejala_id' => '3',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '4',
                'gejala_id' => '3',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '3',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '3',
                'bobot' => "0.8",
            ],
            //Aturan gejala 4
            [
                'penyakit_id' => '1',
                'gejala_id' => '4',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '4',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '3',
                'gejala_id' => '4',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '4',
                'gejala_id' => '4',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '4',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '4',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 5
            [
                'penyakit_id' => '1',
                'gejala_id' => '5',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '5',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '3',
                'gejala_id' => '5',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '4',
                'gejala_id' => '5',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '5',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '5',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 6
            [
                'penyakit_id' => '1',
                'gejala_id' => '6',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '6',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '3',
                'gejala_id' => '6',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '4',
                'gejala_id' => '6',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '6',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '6',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 7
            [
                'penyakit_id' => '1',
                'gejala_id' => '7',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '7',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '3',
                'gejala_id' => '7',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '4',
                'gejala_id' => '7',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '7',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '7',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 8
            [
                'penyakit_id' => '4',
                'gejala_id' => '8',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '8',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '8',
                'bobot' => "0.8",
            ],
            // Aturan Gejala 9
            [
                'penyakit_id' => '3',
                'gejala_id' => '9',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '4',
                'gejala_id' => '9',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '9',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '9',
                'bobot' => "0.6",
            ],
            //Aturan Gejala 10
            [
                'penyakit_id' => '1',
                'gejala_id' => '10',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '10',
                'bobot' => "0.6",
            ],
            // [
            //     'penyakit_id' => '3',
            //     'gejala_id' => '10',
            //     'bobot' => "0.6",
            // ],
            //Aturan Gejala 11
            [
                'penyakit_id' => '1',
                'gejala_id' => '11',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '11',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '3',
                'gejala_id' => '11',
                'bobot' => "0.6",
            ],

            [
                'penyakit_id' => '4',
                'gejala_id' => '11',
                'bobot' => "0.6",
            ],
            //Aturan Gejala 12
            [
                'penyakit_id' => '5',
                'gejala_id' => '12',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '12',
                'bobot' => "0.6",
            ],
            //Aturan Gejala 13
            [
                'penyakit_id' => '3',
                'gejala_id' => '13',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '4',
                'gejala_id' => '13',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '13',
                'bobot' => "0.6",
            ],
            //Aturan Gejala 14
            [
                'penyakit_id' => '1',
                'gejala_id' => '14',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '14',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '14',
                'bobot' => "0.6",
            ],
            //Aturan Gejala 15
            [
                'penyakit_id' => '1',
                'gejala_id' => '15',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '15',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '3',
                'gejala_id' => '15',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 16
            [
                'penyakit_id' => '4',
                'gejala_id' => '16',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '16',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '16',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 17
            [
                'penyakit_id' => '4',
                'gejala_id' => '17',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '17',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '17',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 18
            [
                'penyakit_id' => '4',
                'gejala_id' => '18',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '18',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '18',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 19
            [
                'penyakit_id' => '5',
                'gejala_id' => '19',
                'bobot' => "0.4",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '19',
                'bobot' => "0.4",
            ],
            //Aturan Gejala 20
            [
                'penyakit_id' => '4',
                'gejala_id' => '20',
                'bobot' => "0.6",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '20',
                'bobot' => "0.6",
            ],
            //Aturan Gejala 21
            [
                'penyakit_id' => '6',
                'gejala_id' => '21',
                'bobot' => "0.8",
            ],
            //Aturan Gejala 22
            [
                'penyakit_id' => '1',
                'gejala_id' => '22',
                'bobot' => "0.4",
            ],
            [
                'penyakit_id' => '2',
                'gejala_id' => '22',
                'bobot' => "0.4",
            ],
            [
                'penyakit_id' => '3',
                'gejala_id' => '22',
                'bobot' => "0.4",
            ],
            [
                'penyakit_id' => '4',
                'gejala_id' => '22',
                'bobot' => "0.4",
            ],
            //Aturan Gejala 23
            // [
            //     'penyakit_id' => '1',
            //     'gejala_id' => '23',
            //     'bobot' => "0.8",
            // ],
            // [
            //     'penyakit_id' => '2',
            //     'gejala_id' => '23',
            //     'bobot' => "0.8",
            // ],
            // [
            //     'penyakit_id' => '3',
            //     'gejala_id' => '23',
            //     'bobot' => "0.8",
            // ],
            // [
            //     'penyakit_id' => '4',
            //     'gejala_id' => '23',
            //     'bobot' => "0.8",
            // ],
            [
                'penyakit_id' => '5',
                'gejala_id' => '23',
                'bobot' => "0.8",
            ],
            [
                'penyakit_id' => '6',
                'gejala_id' => '23',
                'bobot' => "0.8",
            ]
        ];
        Rule::insert($aturan);
    }
}
