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
            Setting::firstOrCreate([
                'key' => $key,
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
            'Tik-Tok',
            'Address',
            'Address 2',
            'Address 3',
            'Address 4',
            'Google Map',
        ];
    }
}
