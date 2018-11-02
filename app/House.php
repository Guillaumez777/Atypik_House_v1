<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    //protected $fillable = ['title','user_id','category_id','ville_id', 'photo', 'description'];
    protected $table = 'houses';
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function ville() {
        return $this->belongsTo('App\Ville');
    }

    public function category() {
        return $this->belongsTo('App\Category');
    }
    
    public function comments() {
        return $this->hasMany('App\Comment');
    }

    public function reservations() {
        return $this->belongsTo('App\Reservation');
    }
}
