<?php

namespace Database\Seeders;

use App\Models\CompanyInformation;
use Illuminate\Database\Seeder;

class CompanyInformationSeeder extends Seeder
{
    public function run(): void
    {
        CompanyInformation::create([
            'title' => 'Sekilas Tentang Kami',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}