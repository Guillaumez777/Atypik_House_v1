<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    protected $fillable = ['title','idUser', 'idCategory', 'description', 'price' ,'photo', 'create_at', 'updated_at'];

    public function user() {
        return $this->belongsTo('App\User');
    }
    
    public function comments() {
        return $this->hasMany('App\Comment');
    }

    public function reservations() {
        return $this->belongsTo('App\Reservation');
    }
    
    // Prend 4 entrée de la base de donnée de manière aléatoire
    public function scopeMightAlsoLike($query) {
        return $query->inRandomOrder()->take(4);
    }
}
