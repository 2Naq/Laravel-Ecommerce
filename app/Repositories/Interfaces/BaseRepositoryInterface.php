<?php

namespace App\Repositories\Interfaces;

interface BaseRepositoryInterface
{
    public function all();
    
    public function findByID(
        int $modelID,
        array $column = ['*'],
        array $relation = [],
    );
}
