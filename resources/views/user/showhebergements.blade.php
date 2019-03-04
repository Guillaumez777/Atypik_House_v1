@extends('layouts.app')
@section('title', 'Détail de l"annonce')
@section('footer', 'footer_absolute')
@section('content')
<div class="admin-user-profil">
    
        <div class="container list-category">
            <div class="panel panel-default">
                <div class="panel-heading">Détails de l'annonce</div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="card-show h-100">
                                    <img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                                    <div class="card-center">
                                        <h4 class="title card-title text-center">
                                            <a href="#">{{$house->title}}</a>
                                        </h4>
                                        <h3 class="price">{{$house->price}}€</h3>
                                        <p>Type de bien : {{$house->category->category}}</p>
                                        @foreach($house->valuecatproprietes as $valuecatpropriete)
                                            @if($valuecatpropriete->value == 0)
                                            @else
                                                <p>{{$valuecatpropriete->propriete->propriete}}: {{$valuecatpropriete->value}}</p> 
                                            @endif                                 
                                        @endforeach
                                        <p class="card-text">{{$house->description}}</p>
                                        <p>Annulation gratuite !</p>
                                        <p> {{$house->ville}}</p>
                                        <p> {{$house->adresse}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</div>
@section('script')
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/jquery-ui.min.js') }}"></script>
<script src="{{ asset('js/calendar.js') }}"></script>
@endsection