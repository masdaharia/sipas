<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Symptom extends Model
{
    use HasFactory;
    protected $guarded = [''];

    public function rule()
    {
        return $this->hasMany(Rule::class, 'gejala_id', 'id');
    }
}
