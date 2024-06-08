<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            [
                'email' => 'admin@admin.com', // Attributes to search for
            ],
            [
                'name' => 'Admin',
                'username' => 'admin',
                'password' => bcrypt('password'), // Attributes to set if creating
            ]
        );
    }
}
