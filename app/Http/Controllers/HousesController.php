<?php

namespace App\Http\Controllers;

use App\House;
use App\Ville;
use App\Category;
use App\Reservation;
use App\Propriete;
use App\ValuecatPropriete;
use App\User;
use Illuminate\Http\Request;
//use Illuminate\Http\Response;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use Session;
use Image;
use Response;

class HousesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(House $house, Ville $villes)
    {
        $houses = house::all();
        return view('houses.index')->with('houses', $houses);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \App\Category  $categories
     * @param  \App\Ville  $villes
     * @return \Illuminate\Http\Response
     */
    public function create(Category $categories, Ville $villes)
    {
        $categories = category::all();
        $villes = ville::all();
        //$proprietes = propriete::all();

        return view('houses.create', [
            'villes'=> $villes,
            'categories' => $categories,
        ]
        );
    }

    public function json_propriete(){
        
        //$proprietes->load('propriete');
        $category_id = $_GET['category_id'];
        //json_decode($data);
        $proprietes = propriete::where('category_id', $category_id)->get();
        return response()->json(["proprietes" => $proprietes,
                                 "category_id" => $category_id], 200);     
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $house = new house;
        $house->title = $request->title;
        $house->user_id = $request->user_id;
        $house->category_id = $request->category_id;
        $house->ville_id = $request->ville_id;
        $house->price = $request->price;
        $house->photo = $request->photo;
        $house->description = $request->description;

        $this->validate($request, [
        // check validtion for image or file
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);

        //$picture = $request->file('photo');
        $picture = $request->file('photo');
        $filename  = time() . '.' . $picture->getClientOriginalExtension();
        $path = public_path('img/houses/' . $filename);
        Image::make($picture->getRealPath())->resize(350, 200)->save($path);
        $house->photo = $filename;
        $house->save();
            //var_dump($request->propriete_id);
        // var_dump($request->valuePropriete);
        // if(isset($request->valuePropriete) && $request->valuePropriete != '') {
            
            //foreach($request->valuePropriete as $valueProprietesHouse) {
                //var_dump($valuecatProprietesHouse);
                
                // $value = new valuecatPropriete;
                // $value->category_id = $house->category_id;
                // $value->valuePropriete = $request->valuePropriete;
                // $value->propriete_id =  $request->propriete_id;
                // dump($value);
                // $value->save();
                
                // $data = array('category_id'=> $house->category_id,
                //         'valuePropriete'=> $valueProprietesHouse,
                //         'propriete_id' => $request->propriete_id
                // );
                // valuecatPropriete::insert($data);
                // DB::table('valuecatProprietes')->insert($data);
                    //...
                
                // DB::table('valuecatProprietes')->insert(
                //     ['category_id' => $house->category_id,
                //      'valuePropriete' => $valueProprietesHouse,
                //      'propriete_id' => $request->propriete_id,
                //      'house_id' => $house->id]
                // )->toArray();
                //return redirect('houses/index');
                // var_dump("coco");
        //    }
        // }
        return view('houses.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function show(House $house, Reservation $reservation)
    {
        //$houses->posts()->where('idUser', Auth::user()->idUser)->get();
        /*return view('houses.index')->with('houses', $houses);*/
        $house = house::find($house->id);
        return view('houses.show', compact('house', 'id'), compact('reservation', 'id'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function edit(House $house)
    {
        $house = house::find($house->id);
        
        return view('houses.edit', compact('house', 'id'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, House $house)
    {
        $house = house::find($house->id);
        $house->title = $request->get('title');
        $house->idCategory = $request->get('idCategory');
        $house->price = $request->get('price');
        $house->photo = $request->get('photo');
        $house->description = $request->get('description');
        /*$this->validate($request, [
        // check validtion for image or file
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);*/

        //$picture = $request->file('photo');
        $picture = $request->file('photo');
        $filename  = time() . '.' . $picture->getClientOriginalExtension();
        $path = public_path('img/houses/' . $filename);
        Image::make($picture->getRealPath())->resize(350, 200)->save($path);
        $house->photo = $filename;

        $house->save();
        return redirect('/houses/index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function destroy(House $house)
    {
        $house = house::find($house->id);
        $house->delete();
        return redirect('houses/index');
        
    }

    public function mylocations($id) {

     $houseProfil = DB::table('users')
     ->select('users.*', 'houses.*')
     ->leftJoin('houses', 'houses.user_id','users.id')
     ->where('users.id', '=', $id)
     ->where('houses.id', '!=', NULL)
     ->get();
        return view('houses.mylocations', compact('houseProfil'))->with('data', Auth::user()->user);
    }
}
