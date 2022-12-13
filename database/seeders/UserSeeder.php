<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Admin',
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'address' => 'anywhere',
            'tanggal_lahir' => Date('2000-01-06'),
            'jenis_kelamin' => 'Perempuan',
            'profil' => "default",
            'password' => Hash::make('admin123')

        ]);

        $user->assignRole('admin');

        $user2 = User::create([
            'name' => 'masdaharia',
            'username' => 'masda',
            'email' => 'masda@gmail.com',
            'address' => 'anywhere',
            'tanggal_lahir' => Date('2000-01-06'),
            'profil' => "default",
            'jenis_kelamin' => 'Perempuan',
            'password' => Hash::make('123')

        ]);

        $user2->assignRole('user');

        $user3 = User::create([
            'name' => 'dalle',
            'username' => 'dalle',
            'email' => 'dalle1701@gmail.com',
            'address' => 'Tanjung Pangimpuan',
            'tanggal_lahir' => Date('1996-01-17'),
            'profil' => "default",
            'jenis_kelamin' => 'Perempuan',
            'password' => Hash::make('1234')

        ]);

        $user3->assignRole('user');

        $user4 = User::create([
            'name' => 'Dai Saputra',
            'username' => 'dai',
            'email' => 'dai1904@gmail.com',
            'address' => 'BTN Alyuna 2',
            'tanggal_lahir' => Date('1999-04-19'),
            'profil' => "default",
            'jenis_kelamin' => 'Laki-laki',
            'password' => Hash::make('1234')

        ]);

        $user4->assignRole('user');
    }
}
