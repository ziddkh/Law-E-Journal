<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Setting extends Model
{
    use SoftDeletes, LogsActivity, Searchable;

    protected $fillable = [
        'key',
        'value'
    ];

    protected $appends = [
        'signed_image_url',
    ];

    public function getSignedImageUrlAttribute(): string | null
    {
        if ($this->key !== 'Company Logo') {
            return null;
        }
        return !empty($this->value) ? asset("storage/$this->value") : null;
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll()->logOnlyDirty();
    }

    public function searchableColumns(): array
    {
        return [
            'key' => 'LIKE',
            'value' => 'LIKE'
        ];
    }
}
