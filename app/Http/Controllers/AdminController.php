<?php
namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
    /**
     * Show the application dashboard.
     *
     * @param  \App\User  $users
     * @return \Illuminate\Http\Response
     */
    public function index(User $users)
    {
        $users = user::all();
        return view('admin')->with('users', $users);
    }

    /**
     * Show the profile for the given user.
     *
     * @return Response
     */
    public function profilUser($id) {
        $user = DB::table('users')
        ->where('id', $id)
        ->get();
        return view('admin.profilUser')->with('user', $user);
    }
}
