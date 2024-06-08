<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Banner extends Model
{
    use SoftDeletes, LogsActivity, Searchable;

    protected $fillable = [
        'title',
        'cta_button_text',
        'cta_button_url',
        'description',
        'image_url',
    ];

    protected $appends = [
        'signed_image_url',
        'cta_button_url_formatted'
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll()->logOnlyDirty();
    }

    public function searchableColumns(): array
    {
        return [
            'title' => 'LIKE'
        ];
    }

    public function getSignedImageUrlAttribute()
    {
        return asset("storage/$this->image_url");
    }

    public function getCtaButtonUrlFormattedAttribute()
    {
        return 'https://' . $this->cta_button_url;
    }
}
