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

        /*$this->middleware('log')->only('index');

        $this->middleware('subscribed')->except('store');*/
    }
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    /*public function show($id)
    {
        return view('users.profile', ['users' => User::findOrFail($id)]);
    }*/

    public function index($id) {
        $userData = DB::table('users')
        ->where('id', $id)
        ->get();
        return view('users.index', compact('userData'))->with('data', Auth::user()->user);
    }

    public function mylocations($id) {
     $userData = DB::table('users')
     ->select('users.*', 'houses.*')
     ->leftJoin('houses', 'houses.idUser','users.id')
     ->where('users.id', '=', $id)
     ->get();
        return view('users.mylocations', compact('userData'))->with('data', Auth::user()->user);
    }

    public function edit(User $user)
    {
        $user = user::find($user->id);
        return view('users.edit', with('user', $user));
    }
    
}
