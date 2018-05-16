<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    protected $fillable = ['title','idCategory','idUser','photo', 'description'];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function ville() {
        return $this->belongsTo('App\House');
    }
    
    public function comments() {
        return $this->hasMany('App\Comment');
    }
}
