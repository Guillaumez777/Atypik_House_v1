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

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/apropos', 'HomeController@Apropos')->name('Apropos');
Route::get('/mentions_legales', 'HomeController@mentions_legales')->name('mentions_legales');
Route::get('/politique_de_confidentialite', 'HomeController@politique_de_confidentialite')->name('politique_de_confidentialite');
Route::get('/cgv', 'HomeController@cgv')->name('cgv');


// admin route for our multi-auth system
Route::resource('search', 'QueryController', ['only' => ['index','show', 'create', 'store', 'search']]);
Route::prefix('admin')->group(function () {
    Route::get('/home', 'HomeController@index')->name('admin.home');
    Route::get('/profile/{id}', 'AdminController@profilUser')->name('admin.user');
    
    Route::get('/', 'AdminController@index')->name('admin.dashboard');
    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
    Route::get('/logout','Auth\AdminLoginController@logout')->name('admin.logout');

    //admin password reset routes
    Route::post('/password/email','Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
    Route::get('/password/reset','Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('/password/reset','Auth\AdminResetPasswordController@reset'); 
    Route::get('/password/reset/{token}','Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');

    //Admin proprietes
    // Route::post('/proprietes/store', [
    //     'uses' => 'AdminController@createproprietes',
    //     'as' => 'create'
    // ]);
    Route::post('/proprietes/store','AdminController@createproprietes');
    Route::get('/proprietes/index', 'ProprietesController@index')->name('propriete.index');
 });

Route::group(['middleware' => 'auth'], function () {
    Route::get('/profile/{id}', 'UsersController@index');
    Route::get('/mylocations/{id}', 'HousesController@mylocations');
    Route::get('/houses/edit/{id}', 'HousesController@edit');
    Route::get('/profile/edit/{id}', 'UsersController@edit');
    Route::post('/users/update/{id}', 'UsersController@update');
    Route::post('/houses/store/{id}', 'HousesController@store');
    Route::get('/houses/index', 'HousesController@index');
    Route::resource('houses', 'HousesController', ['only' => ['index','show', 'create', 'store', 'edit', 'update', 'destroy', 'mylocations']]);
    Route::resource('users', 'UserController', ['only' => ['index','mylocations', 'edit', 'update']]);
    Route::get('/json_propriete', 'HousesController@json_propriete');
    Route::post('/reservations', 'ReservationsController@store');
    Route::post('/comments', 'CommentsController@index');/*->middleware('auth');*/
    //Route::get('/houses/update/{id}', 'HousesController@update');
    Route::get('/list-users', 'UsersController@list');


});

Route::post('/create',    'UserController@create');
Route::get('/user/{id}',  'UserController@get');


// Formulaire
 //Route::get('/posts', 'PostsController@index');
// Route::post('/contact', 'FormController@store'); 
Route::resource('posts', 'PostsController' , ['only' => ['index', 'store']]); 
Route::get('/users/confirmation{email_token}', 'Auth\RegisterController@confirmation');
Route::get('/houses/index', 'HousesController@index');
Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');
Auth::routes();

Route::get('addmoney/stripe', array('as' => 'addmoney.paywithstripe','uses' => 'AddMoneyController@payWithStripe'));
Route::post('addmoney/stripe', array('as' => 'addmoney.stripe','uses' => 'AddMoneyController@postPaymentWithStripe'));

