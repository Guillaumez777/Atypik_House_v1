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
<div id="proprietes">
    <h2>Propriétés : </h2>
    {{-- <select id="name" type="text" name="category_id" class="form-control">
        <option id="" value="defaut" selected="selected" required autofocus>Choisissez votre categorie</option>
        @foreach($categories as $category)
            <option value="<?php echo($category->id);?>"><?php echo($category->categorie);?></option>
        @endforeach
    </select> --}}
</div>
@endsection
