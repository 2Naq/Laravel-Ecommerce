<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;

    protected  $filable =[
        'name',
    ];

    protected $table = 'districts';
    protected $primaryKey = 'code';
    protected $incerementing = false;
    
    public function wards() {
        return $this->hasMany(Ward::class, 'district_code', 'code'); 
    }
    
    public function provinces() {
        return $this->belongsTo(Province::class, 'province_code', 'code');
    }
}
