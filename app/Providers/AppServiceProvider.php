<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    protected $service = [
        'APP\Services\Interfaces\UserServiceInterface' => 'APP\Services\UserService',
        'App\Repositories\Interfaces\UserRepositoryInterface' => 'APP\Repositories\UserRepository',
    ];
    /**
     * Register any application services.
     */
    public function register(): void
    {
        foreach ($this->service as $key => $value) {
            $this->app->bind($key, $value);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
