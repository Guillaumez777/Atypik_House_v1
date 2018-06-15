@extends('layouts.app')
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
                                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-9 col-sm-offset-1">
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
        <p>Demeurer tranquille pendant votre voyage dans nos habitats insolite. Nos cabanes et yourte sauront combler vos désirs les plus variés</p>
    </div>
    <div id="depaysement" class="block_home_2_child">
        <i class="fab fa-angellist fa-5x"></i>
        <h3>Dépaysement</h3>
        <p>Sortez de la routine quotidienne et venez vivre des expérience unique dans un décor à couper le souffle</p>
    </div>
    <div id="money" class="block_home_2_child">
        <i class="far fa-money-bill-alt fa-5x"></i>
        <h3>Argent</h3>
        <p>Qui a dit que vous deviez vous ruiner pour votre week-end en amoureux. Nous possédons des prix attractifs avec des réductions toute l'année</p>
    </div>
</div>
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
      @foreach($houses as $house)
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card h-100">
                <a href="{{action('HousesController@show', $house['id'])}}"><img class="img-responsive" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                <div class="card-body">
                    <h3 class="title card-title">
                        <a href="{{action('HousesController@show', $house['id'])}}">{{$house->title}}</a>   
                    </h3>
                    <p>Type de bien : Logement</p>
                    <p><i class="fas fa-bed"></i> : 2 lits - <i class="fas fa-users"></i> : pour 2 Personnes</p>
                    <h3 class="price">{{$house->price}}€ - la nuit</h3>
                    <p class="card-text"><?php echo(substr($house->description, 0, 150));?></p>
                    <p> {{$house->ville->ville_nom}}</p>
                </div>
                <div class="note card-footer">
                    <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                    <a class="btn btn-success btn_reserve" href="{{action('HousesController@show', $house['id'])}}">Réserver</a>
                </div>
            </div>
        </div>   
        @endforeach
    </div>
</div>
@endsection
