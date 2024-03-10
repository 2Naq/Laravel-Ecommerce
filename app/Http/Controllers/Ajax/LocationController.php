<?php

namespace App\Http\Controllers\Ajax;

use Illuminate\Http\RedirectResponse;
use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\ProvinceRepositoryInterface as ProvinceRepository;
use App\Repositories\Interfaces\DistrictRepositoryInterface as DistrictRepository;
use App\Repositories\Interfaces\WardRepositoryInterface as WardRepository;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    protected $ProvinceRepository;
    protected $DistrictRepository;
    protected $WardRepository;
    public function __construct(
        ProvinceRepository  $ProvinceRepository,
        DistrictRepository  $DistrictRepository,
        WardRepository  $WardRepository,
    ){
        $this->ProvinceRepository = $ProvinceRepository;
        $this->DistrictRepository = $DistrictRepository;
    }
    public function getLocation(Request $request){
        $get = $request->input();
        $data = [];
        if($get['target'] == 'districts'){
            $province = $this->ProvinceRepository->findById($get['data']['location_id'], ['code', 'name'], ['districts']);
            $data = array_map(function($district) {
                return [
                    'value' => $district['code'],
                    'label' => $district['full_name'],
                ];
            }, $province->districts->toArray());
        }else{
            $district = $this->DistrictRepository->findById($get['data']['location_id'], ['code', 'name'], ['wards'] );
            $data = array_map(function($ward){
                return[
                    'value' => $ward['code'],
                    'label' => $ward['full_name'],
                ];
            },$district->wards->toArray());
        }
        return response()->json($data);
    }
    
}
