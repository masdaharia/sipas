<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ModelHasRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('model_has_roles')->delete();

        \DB::table('model_has_roles')->insert(array(
            0 =>
            array(
                'model_id' => 1,
                'model_type' => 'App\\Models\\User',
                'role_id' => 1,
            ),
            1 =>
            array(
                'model_id' => 2,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            2 =>
            array(
                'model_id' => 3,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            3 =>
            array(
                'model_id' => 4,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            4 =>
            array(
                'model_id' => 5,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            5 =>
            array(
                'model_id' => 6,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            6 =>
            array(
                'model_id' => 7,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            7 =>
            array(
                'model_id' => 8,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            8 =>
            array(
                'model_id' => 9,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            9 =>
            array(
                'model_id' => 10,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            10 =>
            array(
                'model_id' => 11,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            11 =>
            array(
                'model_id' => 12,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            12 =>
            array(
                'model_id' => 13,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            13 =>
            array(
                'model_id' => 14,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            14 =>
            array(
                'model_id' => 15,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            15 =>
            array(
                'model_id' => 16,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            16 =>
            array(
                'model_id' => 17,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            17 =>
            array(
                'model_id' => 18,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            18 =>
            array(
                'model_id' => 19,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            19 =>
            array(
                'model_id' => 20,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            20 =>
            array(
                'model_id' => 21,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            21 =>
            array(
                'model_id' => 22,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            22 =>
            array(
                'model_id' => 23,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
            23 =>
            array(
                'model_id' => 24,
                'model_type' => 'App\\Models\\User',
                'role_id' => 2,
            ),
        ));
    }
}
