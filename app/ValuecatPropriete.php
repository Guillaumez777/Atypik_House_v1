<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class ValuecatPropriete extends Model
{
    //protected $table = "valuecatProprietes";
    protected $tables = [
        'valuecatProprietes' => 'array',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
    public function house() {
        return $this->belongsTo('App\House');
    }
    public function propertie() {
        return $this->belongsTo('App\Propertie');
    }
}