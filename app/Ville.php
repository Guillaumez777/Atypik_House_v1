<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ville extends Model
{
    protected $fillable = ['ville_nom'];

    // public function user() {
    //     return $this->belongsTo('App\User');
    // }
    
    public function houses() {
        return $this->hasMany('App\House');
    }
}
