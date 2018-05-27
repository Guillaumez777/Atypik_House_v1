<?php
 
namespace App;
 
use Illuminate\Database\Eloquent\Model;
use App\House;
 
class Reservation extends Model
{
    protected $fillable = ['id', 'name', 'slug', 'details', 'description', 'user_id','house_id', 'payment_id', 'price',  'reserved','start_date', 'end_date'];
 
    public function house()
    {
        return $this->belongsTo('App\House');
    }
 
    function user(){
        return $this->belongsTo('App\User');
    }
 
}