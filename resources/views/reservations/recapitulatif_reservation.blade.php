@section('content')
@section('title', 'Recapitulatif réservation')
@extends('layouts.app')
@section('link')
<link href="{{ asset('css/jquery-ui.min.css') }}" rel="stylesheet">
@section('content')
<div class="container list-category">
    <div class="panel panel-default">
        <div class="panel-heading text-center">Récapitulatif de votre réservation</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card h-100 text-center">
                            <p class="card-text">Vous avez bien réservé pour le <?php \Date::setLocale('fr'); $startdate = Date::parse($reservation->start_date)->format('l j F Y'); echo($startdate);?> au <?php \Date::setLocale('fr'); $enddate = Date::parse($reservation->end_date)->format('l j F Y'); echo($enddate);?></p>
                            <p class="card-text"> à l'adresse: {{$house->adresse}}</p>
                            <p class="card-text">Voici le récapitulatif de l'hebergement que vous avez choisi : </p>
                            <img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                            <div class="card-show">
                                <h4 class="title card-title">
                                    <a href="#">{{$house->title}}</a>
                                </h4>
                                <p>Prix / la nuit: {{$house->price}}€</p>
                                <p>Type de bien : {{$house->category->category}}</p>
                                @foreach($house->valuecatproprietes as $valuecatpropriete)                                  
                                    <p>{{$valuecatpropriete->propriete->propriete}}: {{$valuecatpropriete->value}}</p>                     
                                @endforeach
                                <p class="card-">{{$house->description}}</p>
                                <p>Annulation gratuite !</p>
                                <p> {{$house->ville}}</p>
                                <h3 class="price">{{$house->price}} € x {{$days}} jours</h3>
                                <h3 class="price">Total à payer : {{$total}} €</h3>
                                <p> Si vous voulez réserver cet hébergement veuillez continuer en cliquant sur le bouton ci-dessous</p>
                                <a class="btn btn-success btn_reserve" href="{{action('AddMoneyController@payWithStripe', 
                                    ['prix' => $house->price,
                                    'start' => $reservation->start_date,
                                    'end' => $reservation->end_date,
                                    'days' => $days,
                                    'total' => $total,
                                    'user_id' => $reservation->user_id,
                                    'house_id' => $reservation->house_id
                                    ])}}">Aller au paiement</a>

                            </div>
                            
                        <div>

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
<!-- <script src="{{ asset('js/date_french.js') }}"></script> -->
@endsection