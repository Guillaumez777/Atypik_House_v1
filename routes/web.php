<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});


/*Route::get('/subscribe', function () {
    return view('subscribe');
});*/

//Gestion du CRUD hebergements
Route::resource('houses', 'HousesController', ['only' => ['index','show', 'create', 'store', 'update', 'destroy']]);

//Gestion de l'authentification de l'utilisateur
Route::get('/register', 'RegistersController@create');
Route::post('/register', 'RegistersController@store');
Route::post('/login', 'SessionsController@login');
Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');
Auth::routes();

//Page d'accueil
Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();
