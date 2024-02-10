<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name',50);
            $table->string('password');
            $table->string('phone_number',10)->nullable()->uniqid();
            $table->string('email')->nullable()->unique(); // cho phép giá trị null nhưng vẵn đảm bảo là unique(only value), nếu unique đặt trước sẽ dễ gây ra lỗi
            $table->string('province_id',10)->nullable();// mã tỉnh/thành phố
            $table->string('district_id',10)->nullable();// mã quận/huyện
            $table->string('ward_id',10)->nullable(); // mã xã/phường
            $table->string('address')->nullable();
            $table->date('birthday')->nullable();
            $table->string('avatar')->nullable();
            $table->text('description')->nullable();
            $table->text('user_agent')->nullable();
            $table->text('IP',20)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
