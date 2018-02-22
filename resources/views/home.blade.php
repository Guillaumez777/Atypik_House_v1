@extends('layouts.app')

@section('content')
<div class="container-fluid banner">
    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="title-intro">Trouvez les meilleurs locations insolites en Europe!</h1>
                    <div class="col-lg-6 col-lg-offset-3">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Saisir une ville">
                            <span class="input-group-btn">
                                <button class="btn btn-default btn-searchbar" type="button">Rechercher</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
      @foreach($houses as $house)
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="{{action('HousesController@show', $house['id'])}}">{{$house->title}}</a>
                    </h4>
                    <h5>{{$house->price}}€</h5>
                    <p class="card-text">{{$house->description}}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
        </div>   
        @endforeach
    </div>
</div>
<div class="newsletter-block">
    <div class="row">
        <div class="col-lg-12">
            <h3>Abonnez-vous à notre newsletter afin d'être au courant des dernières nouveautés</h3>
            <div class="col-lg-6 col-lg-offset-3">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Saisir une ville">
                    <span class="input-group-btn">
                        <button class="btn btn-default btn-searchbar" type="button">Rechercher</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
