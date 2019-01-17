@extends('layouts.admin')
@section('content')
<div class="admin-user-profil">
    <div class="container list-category">
    <a href="{{ url()->previous() }}" class="btn btn-primary">Retour</a>
        <div class="panel panel-default">
            <div class="panel-heading">Détails de l'annonce</div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 mb-4">
                            <div class="card h-100">
                                <img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                                <div class="card-body">
                                    <h4 class="title card-title text-center">
                                        {{$house->title}}
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
                        
                    @foreach ($house->comments as $comment)
                        <div class="panel panel-default" style="margin: 0; border-radius: 0;">
                            <div class="panel-body">
                                <div class="col-sm-9">
                                    {{ $comment->comment }}
                                </div>
                                <div class="col-sm-3 text-right">
                                    <small>Posté par {{ $comment->user->prenom }}</small><br/>
                                    <small>Note: {{$comment->note}}/5</small>
                                </div>
                            </div>
                        </div>
                    @endforeach 
                        
                    
                </div>
            </div>
        </div>
    </div>   
</div> 
@section('script')
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/jquery-ui.min.js') }}"></script>
@endsection