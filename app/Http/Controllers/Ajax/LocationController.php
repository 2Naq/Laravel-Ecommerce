<?php

namespace App\Http\Controllers\Ajax;

use Illuminate\Http\RedirectResponse;
use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\DistrictRepositoryInterface as DistrictRepository;
use App\Repositories\Interfaces\WardRepositoryInterface as WardRepository;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    protected $DistrictRepository;
    protected $WardRepository;
    public function __construct(
        DistrictRepository  $DistrictRepository,
        WardRepository  $WardRepository,
    ){
        $this->DistrictRepository = $DistrictRepository;
        $this->WardRepository = $WardRepository;
    }
    public function getProvince(Request $request){
        $province_id = $request->input('province_id');
        $districts = $this->DistrictRepository->finDistrictByProvinceID($province_id);
        $response = $this->resDistrict($districts);
        // dd($response);
        // $response = $this->resDistrict($districts);
        return response()->json($response);
    }
    
    public function getDistrict(Request $request) {
        $district_id = $request->input('district_id');
        $wards = $this->WardRepository->findWardByDistrictCode($district_id);
        return response()->json($this->resWard($wards)); 
    }

    public function resDistrict($districts) {
        // $html = '<option value = "0"> --Chọn Quận/Huyện-- </option>';
        // foreach ($districts as $district){
        //     $html .= '<option value="'.$district->code.'">'.$district->full_name.'</option>';
        // }
        // return $html;
        $data = [];
        foreach ($districts as $district) {
            $data[] = [
                'value' => $district['code'],
                'label' => $district['full_name'],
            ];
        }
        return $data;
    }

    public function resWard($wards) {
        $data = [];
        foreach ($wards as $ward) {
            $data[] = [
                'value' => $ward['code'],
                'label' => $ward['full_name'],
            ];
        }
        return $data;
    }
}
