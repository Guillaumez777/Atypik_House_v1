@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Créer un hébergement</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{url('houses')}}" enctype="multipart/form-data">
                        {{ csrf_field() }}

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Titre</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="title" required autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Categorie</label>

                            <div class="col-md-6">
                                <!--<input id="name" type="text" class="form-control" name="idCategory" required autofocus>-->
                                <select id="select_category" type="text" name="category_id" class="form-control">
                                    <option id="" value="defaut" selected="selected" required autofocus>Choisissez votre categorie</option>
                                    @foreach($categories as $category)
                                        <option value="<?php echo($category->id);?>"><?php echo($category->categorie);?></option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Ville</label>
                            <div class="col-md-6">
                                <select id="name" type="text" name="ville_id" class="form-control">
                                    <option id="" value="defaut" selected="selected" required autofocus>Choisissez votre ville</option>
                                    @foreach($villes as $ville)
                                        <option value="<?php echo($ville->id);?>"><?php echo($ville->ville_nom);?></option>
                                    @endforeach
                                </select>
                            </div>
                        </div>   
                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Prix</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="price" required autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Photo</label>

                            <div class="col-md-6">
                                <input id="name" type="file" class="form-control" name="photo" required autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">Description</label>

                            <div class="col-md-6">
                                <textarea class="form-control" name="description" required rows="5" placeholder="Ne pas saisir plus de 500 caractères"></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input id="name" type="hidden" class="form-control" name="user_id" required autofocus value="{{ Auth::user()->id }}">
                        </div>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/proprietes.js') }}"></script>
@endsection

