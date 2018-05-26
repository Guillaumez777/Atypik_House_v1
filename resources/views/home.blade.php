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
                                    <div class="col-lg-12">
                                        <h1 class="title title-intro">Trouvez les meilleurs locations insolites en Europe !</h1>
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
                    <h3 class="price">{{$house->price}}€</h3>
                    <p class="card-text"><?php echo(substr($house->description, 0, 50));?></p>
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
