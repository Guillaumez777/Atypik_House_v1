@extends('layouts.app')

<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Créer un hébergement</div>
                {!! Breadcrumbs::render('page1') !!}
                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{route('house.postcreate_step1')}}" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        
                        <p>1. Où se situe votre bien?</p>
                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Ville</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="ville" required autofocus>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input id="name" type="hidden" class="form-control" name="user_id" required autofocus value="{{ Auth::user()->id }}">
                        </div>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Continuer
                                </button>
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
<!--<script src="{{ asset('js/proprietes.js') }}"></script>-->

