<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HouseTypeController extends Controller
{
    public function index() {
        $house_types = HouseType::all();
        return $house_types;
    }

    public function store(Request $request) {
        $house_type = new HouseType($request->all());
        $house_type->save();

        return $house_type;
    }
}
