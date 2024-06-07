<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        $keys = $this->keys();
        foreach($keys as $key) {
            Setting::create([
                'key' => $key,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }

    private function keys()
    {
        return [
            'Company Name',
            'Company Logo',
            'Phone Number',
            'Email',
            'Instagram',
            'Twitter',
            'Youtube',
            'Tik-Tok'
        ];
    }
}
