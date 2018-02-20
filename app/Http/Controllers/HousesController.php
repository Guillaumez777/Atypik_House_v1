<?php

namespace App\Http\Controllers;

use App\House;
use Illuminate\Http\Request;


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
        return view('houses.index')->with('houses', $houses);
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
}
