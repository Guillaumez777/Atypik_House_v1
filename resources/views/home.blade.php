@extends('layouts.app')

@section('title', 'Accueil')

@section('meta_description', 'Venez découvrir nos locations atypique, nous possèdons un vaste choix de loccation tels que des cabanes, des yourtes, des maisons sur piloti et bien dautres choses encore')

@section('content')
<div class="container-fluid banner">
    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <form class="form-horizontal" method="get" action="{{url('search')}}" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h1 class="title title-intro">Trouvez les meilleurs locations atypique, <br />partout en Europe !</h1>
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
        </div>
    </div>
</div>


                            <!--
                            {!! Form::open(['method'=>'GET','url'=>'QueryController@search','class'=>'form','role'=>'search'])  !!}
                            {!! Form::text('search', null,
                                                array('required',
                                                        'class'=>'form-control ',
                                                        'placeholder'=>'Saisir une ville ...')) !!}
                            {!! Form::submit('Rechercher',
                                                        array('class'=>'btn btn-searchbar')) !!}
                            {!! Form::close() !!}-->
<div id="block_home_2">
    <div id="tranquilite" class="block_home_2_child">
        <i class="fas fa-procedures fa-5x"></i>
        <h3>Tranquilité</h3>
        <p>Rester au calme pendant votre séjour dans nos habitats insolite. Nos cabanes et yourtes sauront combler vos désirs les plus variés</p>
    </div>
    <div id="depaysement" class="block_home_2_child">
        <i class="fab fa-angellist fa-5x"></i>
        <h3>Dépaysement</h3>
        <p>Sortez de la routine quotidienne et venez vivre des expérience unique dans des décors à couper le souffle</p>
    </div>
    <div id="money" class="block_home_2_child">
        <i class="far fa-money-bill-alt fa-5x"></i>
        <h3>Economie</h3>
        <p>Profitez de promotions toute l'année sur de nombreuses locations atypique tels que les cabanes, les cocons pour amoureux et bien d'autres. </p>
    </div>
</div>
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
    @foreach($houses as $house)
        @if($house->statut == "Validé")
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <a href="{{action('UsersController@showHouse', $house['id'])}}"><img class="img-responsive" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                    <div class="card-body">
                        <h3 class="title card-title">
                            <a href="{{action('UsersController@showHouse', $house->id)}}">{{$house->title}}</a>   
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
                        <p>Annulation gratuite !</p>
                        <p class="card-text"><?php echo(substr($house->description, 0, 150));?></p>
                        <p> {{$house->ville}}</p>
                    </div>
                    <div class="note card-footer">
                        <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                        <a class="btn btn-success btn_reserve" href="{{action('UsersController@showHouse', $house['id'])}}">Réserver</a>
                    </div>
                </div>
            </div>
        @endif  
    @endforeach
    </div>
</div>
@endsection
