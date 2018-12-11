<?php

namespace App\Http\Controllers;

use App\User;
use App\House;
use App\Comment;
use App\Reservation;
use App\Category;
use App\Propriete;
use App\Valuecatpropriete;
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
    
    /**
     * Display the specified resource.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function showHouse($id)
    {
        $reservation = reservation::all();
        $house = house::find($id);
        $locataire = comment::where('user_id', Auth::user()->id)->get();
        $client_reserved = reservation::where('house_id', $id)->where('user_id', Auth::user()->id)->get();
        
        return view('user.show')->with('reservation', $reservation)
                                ->with('house', $house)
                                ->with('locataire', $locataire)
                                ->with('client_reserved', $client_reserved);
    }
        

    public function editHouse($id)
    {
        $categories = category::all();
        $proprietes = propriete::all();
        $houses = house::with('valuecatproprietes', 'proprietes', 'category')->where('id','=', $id)->get();
        return view('user.edit')->with('houses', $houses)
                                ->with('categories', $categories)
                                ->with('proprietes', $proprietes);
    }

    public function updateHouse(Request $request,Category $category, Ville $ville, House $house, $id)
    {
        //$house = house::find($id);
        
        $house = house::with('valuecatproprietes', 'proprietes', 'category')->where('id','=', $id)->first();
        $valueproprietes = valuecatpropriete::where('house_id','=', $id)->get();
        //var_dump($valueproprietes);
        $house->title = $request->title;
        $house->category_id = $request->category_id;
        $house->ville = $request->ville;
        $house->price = $request->price;
        $house->description = $request->description;
        
        $i = 0;
        foreach ($valueproprietes as $update) {
        
            DB::table('valuecatproprietes')
                ->leftJoin('houses', 'valuecatproprietes.house_id', '=', 'houses.id')
                ->where('house_id','=', $id)
                ->where('valuecatproprietes.id','=', $update->id)
                ->update([
                    'value' => $request->propriete[$i]
            ]);
            $i++;
        }
         
        
        $house->save();
        return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
        
        /*$this->validate($request, [
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);*/
        
        if($request->photo == NULL){
            //$request->photo = $house->first()->photo;
            $house->save();
            $valuenewpropriete->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
           
        } else {
            $picture = $request->file('photo');
            $filename  = time() . '.' . $picture->getClientOriginalExtension();
            $path = public_path('img/houses/' . $filename);
            Image::make($picture->getRealPath())->resize(350, 200)->save($path);
            $house->photo = $filename;
            $house->save();
            $valuenewpropriete->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
        }
    }
    
}
