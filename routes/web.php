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

// Admin

// Route::get('protected', ['middleware' => ['auth', 'admin'], function() {
//     Route::get('/admin', 'Admin\AdminController@home');
// }]);

// Accueil
Route::get('/', function () {
    return view('home');
});

Auth::routes();

 Route::prefix('admin')->group(function () {
    Route::get('/admin', 'AdminController@index')->name('admin.dashboard');
    // Route::get('/logina', 'Auth\AdminLoginController@showLoginForm');
//     Route::post('/login', 'Auth\AdminController@login')->name('admin.login.submit');
});
Route::get('/logina', 'Auth\AdminLoginController@showLoginForm');
    Route::post('/logina', 'Auth\AdminLoginController@login');
    Route::get('/logout','Auth\AdminLoginController@logout');
    //admin password reset routes
    Route::post('/password/email','Auth\AdminForgotPasswordController@sendResetLinkEmail');
    Route::get('/password/reset','Auth\AdminForgotPasswordController@showLinkRequestForm');
    Route::post('/password/reset','Auth\AdminResetPasswordController@reset');
    Route::get('/password/reset/{token}','Auth\AdminResetPasswordController@showResetForm');
Route::group(['middleware' => 'auth'], function () {
    Route::get('/profile/{id}', 'UsersController@index');
    Route::get('/mylocations/{id}', 'HousesController@mylocations');
    Route::get('/houses/edit/{id}', 'HousesController@edit');

    Route::post('/comments', 'CommentsController@index');/*->middleware('auth');*/
    //Route::get('/houses/update/{id}', 'HousesController@update');
});
    /*Route::get('/unfriend/{id}', function($id){
         $loggedUser = Auth::user()->id;
          DB::table('friendships')
          ->where('requester', $loggedUser)
          ->where('user_requested', $id)
          ->delete();
          DB::table('friendships')
          ->where('user_requested', $loggedUser)
          ->where('requester', $id)
          ->delete();
           return back()->with('msg', 'You are not friend with this person');
    });*/

// Formulaire
 Route::get('/posts', 'PostsController@index');
// Route::post('/contact', 'FormController@store'); 
Route::resource('posts', 'PostsController' , ['only' => ['index', 'store']]); 


Route::get('/houses/index', 'HousesController@index');
Route::resource('houses', 'HousesController', ['only' => ['index','show', 'create', 'store', 'edit', 'update', 'destroy', 'mylocations']]);
Route::get('/register', 'RegistersController@create');
Route::post('/register', 'RegistersController@store');
Route::post('/login', 'SessionsController@login');
Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix' => 'adminapi'], function(){
    Route::resource('house_type', 'HouseTypeController');
});