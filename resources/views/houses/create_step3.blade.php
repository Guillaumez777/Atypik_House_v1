@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Créer un hébergement</div>
                {!! Breadcrumbs::render('/house/create') !!}
                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{url('houses')}}" enctype="multipart/form-data">
                        {{ csrf_field() }}

                        <p>Quel est le montant de votre bien ?</p>
                            <div id="propriete_category">
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label">Prix</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="price" required autofocus>
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