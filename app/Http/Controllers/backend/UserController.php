<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(
        protected UserService $userService,
    ){
        $this->userService = $userService;
    }
    public function index() {

        $users = $this->userService->paginate();
        $config = $this->config();
        $template = 'backend.dashboard.user.index';


        return view('backend.dashboard.layout', compact(
            'template',
            'config',
            'users'
        ));
    }

    public function config() {
        return [
            'js' => [
                //<!-- Peity -->
                "access/js/plugins/peity/jquery.peity.min.js",
                //<!-- Custom and plugin javascript -->
                "access/js/inspinia.js",
                "access/js/plugins/pace/pace.min.js",
                //<!-- iCheck -->
                "access/js/plugins/iCheck/icheck.min.js",
                //<!-- Peity -->
                "access/js/demo/peity-demo.js",
                //<!-- Switchery -->
                'access/js/plugins/switchery/switchery.js',
                "access/js/library.customize.js"
            ],
            'css' => [
                'access/css/plugins/switchery/switchery.css'
            ]
        ];
    }
}
