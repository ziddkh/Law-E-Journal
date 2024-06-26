<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Service extends Model
{
    use SoftDeletes, LogsActivity, Searchable;

    protected $fillable = [
        'name',
        'description',
        'image_url',
    ];

    protected $appends = [
        'signed_image_url',
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll()->logOnlyDirty();
    }

    public function searchableColumns(): array
    {
        return [
            'name' => 'LIKE'
        ];
    }

    public function getSignedImageUrlAttribute()
    {
        return !empty($this->image_url) ? asset("storage/$this->image_url") : asset("img/dummy-image.jpg");
    }
}
