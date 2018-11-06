<?php

namespace App\Http\Controllers;

use App\User;
use App\House;
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

    public function houses(Request $request)
    {
        $user = $request->user();

        $houses = House::where('user_id', $user->id)->get();

        return view('user.houses', compact('houses'));
    }
    
        

    public function editHouse(Request $request)
    {
        $user = $request->user();
        $houses = house::where('user_id', $user->id)->get();
        return view('user.edit', compact('houses'));
    }

    public function updateHouse(Request $request, House $house, $id)
    {
        var_dump("coco");
        $house = house::find($id);
        var_dump($house->photo);
        //var_dump($house->photo);
        $house->title = $request->title;
        //$house->idCategory = $request->get('idCategory');
        $house->price = $request->price;
        $house->description = $request->description;
        /*$this->validate($request, [
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);*/
        if($request->photo == NULL){
            $request->photo = $house->photo;
            var_dump("non");
            $house->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
           
        } else {
            $picture = $request->file('photo');
            $filename  = time() . '.' . $picture->getClientOriginalExtension();
            $path = public_path('img/houses/' . $filename);
            Image::make($picture->getRealPath())->resize(350, 200)->save($path);
            $house->photo = $filename;
            var_dump("oui");
            $house->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
        }
    }
    
}
