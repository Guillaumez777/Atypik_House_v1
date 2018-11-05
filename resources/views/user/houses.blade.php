@extends('layouts.app')
@section('link')
<link href="{{ asset('css/jquery-ui.min.css') }}" rel="stylesheet">
@section('content')
<div class="container list-category">
    <h2>Nos hébergements</h2>
    @foreach ($houses as $house)
    <div class="row">
        <div class="col-lg-4 col-md-4 mb-4 thumbnail">
            <div class="card h-100">
                <a href="{{action('HousesController@show', $house['id'])}}"><img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                <div class="card-body">
                    <h4 class="title card-title">
                        <a href="#">{{$house->title}}</a>
                    </h4>
                    <p>Type de bien : Logement</p>
                    <p><i class="fas fa-bed"></i> : 2 lits - <i class="fas fa-users"></i> : pour 2 Personnes</p>
                    <h3 class="price">{{$house->price}}€</h3>
                    <p class="card-text"><?php echo(substr($house->description, 0, 40));?></p>
                    @if($house->statut == "En attente de validation")
                        <p>Statut: <span style="color:red;"><?php echo($house->statut);?></span></p>
                    @else
                        <p>Statut: <span style="color:green;"><?php echo($house->statut);?></span></p>
                    @endif
                </div>
            </div> 
        </div>
    </div>
    @endforeach   
</div>
@section('script')
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/jquery-ui.min.js') }}"></script>
<script src="{{ asset('js/calendar.js') }}"></script>
@endsection