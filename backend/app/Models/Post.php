<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Post extends Model
{
    use SoftDeletes, LogsActivity;

    protected $fillable = [
        'title',
        'type',
        'slug',
        'content',
        'start_date',
        'end_date',
        'status',
    ];

    protected $dates = [
        'start_date',
        'end_date',
        'deleted_at',
    ];

    protected $appends = [
        'start_date_formatted',
        'end_date_formatted'
    ];

    public function tags()
    {
        return $this->hasMany(PostTag::class);
    }

    public function getStartDateFormattedAttribute()
    {
        return Carbon::parse($this->start_date)->format('d/m/Y'); 
    }

    public function getEndDateFormattedAttribute()
    {
        return Carbon::parse($this->endDate)->format('d/m/Y'); 
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll()->logOnlyDirty();
    }
}
