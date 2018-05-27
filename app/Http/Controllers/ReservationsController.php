<?php

namespace App\Http\Controllers;

use App\House;
use App\Reservation;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use Session;

class ReservationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, House $house)
    {
        $this->validate($request, [ 
            'start_date' => 'required|max:100', 
            'end_date' => 'required|max:100', 
        ]);
        
        $id = $request->id;
        $name = $request->name;
        $slug = $request->slug;
        $details = $request->details;
        $house_id = $request->house_id;
        $price = house::find('price');
        $start_date = date("Y-m-d", strtotime($request->start_date));
        $end_date = date("Y-m-d", strtotime($request->end_date));

        $reservation = new Reservation;
        $reservation->id = $id;
        // $reservation->name = house::get($id);
        $reservation->name = 'Titre en duree';
        $reservation->slug = 'blalbaa';
        $reservation->details = $details;
        $reservation->description = 'Description en dured';
        $reservation->user_id = Auth::user()->id;
        $reservation->house_id = $house_id;
        $reservation->payment_id = 0;
        $reservation->price = '255';
        $reservation->reserved = true;
        $reservation->start_date = $start_date;
        $reservation->end_date = $end_date;
        
        $reservation->save();
        $request->session()->flash('status', 'Votre réservation a bien été prise en compte !');
        return view('reservations.recapitulatif_reservation')->with('reservation', $reservation);
        //return redirect('reservations/index')->with('reservation', $reservation);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
