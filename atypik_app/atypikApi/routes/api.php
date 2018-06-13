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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});





Route::group(['middleware' => 'auth'], function () {
	// get list of tasks
	Route::get('comment','CommentsController@index');
	// get specific task
	Route::get('house/{id}','HousesController@show');
	Route::get('comment/{id}','CommentsController@show');
	Route::get('user/{id}','UserController@show');
	// delete a task
	Route::delete('task/{id}','TaskController@destroy');
	// update existing task
	Route::put('user','UserController@store');
	// create new task
	Route::post('user','UserController@store');
	Route::post('comment','CommentsController@store');
	Route::post('post','PostController@store');

});

Route::get('/register', 'RegistersController@create');

Route::post('/register', 'RegistersController@store');

Route::post('/login', 'SessionsController@login');

Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');

Auth::routes();
