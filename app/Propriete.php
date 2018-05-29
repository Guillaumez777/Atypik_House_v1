<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Propriete extends Model
{
    public function category() {
        return $this->belongsTo('App\Category');
    }

    public function admin() {
        return $this->belongsTo('App\Admin');
    }

}