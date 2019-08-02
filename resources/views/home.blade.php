@extends('layouts.app')
@section('title', 'Accueil')
@section('meta_description', 'Venez découvrir nos locations atypique, nous possèdons un vaste choix de loccation tels que des cabanes, des yourtes, des maisons sur piloti et bien dautres choses encore')
@section('content')
<div class="container-fluid banner form-home">
    <div class="col-lg-12">
        <div class="row">
            <h1 class="title title-intro">Trouvez les meilleurs locations atypique, <br />partout en Europe !</h1>
        </div>
        <div class="row">
            <form class="form-horizontal" method="get" action="{{url('search')}}" enctype="multipart/form-data">
                <div class="form-home">
                    <div class="form-group button2">
                        @include('search',['url'=>'search','link'=>'search'])
                    </div>
                </div>
            </form>
        </div>    
    </div>
</div>

<div id="block_home_2">
    <div id="tranquilite" class="block_home_2_child">
        <i class="fas fa-procedures fa-5x"></i>
        <h2>Tranquilité</h2>
        <p>Rester au calme pendant votre séjour dans nos habitats insolite. Nos cabanes et yourtes sauront combler vos désirs les plus variés</p>
    </div>
    <div id="depaysement" class="block_home_2_child">
        <i class="fab fa-angellist fa-5x"></i>
        <h2>Dépaysement</h2>
        <p>Sortez de la routine quotidienne et venez vivre des expérience unique dans des décors à couper le souffle</p>
    </div>
    <div id="money" class="block_home_2_child">
        <i class="far fa-money-bill-alt fa-5x"></i>
        <h2>Economie</h2>
        <p>Profitez de promotions toute l'année sur de nombreuses locations atypique tels que les cabanes, les cocons pour amoureux et bien d'autres. </p>
    </div>
</div>
<div class="container list-category">
    <h2 id="hebergements">Nos hébergements</h2>
    <div class="row">
    @foreach($houses as $house)
        @if($house->statut == "Validé")
            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    
                <div class="card-home h-100">
                        
                    <a href="{{action('UsersController@showHouse', $house['id'])}}"><img class="img-responsive" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                    <div class="card-block">
                        <div class="card-body">
                            <h2 class="card-title"><a href="{{action('UsersController@showHouse', $house->id)}}"> <?php echo(substr($house->title, 0, 40));?>  - {{$house->ville}}  </a></h2> 
                            {{-- <h2 class="card-title">  - {{$house->ville}} </h2> --}}
                            
                        </div>
                        
                        <p class="price"> {{$house->price}}€ / nuit</p>
                    
                            {{-- <div class="note card-footer">
                                <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                                <a class="btn btn-success btn_reserve" href="{{action('UsersController@showHouse', $house['id'])}}">Consulter</a>
                            </div> --}}
                        </div>

                </div>
            </div>
        @endif  
    @endforeach
    </div>
</div>



<div class="container" id="faq">
    <h2 class="text-center">FAQ</h2>
    <h3>Mon paiement est-it sécurisée ? : </h3>
    <p>Nous disposons d’un système de crytpage SSL pour protéger vos données personnelles ainsi que les moyens de paiement utilisés. Nous utilisons le système de paiement sécurisé de Stripe</p>
    <h3> SERVICE CLIENT 24/7 : </h3>
    <p>Notre équipe est à votre disposition pour toute question sur nos articles, votre commande ou autre question d'ordre générale</p>
    <h3>Mon paiement est-it sécurisée ? : </h3>
    <p>Nous avons choisi de confier la gestion de nos paiements en ligne à Stripe & Paypal grâce à leurs services sécurisés. Vous avez la possibilité de régler votre commande via Stripe en utilisant tous types de cartes bancaires, soit via Paypal, en utilisant votre compte ou bien directement par carte bancaire sans l'obligation d'en créer un.</p>
</div>

@endsection
