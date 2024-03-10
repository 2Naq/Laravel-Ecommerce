<?php

namespace App\Repositories\Interfaces;

interface DistrictRepositoryInterface
{
    public function all(); 
    public function finDistrictByProvinceID(int $province_id);
    public function findById(
        int $modelID,
        array $column = ['*'],
        array $relation = [],
    ); 
}
