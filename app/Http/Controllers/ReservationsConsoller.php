<?php

class ReservationSController extends Controller {
    public function reservation()
    {
        $reservations = reservations::all();
        return view('reservations.index')->with('reservations', $reservations);
    }
}

?>  