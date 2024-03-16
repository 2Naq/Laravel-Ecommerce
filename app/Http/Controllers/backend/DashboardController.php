<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        
    }

    public function index() {
        $config = $this->configs();
        $config['seo'] = config('apps.user');
        $template = 'backend.dashboard.home.index';
        $title = $config['seo']['dashboard'];
        return view('backend.dashboard.layout', compact(
            'template', 'config', 'title'
        ));
    }

    public function configs() {
        return [
            'js' => [
            "https://buttons.github.io/buttons.js",
            "./assets/js/plugins/chartjs.min.js",
            "./assets/js/plugins/perfect-scrollbar.min.js",
            ]
        ];
    }

}


    


