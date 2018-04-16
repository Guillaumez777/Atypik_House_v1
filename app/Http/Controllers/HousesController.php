<?php

namespace App\Http\Controllers;

use App\House;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use Session;
use Image;

class HousesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $houses = house::all();
        return view('houses.show')->withHouse($house);//, compact('house', 'id')
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('houses.create');
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
        $house->idUser = $request->idUser;
        $house->idCategory = $request->idCategory;
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
        return redirect('houses/index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function show(House $house)
    {
        //$houses->posts()->where('idUser', Auth::user()->idUser)->get();
        /*return view('houses.index')->with('houses', $houses);*/
        $house = house::find($house->id);
        return view('houses.show', compact('house', 'id'));
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
     ->leftJoin('houses', 'houses.idUser','users.id')
     ->where('users.id', '=', $id)
     ->where('houses.id', '!=', NULL)
     ->get();
        return view('houses.mylocations', compact('houseProfil'))->with('data', Auth::user()->user);
    }
}
