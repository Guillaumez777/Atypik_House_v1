<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReservationNight extends Model
{
    protected $fillable = ['rate', 'date', 'house_type_id'];

    function Reservation()
    {
        return $this->hasOne('App\Reservation');
    }

    function RoomType()
    {
        return $this->hasOne('App\HouseType');
    }
}