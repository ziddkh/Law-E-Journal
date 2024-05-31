<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class Post extends Model
{
    use SoftDeletes, LogsActivity;

    protected $fillable = [
        'title',
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

    public function tags()
    {
        return $this->hasMany(PostTag::class);
    }

    public function getActivitylogOptions(): array
    {
        return ['*'];
    }
}
