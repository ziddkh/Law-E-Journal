<?php

namespace Database\Seeders;

use App\Models\ServiceHeader;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceHeaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ServiceHeader::firstOrCreate(
            [
               'title' => 'Layanan',
            ],
            [
                'created_at' => now(),
                'updated_at' => now()
            ]
        );
    }
}
