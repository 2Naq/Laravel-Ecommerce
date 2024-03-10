<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ward extends Model
{
    use HasFactory;

    protected  $filable =[
        'name',
    ];

    protected $table = 'wards';
    protected $primaryKey = 'code';
    protected $incerementing = false;

    public function districts() {
        return $this->belongsTo(District::class, 'district_code', 'code');
    }

}
