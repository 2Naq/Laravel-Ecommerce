<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */

    public function rules(): array
    {
        return [
            'email' => 'required|string|email|unique:users',
            'fullname' => 'required|string',
            'user-catelogue_id' => 'required|integer|gt:0', //gt:0 (greater) lớn hơn 0
            'password' => 'required|string',
            're-password' => 'required|string|same:password',
        ];
    }
    
    public function messages(): array
    {
        return [
            'email.required' => 'Vui lòng nhập email',
            'email.email' => 'Email không hợp lệ',
            'password.required' => 'Vui lòng nhập password',
        ];
    }
}
