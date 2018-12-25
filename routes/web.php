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

/*Route::get('protected', ['middleware' => ['auth', 'admin'], function() {
   Route::get('/admin', 'Admin\AdminController@home');
}]);*/

// Accueil
/*Route::get('/', function () {
    return view('home');
});*/

Route::get('/', 'HomeController@index')->name('home');
Route::get('/houses', 'HousesController@index')->name('houses');
Route::get('/register', 'RegistersController@create');
Route::post('/register', 'RegistersController@register');
Route::get('/users/confirmation{email_token}', 'Auth\RegisterController@confirmation');
Route::post('/login', 'SessionsController@login');
Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');

Route::get('/user/showHouse/{id}', 'UsersController@showHouse')->name('user.showHouse');

Route::get('/apropos', 'HomeController@Apropos')->name('Apropos');
Route::get('/mentions_legales', 'HomeController@mentions_legales')->name('mentions_legales');
Route::get('/politique_de_confidentialite', 'HomeController@politique_de_confidentialite')->name('politique_de_confidentialite');
Route::get('/cgu', 'HomeController@cgu')->name('cgu');
Route::get('/rgpd', 'HomeController@rgpd')->name('rgpd');


// admin route for our multi-auth system
Route::get('/search', 'QueryController@index');

//Gestion de l'admin
Route::prefix('admin')->group(function () {
    Route::get('/home', 'HomeController@index')->name('admin.home');
    //Liste des utilisateurs 
    Route::get('/', 'AdminController@listusers')->name('admin.listusers');

    //Connexion et déconnexion
    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
    Route::get('/logout','Auth\AdminLoginController@logout')->name('admin.logout');

    //Profil de l'utilisateur
    Route::get('/profile/{id}', 'AdminController@profilUser')->name('admin.user');

    //Gestion des hébergement
    Route::get('/house/editHouse/{id}', 'AdminController@editHouse')->name('admin.editHouse');
    Route::post('/house/updateHouse/{id}', 'AdminController@updateHouse')->name('admin.updateHouse');
    Route::delete('/houses/deleteHouse/{id}', 'AdminController@deleteHouse')->name('admin.deleteHouse');
    
    //Liste des catégories
    Route::get('/categories', 'AdminController@listcategories')->name('admin.categories');
    Route::get('/create/categorie', 'AdminController@createcategory')->name('admin.create_category');
    Route::post('/register/categorie', 'AdminController@registercategory')->name('admin.register_category');
    Route::get('/delete/categorie/{id}', 'AdminController@deletecategory')->name('admin.delete_category');

    //Propriétés de la catégorie
    Route::get('/proprietes/{id}', 'AdminController@proprietescategory')->name('admin.proprietes_category');
    Route::get('/create/propriete/{id}', 'AdminController@createpropriete')->name('admin.create_propriete');
    Route::post('/register/propriete', 'AdminController@registerpropriete')->name('admin.register_propriete');
    Route::get('/delete/propriete/{id}', 'AdminController@deletepropriete')->name('admin.delete_propriete');

    //admin password reset routes
    Route::post('/password/email','Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
    Route::get('/password/reset','Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('/password/reset','Auth\AdminResetPasswordController@reset'); 
    Route::get('/password/reset/{token}','Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');

    //Admin proprietes
    Route::post('/proprietes/store','AdminController@createproprietes');
    
    //Route::get('/proprietes/index', 'ProprietesController@index')->name('propriete.index');
 });

Route::group(['middleware' => 'auth'], function () {
    Route::get('/profile/{id}', 'UsersController@index');
    Route::get('/mylocations/{id}', 'HousesController@mylocations');

    //Create a house, publish an offer
    Route::get('/house/create_step1', 'HousesController@create_step1')->name('house.create_step1');
    Route::post('/house/postcreate_step1', 'HousesController@postcreate_step1')->name('house.postcreate_step1');
    Route::get('/house/create_step2', 'HousesController@create_step2')->name('house.create_step2');
    Route::post('/house/postcreate_step2', 'HousesController@postcreate_step2')->name('house.postcreate_step2');
    Route::get('/house/create_step3', 'HousesController@create_step3')->name('house.create_step3');
    Route::post('/house/postcreate_step3', 'HousesController@postcreate_step3')->name('house.postcreate_step3');
    Route::get('/house/create_step4', 'HousesController@create_step4')->name('house.create_step4');
    Route::post('/house/postcreate_step4', 'HousesController@postcreate_step4')->name('house.postcreate_step4');
    Route::get('/house/confirmation_create_house', 'HousesController@confirmation_create_house')->name('house.confirmation_create_house');
    
    
    //User houses
    Route::get('/user/houses', 'UsersController@houses')->name('user.houses');
    Route::get('/user/showHouse/{id}', 'UsersController@showHouse')->name('user.showHouse');
    Route::get('/user/editHouse/{id}', 'UsersController@editHouse')->name('user.editHouse');
    Route::post('/users/updateHouse/{id}', 'UsersController@updateHouse')->name('user.updateHouse');
    Route::post('/houses/store/{id}', 'HousesController@store');
    //Route::resource('houses', 'HousesController', ['only' => ['index','show', 'create', 'store', 'edit', 'update', 'destroy', 'mylocations']]);
    //Route::resource('users', 'UserController', ['only' => ['index','mylocations', 'edit', 'update']]);
    Route::get('/json_propriete/{id}', 'HousesController@json_propriete')->name('json.proprietes');
    Route::post('/reservations', 'ReservationsController@store');
    Route::post('/comments', 'CommentsController@index');
    Route::post('note', 'HousesController@note');
    //Route::get('/houses/update/{id}', 'HousesController@update');
    Route::get('/list-users', 'UsersController@list');

    //User reservations
    Route::get('/user/reservations', 'UsersController@reservations')->name('user.reservations');
    Route::get('/user/historiques', 'UsersController@historiques')->name('user.historiques');


});

Route::post('/create',    'UserController@create');
Route::get('/user/{id}',  'UserController@get');


// Formulaire
 //Route::get('/posts', 'PostsController@index');
// Route::post('/contact', 'FormController@store'); 
Route::resource('posts', 'PostsController' , ['only' => ['index', 'store']]); 
Route::get('/users/confirmation{email_token}', 'Auth\RegisterController@confirmation');
Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');
Auth::routes();

Route::get('addmoney/stripe', array('as' => 'addmoney.paywithstripe','uses' => 'AddMoneyController@payWithStripe'));
Route::post('addmoney/stripe', array('as' => 'addmoney.stripe','uses' => 'AddMoneyController@postPaymentWithStripe'));

