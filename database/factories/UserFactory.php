<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker $faker) {

    return [
        'nom' => word('toto'),
        'prenom' => word('titi'),
        'email' => word('toto@hotmail.fr'),
        'password' => word('password'),
        'password-confirm' => word('password')
    ];
});
