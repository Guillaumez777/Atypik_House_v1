@extends('layouts.app')
@section('content')
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
        <div class="col-lg-12">
            <div class="input-group">
                <span class="input-group-btn">
                    <form class="form-horizontal" method="get" action="{{url('search')}}" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12" style="margin-bottom: 30px;">
                                <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-3 col-sm-9 col-sm-offset-1">
                                    <div class="form-group button2">
                                        @include('search',['url'=>'search','link'=>'search'])
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </span>
            </div>
        </div>
    </div>
    <div class="row">
        @foreach($houses as $house)
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <a href="{{action('UsersController@showHouse', $house['id'])}}"><img class="img-responsive" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                    <div class="card-body">
                        <h3 class="title card-title">
                            <a href="{{action('UsersController@showHouse', $house['id'])}}">{{$house->title}}</a>
                        </h3>
                        <p>Type de bien : {{$house->category->category}}</p>
                        @foreach($house->proprietes as $proprietes)
                            <p>{{$proprietes->propriete}}: 
                                @foreach($proprietes->valuecatproprietes as $valuepropriete) 
                                    {{$valuepropriete->value}}
                                @endforeach
                            </p>     
                        @endforeach
                        <p class="price">{{$house->price}}€ par nuit</p>
                        <p class="card-text"><?php echo(substr($house->description, 0, 40));?></p>
                        <p>{{$house->ville}}</p>
                    </div>
                    <div class="note card-footer">
                        <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                        <a class="btn btn-success btn_reserve" href="{{action('UsersController@showHouse', $house['id'])}}">Réserver</a>
                    </div>
                </div>
            </div>   
            @endforeach
        </div>
    </div>   
</div>