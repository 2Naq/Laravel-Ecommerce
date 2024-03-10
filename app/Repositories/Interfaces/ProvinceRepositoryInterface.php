<?php

namespace App\Repositories\Interfaces;

interface ProvinceRepositoryInterface
{
    public function all(); 
    public function findById(
        int $modelID,
        array $column = ['*'],
        array $relation = [],
    ); 
}
