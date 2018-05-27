@extends('layouts.app')
@section('link')
<link href="{{ asset('css/jquery-ui.min.css') }}" rel="stylesheet">
@section('content')
<div class="container">
<div class="row">
    <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
            <h2 class="panel-heading">Récapitulatif de votre réservation</h2>
            <p class="card-text">Date de début : {{$reservation->start_date}}</p>
            <p class="card-text">Date de fin : {{$reservation->end_date}}</p>
            <p>{{$reservation->house->title}}</p>
            <a href="#" class="btn btn-ls btn-success">Comfirmer ma réservation</a>
        </div>    
        </div>
    </div>
</div>
@section('script')
    <script src="{{ asset('js/jquery.js') }}"></script>
    <script src="{{ asset('js/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('js/calendar.js') }}"></script>
@endsection