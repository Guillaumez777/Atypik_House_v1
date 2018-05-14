<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\CanResetPassword;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nom', 'prenom', 'email', 'password','email_token', 'verified',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function verified()
    {
        $this->verified = 1;
        $this->email_token = null;
        $this->save();
    }

<<<<<<< HEAD
    public function houses() {
        return $this->hasMany('App\House');
    }
    public function comments() {
        return $this->hasMany('App\Comment');
=======
    public function isAdmin()
    {
        return $this->admin; // this looks for an admin column in your users table
>>>>>>> admin
    }
    
}
