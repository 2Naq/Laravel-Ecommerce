<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\UserServiceInterface as UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(
        protected UserService $userService,
    ){
        $this->userService = $userService;
    }

    public function index(Request $request) {
        $users = $this->userService->paginate();
        $config = [
            'js' => [
                './assets/js/plugins/perfect-scrollbar.min.js',
                './assets/js/datatable.js',
                './assets/js/soft-ui-dashboard-pro-tailwind.min.js',
            ],
            'css' => ['./assets/css/databases.css'],
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
        $config['seo'] = config('apps.user');
        $title = $config['seo']['create'];
        $template = 'backend.dashboard.user.create2';
        return view('backend.dashboard.layout', compact(
            'template', 'config', 'title',
        ));
    }
}
