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
use App\Http\Requests\EditHouseRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Image;
use Carbon\Carbon;
use Jenssegers\Date\Date;

class UsersController extends Controller
{

	/**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');

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
        $houses = house::with('valuecatproprietes', 'proprietes', 'category', 'user')->where('user_id', '=', Auth::user()->id)->get();
        
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
        if (Auth::check()) {
            $reservation = reservation::all();
            $house = house::find($id);
            $locataire = comment::where('user_id', Auth::user()->id)->get();
            $client_reserved = reservation::where('house_id', $id)->where('user_id', Auth::user()->id)->get();
            
            return view('user.show')->with('reservation', $reservation)
                                    ->with('house', $house)
                                    ->with('locataire', $locataire)
                                    ->with('client_reserved', $client_reserved);
        } else {
            $reservation = reservation::all();
            $house = house::find($id);
            
            return view('user.show')->with('reservation', $reservation)
                                    ->with('house', $house);
        }
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

    public function updateHouse(EditHouseRequest $request, $id)
    {
        $house = house::with('valuecatproprietes', 'proprietes', 'category')->where('id','=', $id)->first();
        $valueproprietes = valuecatpropriete::where('house_id','=', $id)->get();
        $house->title = $request->title;
        $house->category_id = intval($request->category_id);
        $house->ville = $request->ville;
        $house->adresse = $request->adresse;
        $house->price = $request->price;
        $house->description = $request->description;

        $j = 0;
        foreach($request->propriete as $propriete){
            $query = valuecatpropriete::where('propriete_id', '=', $request->propriete_id[$j])->where('house_id','=', $id)->get();
            if($query->count() == 0){
                $valuecatProprietesHouse = new valuecatPropriete;
                $valuecatProprietesHouse->value = $propriete;
                $valuecatProprietesHouse->category_id = $request->category_id;
                $valuecatProprietesHouse->house_id = $house->id;
                $valuecatProprietesHouse->propriete_id = $request->propriete_id[$j];
                $valuecatProprietesHouse->save();
                $j++;
            
            } else {
                $j++;
            }
        }
        $i = 0;
        foreach ($valueproprietes as $value) {
            DB::table('valuecatproprietes')
                ->leftJoin('houses', 'valuecatproprietes.house_id', '=', 'houses.id')
                ->where('house_id','=', $id)
                ->where('valuecatproprietes.id','=', $value->id)
                ->update([
                    'value' => $request->propriete[$i]
            ]);
            $i++;
        }
        $house->save();
    
        if($request->photo == NULL){
            $request->photo = $house->first()->photo;
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

    public function reservations(Request $request)
    {
        $today = Date::now();
        $reservations = reservation::where('start_date', '>=', $today)->where('user_id', '=', Auth::user()->id)->get();
        return view('user.reservations', compact('reservations'));
    }
    
    public function showreservations($id)
    {
        $users = User::where('id', $id)->get();
        $houses = House::where('user_id', $id)->get();
        $reservation = reservation::find($id);
        return view('user.showreservations')->with('houses', $houses)
                                              ->with('users', $users)
                                              ->with('reservation', $reservation);
    }

    public function historiques(Request $request)
    {
        $currentDate = date('Y-m-d');
        $historiques = Reservation::with('house')->where([
                                                    ['user_id', '=', Auth::user()->id],
                                                    ['start_date', '<', $currentDate],
                                                    ['end_date', '<=', $currentDate]
                                                ])
                                                ->get();
                                        
        return view('user.historiques', compact('historiques'));
    }

    //Vue de détails des historiques
    public function showhistoriques($id)
    {
        $users = User::where('id', $id)->get();
        $houses = House::where('user_id', $id)->get();
        $historique = reservation::find($id);
        return view('user.showhistoriques')->with('houses', $houses)
                                              ->with('users', $users)
                                              ->with('historique', $historique);
    }

    public function showhebergements($id)
    {
        $house = House::find($id);
        return view('user.showhebergements')->with('house', $house);
                                              
    }

}
