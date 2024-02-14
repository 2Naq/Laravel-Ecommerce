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
        $template = 'backend.dashboard.home.index';
        return view('backend.dashboard.layout', compact(
            'template', 'config', 
        ));
    }


    public function configs() {
        return [
            'js' => [
            //<!-- Flot -->
            "access/js/plugins/flot/jquery.flot.js", 
            "access/js/plugins/flot/jquery.flot.tooltip.min.js",
            "access/js/plugins/flot/jquery.flot.spline.js",
            "access/js/plugins/flot/jquery.flot.resize.js",
            "access/js/plugins/flot/jquery.flot.pie.js",
            "access/js/plugins/flot/jquery.flot.symbol.js",
            "access/js/plugins/flot/jquery.flot.time.js",
            //<!-- Peity -->
            "access/js/plugins/peity/jquery.peity.min.js",
            "access/js/demo/peity-demo.js",
            //<!-- Custom and plugin javascript -->
            "access/js/inspinia.js",
            "access/js/plugins/pace/pace.min.js",
            //<!-- Jvectormap -->
            "access/js/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js",
            "access/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js",
            //<!-- EayPIE -->
            "access/js/plugins/easypiechart/jquery.easypiechart.js",
            //<!-- Sparkline -->
            "access/js/plugins/sparkline/jquery.sparkline.min.js",
            //<!-- Sparkline demo data  -->
            "access/js/demo/sparkline-demo.js",

            "access/js/data_chart.js"
            ],
        ];
    }

}
