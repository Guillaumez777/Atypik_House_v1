@extends('layouts.admin')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Modifier</div>
                @foreach($houses as $house)
                <div class="panel-body">
                    @if ($success = Session::get('success'))
                        <div class="alert alert-info">
                            {{ $success }}
                        </div>
                    @endif
                    <form class="form-horizontal" method="POST" action="{{ route('admin.updateHouse', $house->id) }}" enctype="multipart/form-data">                      
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Titre</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="title" required autofocus value="{{$house->title}}">
                            </div>
                        </div>
                        <!--<div class="form-group">
                            <label for="name" class="col-md-4 control-label">Categorie</label>
                            <div class="col-md-6">
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
                                <select id="name" type="text" name="ville" class="form-control">
                                    <option id="" value="defaut" selected="selected" required autofocus>Choisissez votre ville</option>
                                    @foreach($villes as $ville)
                                        <option value="<?php echo($ville->id);?>"><?php echo($ville->ville_nom);?></option>
                                    @endforeach
                                </select>
                            </div>-->

                        <!-- <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Categorie</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="idCategory" required autofocus value="{{$house->idCategory}}">
                            </div>
                        </div> -->

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Prix</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="price" autofocus value="{{$house->price}}">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Photo</label>
                            
                            <div class="col-md-6">
                                <img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-md-4"></label>
                            <div class="col-md-6">
                            <input id="name" type="file" class="form-control" name="photo" autofocus value="{{$house->photo}}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="description" class="col-md-4 control-label">Description</label>

                            <div class="col-md-6">
                                <textarea class="form-control" name="description" rows="5">{{$house->description}}</textarea>
                            </div>
                        </div>
                        <!--<div class="col-md-6">
                            <input id="name" type="hidden" class="form-control" name="idUser" autofocus value="{{ Auth::user()->id }}">
                        </div>-->

@endforeach
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
