@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Créer un hébergement</div>
                {!! Breadcrumbs::render('/house/create') !!}
                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{route('house.postcreate_step2')}}" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        <p>Décrivez nous votre bien</p>                     
                            <div class="form-group">
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
                                <label for="name" class="col-md-4 control-label">Titre de votre bien</label>
                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="title" required autofocus>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email" class="col-md-4 control-label">Description</label>

                                <div class="col-md-6">
                                    <textarea class="form-control" name="description" required rows="5" placeholder="Ne pas saisir plus de 500 caractères"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/create_house.js') }}"></script>