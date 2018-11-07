<?php

namespace App\Http\Controllers;

use App\User;
use App\House;
use App\Category;
use App\Ville;
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
    
        

    public function editHouse($id)
    {
        //$user = $request->user();
        $categories = category::all();
        $villes = ville::all();
        //$houses = house::where('user_id', $user->id)->get();
        $houses = house::where('id','=', $id)->get();
        return view('user.edit')->with('houses', $houses)->with('categories', $categories)->with('villes', $villes);
    }

    public function updateHouse(Request $request,Category $category, Ville $ville, House $house, $id)
    {
        $house = house::find($id);
        $house->title = $request->title;
        $house->category_id = $request->category_id;
        $house->ville = $request->ville;
        $house->price = $request->price;
        $house->description = $request->description;
        /*$this->validate($request, [
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);*/
        if($request->photo == NULL){
            $request->photo = $house->photo;
            $house->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
           
        } else {
            $picture = $request->file('photo');
            $filename  = time() . '.' . $picture->getClientOriginalExtension();
            $path = public_path('img/houses/' . $filename);
            Image::make($picture->getRealPath())->resize(350, 200)->save($path);
            $house->photo = $filename;
            $house->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
        }
    }
    
}
