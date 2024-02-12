<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function __construct()
    {
        
    }
    public function index(){
        if  (Auth::id()){
            return redirect()->route('dashboard.index');
        }
        return view('backend.login');
    }

    public function login(AuthRequest $request){
        $credentials =[
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ];
        if (Auth::attempt($credentials)){
            return redirect()->route('dashboard.index')->with('success', "Đăng nhập thành công");
        }
        return redirect()->route('auth.admin')->with('error', "Email hoặc mật khẩu không chính xác");
    }
    
    public function logout(Request $request): RedirectResponse {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('auth.admin')->with('warning', "Bạn đã đăng xuất tài khoản");
    }
}
