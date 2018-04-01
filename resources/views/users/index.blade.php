@extends('layouts.app')
@section('content')
<div class="container list-category">
    <h2>Mon profil</h2>
    <div class="row">
        <div class="col-lg-12 col-md-12 mb-4 text-center">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x200" alt=""></a>
                <div class="card-body">
                    <h4 class="title card-title">
                        <p>{{Auth::user()->prenom}}</p>
                    </h4>
                    <h5>{{Auth::user()->email}}</h5>
                    <p>Coucou</p>
                </div>
                <div class="card-footer">
                    <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                </div>
            </div>
        </div>
    </div>   
</div>