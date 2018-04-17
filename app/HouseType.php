<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HouseType extends Model
{
    protected $fillable = ['name', 'short_name','max_occupancy','base_price','base_availability'];
}
