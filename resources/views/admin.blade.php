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
<div id="utilisateur">
    <h2>Utilisateurs : </h2>
    @foreach($users as $user)
    <div class="table-responsive">
        <table class="table">
            <tbody>
                <tr>
                    <td><a href="{{action('AdminController@profilUser', $user['id'])}}">{{$user->nom}} {{$user->prenom}}</a></td>
                    <td>{{$user->email}}</td>
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
<div id="proprietes">
    <h2>Proprietes : </h2>
    <div class="container">
        <form class="form-horizontal" method="POST" action="{{ url('admin/proprietes/store') }}">
        {{ csrf_field() }}
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <select id="name" type="text" name="category_id" id="select_category" class="form-control">
                        <option id="" value="defaut" selected="selected" required autofocus>Choisissez votre categorie</option>
                        @foreach($categories as $category)
                            <option value="<?php echo($category->id);?>"><?php echo($category->categorie);?></option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="block-properties">
                <div class="create_properties row">
                    <div class="col-md-4 col-md-offset-4">   
                        <input type="text" name="propriete[]" placeholder="Ajouter une propriété"  class="form-control"/>
                        <select id="name" type="text" name="typeProprietes" id="select_typeProprietes" class="form-control">
                            <option id="" value="defaut" selected="selected" required autofocus>Choisissez votre type de propriété</option>
                            <option value="checkbox">checkbox</option>
                            <option value="checkbox">input</option>
                        </select> 
                    </div>
                    <a href="javascript:void(0);" class="btn btn-primary add_button" title="Ajouter une propriété"  style="border-radius:30px;"><!--<button class="btn btn-primary add_propriete" style="border-radius:30px;">-->+</a>
                </div>
                <div class="row">
                    <div class="text-center" style="margin-top: 5%;">
                        <input type="submit" class="btn btn-success" value="Sauvegarder"/>
                    </div>
                </div>
            </div>
        </form>
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        <th>Catégorie : </th>
                        <th>Propriété : </th>
                        <th>Type de propriété : </th>
                        <th>Actions : </th>
                    </tr>
                </thead>
            </table>
        @foreach($proprietes as $propriete)
        <div class="table-responsive">
            <table class="table">
                <tbody>
                    <tr>
                        <td>{{$propriete->category->categorie}}</td>
                        <td>{{$propriete->propriete}}</td>
                        <td>{{$propriete->typeProprietes}}</td>
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
@endsection
