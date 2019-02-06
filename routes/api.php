<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('auth/register', 'AuthenticateController@register');
Route::post('auth/login', 'AuthenticateController@login');
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('user', 'AuthenticateController@getAuthUser');
    Route::get('/mylocations/{id}', 'HousesController@mylocations');
});

use App\User;
Route::get('/users', function () {
	$users = user::all()->toJson();
 	return response($users,200)->header('Content-Type', 'application/json');
});
use App\House;
Route::get('/houses', function () {
	$houses = house::all()->toJson();
 	return response($houses,200)->header('Content-Type', 'application/json');
});
