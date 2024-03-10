<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    use HasFactory;

    protected  $filable =[
        'name',
    ];

    protected $table = 'provinces';
    protected $primaryKey = 'code';
    protected $incerementing = false;


    public function districts() {
        return $this->hasMany(District::class, 'province_code', 'code'); 
        // - Một tỉnh (province) sẽ có nhiều huyện (districts).
        // $this->hasMany(model | foreign key (khóa ngoại) | primary key(khóa chính) )
    }
}
