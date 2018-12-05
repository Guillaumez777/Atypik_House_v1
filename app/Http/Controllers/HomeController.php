<?php

/**
 * A propos
 * Mentions Légales
 * Politique de confidentialité
 * Conditions générales d'utilisation
 * 
 */

namespace App\Http\Controllers;

use App\House;
use App\User;
use App\Category;
use App\Valuecatpropriete;
use App\Propriete;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $houses = house::with('valuecatproprietes', 'proprietes', 'category')
                                            //->join('categories', 'categories.id', '=', 'valuecatproprietes.category_id')
                                            //->join('proprietes', 'proprietes.id', '=', 'valuecatproprietes.propriete_id')
                                            //->where('houses.id', '=', 'valuecatproprietes.house_id')
                                            //->where('proprietes.id', '=', 'valuecatproprietes.propriete_id')
                                            //->where('categories.id', '=', 'valuecatproprietes.category_id')
                                            ->get();
                                            //var_dump($houses);
        // $user = User::find(1);
        // $friends_votes = $user->friends()
        //     ->with('user') // bring along details of the friend
        //     ->join('votes', 'votes.user_id', '=', 'friends.friend_id')
        //     ->get(['votes.*']);

        //$houses = valuecatpropriete::with('house', 'propriete', 'category')->get();
        // $houses = DB::table('houses')
        //     ->leftJoin('categories', 'categories.id', '=', 'houses.category_id')
        //     ->leftJoin('proprietes', 'proprietes.id', '=', 'proprietes.category_id')
        //     ->leftJoin('valuecatproprietes', 'valuecatproprietes.house_id', '=', 'houses.id')
        //     ->get();
        //var_dump($houses);
        //$valuecatProprietesHouse = house::all()->valuecatpropriete;
        //var_dump($houses);
        $categories = category::all();
        // $valuecatProprietesHouse = house::whereHas('valuecatPropriete')->get();
        return view('home')->with('houses', $houses)
                           ->with('categories', $categories);
    }
    public function search(Request $request)
    {
        //$query = Request::input('search');
        //$house = DB::table('houses')->where('ville', 'LIKE', '%' . $query . '%');
        
        //$house = house::all();
        //return view('page.search', compact('house', 'query'));
    }
    public function Apropos() {
        return view('Apropos');
    }
    public function mentions_legales() {
        return view('mentions_legales');
    }
    public function politique_de_confidentialite() {
        return view('politique_de_confidentialite');
    }
    public function cgu() {
        return view('cgu');
    }
    public function rgpd() {
        return view('rgpd');
    }
}
