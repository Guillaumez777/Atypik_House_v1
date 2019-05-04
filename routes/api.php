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

use App\House;
use App\User;
use App\Admin;
use App\Reservation;
use App\Message;
use App\Comment;
use App\Propriete;
use App\Valuecatpropriete;

Route::post('auth/register', 'AuthenticateController@register');
Route::post('auth/login', 'AuthenticateController@login');
Route::get('logout', 'AuthenticateController@logout');
Route::group(['middleware' => 'jwt.auth'], function () {
	Route::get('user', 'AuthenticateController@getAuthUser');
});
Route::group(['middleware' => 'cors'], function () {
	Route::post('/addComment', 'ApiController@addComment');
});
Route::get('/mylocations/{id}', 'ApiController@myLocations');
Route::get('/user/reservations/{id}', 'ApiController@myOrders');
Route::get('/user/comments/{id}', 'ApiController@myComments');
Route::get('/user_messages/{id}', 'ApiController@myNotifications');