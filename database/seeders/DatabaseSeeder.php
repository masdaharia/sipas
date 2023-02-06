<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        // $this->call(UserSeeder::class);
        // $this->call(PenyakitSeeder::class);
        // $this->call(GejalaSeeder::class);
        // $this->call(AturanSeeder::class);
        // $this->call(ArtikelSeeder::class);
        // \App\Models\User::factory(10)->create();
        $this->call(DiseasesTableSeeder::class);
        $this->call(HistoriesTableSeeder::class);
        $this->call(RulesTableSeeder::class);
        $this->call(SymptomsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ModelHasRolesTableSeeder::class);
    }
}
