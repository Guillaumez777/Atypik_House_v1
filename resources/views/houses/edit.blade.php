@extends('layouts.app')
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
                    <div class="panel-body">
                        <form class="form-horizontal" method="POST" action="{{action('HousesController@update', $house->id)}}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <input name="_method" type="hidden" value="PATCH">
                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label">Titre</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="title" required autofocus value="{{$house->title}}">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label">Categorie</label>
                                <div class="col-md-6">
                                    <select id="select_category" type="text" name="category_id" class="form-control">
                                        <option id="" value="{{$house->category->id}}" selected="selected" required autofocus>{{$house->category->category}}</option>
                                        @foreach($categories as $category)
                                            <option value="<?php echo($category->id);?>"><?php echo($category->category);?></option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label">Ville</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="ville" required autofocus value="{{$house->ville}}">
                                </div>
                            </div>   

                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label">Prix</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="price" required autofocus value="{{$house->price}}">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label">Photo</label>

                                <div class="col-md-6">
                                    <input id="name" type="file" class="form-control" name="photo" required autofocus value="{{$house->photo}}">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="description" class="col-md-4 control-label">Description</label>

                                <div class="col-md-6">
                                    <textarea class="form-control" name="description" required rows="5">{{$house->description}}</textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input id="name" type="hidden" class="form-control" name="idUser" required autofocus value="{{ Auth::user()->id }}">
                            </div>
                    @endforeach

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Modifier
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
