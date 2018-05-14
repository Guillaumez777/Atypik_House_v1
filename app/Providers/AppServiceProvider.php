<?php

namespace App\Providers;

use App\House;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
            /*view()->composer(['houses.index'], function ($view) {

            // Display houses in every views

            $view->with('houses', $houses);*/
            $houses = house::all();
            view()->share('houses', $houses);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
