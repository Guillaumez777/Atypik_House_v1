<?php
namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
	/**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        
    }
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
   
    public function index() {

        return house::all();
    }

    public function show($id) {
      /*********************************/  
     /**$userData = DB::table('users')
     ->where('id', $id)
     ->get();*/
     /*********************************/
        return user::find($id);
    }

    public function mylocations($id) {
     $userData = DB::table('users')
     ->select('users.*', 'houses.*')
     ->leftJoin('houses', 'houses.idUser','users.id')
     ->where('users.id', '=', $id)
     ->get();
        return view('users.mylocations', compact('userData'))->with('data', Auth::user()->user);
    }
}