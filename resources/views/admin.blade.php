{{-- @extends('layouts.app')
 
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Admin Dashboard</div>
 
                    <div class="panel-body">
                        You logged in as an admin!
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection --}}

@extends('layouts.admin')
@section('content')
<div id="hebergement">
    <h2>Hebergements : </h2>
    <div class="row">
        <table class="table">
            <thead>
                <tr>
                    <th>Titre : </th>
                    <th>Prix : </th>
                    <th>Actions : </th>
                </tr>
            </thead>
        </table>
    @foreach($houses as $house)
    <div class="table-responsive">
        <table class="table">
            <tbody>
                <tr>
                    <td><a href="{{action('HousesController@show', $house['id'])}}">{{$house->title}}</a></td>
                    <td>{{$house->price}}€</td>
                    <td>
                        <a href="#" class="btn btn-warning">Modifier</a>
                        <a href="#" class="btn btn-danger">Supprimer</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    @endforeach
    </div>
</div>
<div id="reservation">
    <h2>Reservations : </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae nulla nemo, ipsa, officiis recusandae praesentium nihil, minus cumque nostrum enim aliquam nam libero earum mollitia eaque. Voluptas, cum esse!</p>
</div>
<div id="utilisateur">
    <h2>Utilisateurs : </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae nulla nemo, ipsa, officiis recusandae praesentium nihil, minus cumque nostrum enim aliquam nam libero earum mollitia eaque. Voluptas, cum esse!</p>
</div>
<div id="avis">
    <h2>Avis : </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae nulla nemo, ipsa, officiis recusandae praesentium nihil, minus cumque nostrum enim aliquam nam libero earum mollitia eaque. Voluptas, cum esse!</p>
</div>
@endsection
