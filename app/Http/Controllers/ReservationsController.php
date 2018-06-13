<?php

namespace App\Http\Controllers;

use App\House;
use App\Reservation;
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
        //
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
        $start_date = date("Y-m-d", strtotime($request->start_date));
        $end_date = date("Y-m-d", strtotime($request->end_date));
        $house_id = $request->house_id;
        /*var_dump($start_date);
        var_dump($end_date);
        var_dump($request->house_id);*/


        $reservation = new Reservation;
        $reservation->start_date = $start_date;
        $reservation->end_date = $end_date;
        //$reservation->user_id = Auth::user()->id;
        $reservation->house_id = $house_id;
        $reservation->payment_id = 0;
        $reservation->reserved = true;

        //return view('reservations.recapitulatif_reservation')->with('reservation', $reservation);

        return redirect('addmoney/stripe');
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
