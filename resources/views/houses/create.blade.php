@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Register</div>

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
                                <select id="name" type="text" class="form-control" required autofocus>
                                    <option id="" value="defaut" selected="selected">Choisissez votre categorie</option>
                                    @foreach($categories as $category)
                                        <option name="idCategory"><?php echo($category->categorie);?></option>
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
                                <textarea class="form-control" name="description" required rows="5"></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input id="name" type="hidden" class="form-control" name="idUser" required autofocus value="{{ Auth::user()->id }}">
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
@endsection
