@extends('layouts.app')
@section('link')
<link href="{{ asset('css/jquery-ui.min.css') }}" rel="stylesheet">
@section('content')
@extends('layouts.app')
@section('link')
<link href="{{ asset('css/jquery-ui.min.css') }}" rel="stylesheet">
@section('content')
<div class="container list-category">
    <div class="panel panel-default">
        <div class="panel-heading">Récapitulatif de votre réservation</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card h-100 text-center">
                            <p class="card-text">Vous avez bien réservé pour le <span id="start_date">{{$reservation->start_date}}</span> au <span id="end_date">{{$reservation->end_date}}</span></p>
                            <p class="card-text">Voici le récapitulatif de l'hebergement que vous avez choisi : </p>
                            <img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                            <div class="card-body">
                                <h4 class="title card-title">
                                    <a href="#">{{$house->title}}</a>
                                </h4>
                                <p>Prix: {{$house->price}}€</p>
                                <p>Type de bien : {{$house->category->category}}</p>
                                @foreach($house->valuecatproprietes as $valuecatpropriete)                                  
                                    <p>{{$valuecatpropriete->propriete->propriete}}: {{$valuecatpropriete->value}}</p>                     
                                @endforeach
                                <p class="card-text">{{$house->description}}</p>
                                <p>Annulation gratuite !</p>
                                <p> {{$house->ville}}</p>
                            </div>
                            <p> Si vous voulez réserver cet hébergement veuillez continuer en cliquant sur le bouton ci-dessous</p>
                        <div>
                        <a class="btn btn-success btn_reserve" href="{{action('UsersController@showHouse', $house['id'])}}">Aller au paiement</a>

                    </div>   
                </div>
            </div>
        </div>
    </div>
</div>
@section('script')
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/jquery-ui.min.js') }}"></script>
<script src="https://momentjs.com/downloads/moment-with-locales.js"></script>
<script src="{{ asset('js/calendar.js') }}"></script>
<script src="{{ asset('js/date_french.js') }}"></script>
@endsection