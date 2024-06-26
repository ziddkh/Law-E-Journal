<?php

namespace App\Console\Commands;

use App\Models\Profile;
use Carbon\Carbon;
use Illuminate\Console\Command;

class GenerateProfileSlug extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-profile-slug';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $profiles = Profile::get();
        foreach ($profiles as $profile) {
            $profileName = $profile->name;
            $slug = str_replace(' ', '-', strtolower($profileName));
            $slug = preg_replace('/[^a-z0-9-]/', '', $slug);
            $slug = $slug . '-' . Carbon::now()->format('YmdHis');
            $profile->update([
                'slug' => $slug
            ]);
            $this->info("Profile slug updated");
        }
    }
}
