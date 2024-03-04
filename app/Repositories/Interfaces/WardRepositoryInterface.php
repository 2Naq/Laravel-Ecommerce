<?php

namespace App\Repositories\Interfaces;

interface WardRepositoryInterface
{
    public function all(); 
    public function findWardByDistrictCode(int $district_id); 
}
