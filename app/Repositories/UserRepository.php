<?php
namespace App\Repositories;

use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Models\User;

class UserRepository implements UserRepositoryInterface
{
    public function getAllPaginate() {
        return User::paginate();;
    }
    public function get_hello(){
        echo 12;die();
    }
}
