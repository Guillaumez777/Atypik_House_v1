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
    
});
use App\House;
use App\User;
use App\Admin;
use App\Reservation;
use App\Message;
Route::get('/mylocations/{id}', function ($id) {
	$houseProfil = DB::table('users')
		->select('users.*', 'houses.*')
		->leftJoin('houses', 'houses.user_id','users.id')
		->where('users.id', '=', $id)
		->where('houses.id', '!=', NULL)
		->get()->toJson();
 	return response($houseProfil,200)->header('Content-Type', 'application/json');
});

Route::get('/user/reservations/{id}', function ($id) {
	$today = Date::now()->format('Y-m-d');
	$reservationProfil = DB::table('users')
		->select('users.*', 'reservations.*')
		->leftJoin('reservations', 'reservations.user_id','users.id')
		->where('reservations.start_date', '>', $today)
		->where('reservations.end_date', '>=', $today)
		->where('users.id', '=', $id)
		->where('reservations.user_id', '=', $id)
		->get()->toJson();
 	return response($reservationProfil,200)->header('Content-Type', 'application/json');
});

Route::get('/user/historiques/{id}', function ($id) {
	$today = Date::now()->format('Y-m-d');
	$historiqueProfil = DB::table('users')
		->select('users.*', 'reservations.*')
		->leftJoin('reservations', 'reservations.user_id','users.id')
		->where('reservations.start_date', '<', $today)
		->where('reservations.end_date', '<=', $today)
		->where('users.id', '=', $id)
		->where('reservations.user_id', '=', $id)
		->get()->toJson();
 	return response($historiqueProfil,200)->header('Content-Type', 'application/json');
});

Route::get('/user/comments/{id}', function ($id) {
	$commentProfil = DB::table('users')
    	->select('users.*', 'comments.*', 'houses.*')
		->join('comments', 'comments.user_id','=', 'users.id')
		->join('houses', 'houses.user_id','=', 'users.id')
		->where('users.id', '=', $id)
		->where('comments.user_id', '=', $id)
		->get()->toJson();
 	return response($commentProfil,200)->header('Content-Type', 'application/json');
});

Route::get('/user_messages/{id}', function ($id) {
	$messageProfil = DB::table('messages')
    	->select('users.*', 'messages.*', 'admins.*')
		->join('users', 'users.id', '=', 'messages.user_id')
		->join('admins', 'admins.id', '=', 'messages.admin_id')
		->where('users.id', '=', $id)
		->where('messages.user_id', '=', $id)
		->where('admins.id', '=', "1")
		->where('messages.admin_id', '=', "1")
		->get()->toJson();
 	return response($messageProfil,200)->header('Content-Type', 'application/json');
});