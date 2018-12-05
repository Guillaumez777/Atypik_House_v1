<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Valuecatpropriete extends Model
{
    protected $table = "valuecatproprietes";

    public function user() {
        return $this->belongsTo('App\User');
    }
    public function house() {
        return $this->belongsTo('App\House');
    }
    public function category() {
        return $this->belongsTo('App\Category');
    }

    public function propriete() {
        return $this->belongsTo('App\Propriete');
    }
}