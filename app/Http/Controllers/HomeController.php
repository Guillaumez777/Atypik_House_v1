<?php

namespace App\Http\Controllers;

use App\House;
use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $houses = house::all();
        $users = user::all();
        return view('home')->with('houses', $houses);
    }
    public function search(Request $request)
    {
        //$query = Request::input('search');
        $house = house::all();
        //$house = DB::table('houses')->where('ville', 'LIKE', '%' . $query . '%');
        return view('page.search', compact('house', 'query'));
    }
}
