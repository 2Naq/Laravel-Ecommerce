<?php
namespace App\Repositories;

use App\Repositories\Interfaces\BaseRepositoryInterface;
use illuminate\Database\Eloquent\Model;

class BaseRepository implements BaseRepositoryInterface
{
    protected $model;
    public function __construct(
        Model $model
    ){
        $this->model = $model;
    }
    public function all() {
        return $this->model->all();
    }

    public function findByID(
        int $modelID,
        array $column = ['*'],
        array $relation = [],
    ) {
        return $this->model->select($column)->with($relation)->findOrFail($modelID);
    }
}
