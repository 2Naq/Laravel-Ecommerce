<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\UserServiceInterface as UserService;
use App\Repositories\Interfaces\ProvinceRepositoryInterface as ProvinceRepository;
use Illuminate\Http\Request;
use App\Http\Requests\StoreUserRequest;


class UserController extends Controller
{
    public function __construct(
        protected UserService $userService,
        protected ProvinceRepository $provincerepository
    ){
        $this->userService = $userService;
        $this->provincerepository = $provincerepository;
    }

    public function index(Request $request) {
        $users = $this->userService->paginate();
        $config = [
            'js' => [
                './assets/js/datatable.js',
                './assets/js/plugins/perfect-scrollbar.min.js',
                './assets/js/soft-ui-dashboard-tailwind.js',
            ],
            'css' => ['./assets/css/datatable.css'],
        ];
        $config['seo'] = config('apps.user');
        $title = $config['seo']['index'];
        $template = 'backend.dashboard.user.index';
        return view('backend.dashboard.layout', compact(
            'template',
            'config',
            'users',
            'title'
        ));
    }
    public function create() {
        $config = [
            'css' => [
                './assets/css/choices.css',
            ],
            'js' => [
                    './assets/js/soft-ui-dashboard-tailwind.js',
                    "./assets/js/plugins/perfect-scrollbar.min.js",
                    './assets/js/plugins/choices.min.js',
                    './assets/js/plugins/jquery-3.1.1.min.js',
                    './assets/js/choices.js',
                    './assets/js/location.js',
            ],
            
        ];
        $config['seo'] = config('apps.user');
        $title = $config['seo']['create'];
        $template = 'backend.dashboard.user.create2';
        $provinces =  $this->provincerepository->all();
        return view('backend.dashboard.layout', compact(
            'template', 'config', 'title','provinces',
        ));
    }
    public function store(StoreUserRequest $request) {
        echo 11111111;die();
        
    }
}

