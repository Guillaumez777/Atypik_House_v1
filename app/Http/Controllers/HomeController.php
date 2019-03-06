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
        $houses = house::with('valuecatproprietes', 'proprietes', 'category')->get();
        $categories = category::all();

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
        $categories = category::all();
        return view('Apropos')->with('categories', $categories);
    }
    public function mentions_legales() {
        $categories = category::all();
        return view('mentions_legales')->with('categories', $categories);
    }
    public function politique_de_confidentialite() {
        $categories = category::all();
        return view('politique_de_confidentialite')->with('categories', $categories);
    }
    public function cgu() {
        $categories = category::all();
        return view('cgu')->with('categories', $categories);
    }
    public function rgpd() {
        $categories = category::all();
        return view('rgpd')->with('categories', $categories);
    }
    public function faq() {
        $categories = category::all();
        return view('faq')->with('categories', $categories);
    }
}
