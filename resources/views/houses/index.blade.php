@extends('layouts.app')
{{-- @section('footer', 'footer_absolute') --}}
@section('content')
<div class="container list-category">
        <h2 id="hebergements">Nos hébergements</h2>
        <div class="row">
        @foreach($houses as $house)
            @if($house->statut == "Validé")
                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        
                    <div class="card h-100">
                            
                        <a href="{{action('UsersController@showHouse', $house['id'])}}"><img class="img-responsive" src="{{ asset('img/houses/'.$house->photo) }}"></a>
    
                        <div class="card-body">
                            <h3 class="card-title"><a href="{{action('UsersController@showHouse', $house->id)}}">{{$house->title}} - </a></h3>
                            <h3 class="card-title"> {{$house->ville}} </h3>
                        </div>
                        
                        <p class="price"> {{$house->price}}€ / nuit</p>
                        
                        {{-- <div class="note card-footer">
                            <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                            <a class="btn btn-success btn_reserve" href="{{action('UsersController@showHouse', $house['id'])}}">Consulter</a>
                        </div> --}}
                    </div>
                </div>
            @endif  
        @endforeach
        </div>
    </div> 
</div>