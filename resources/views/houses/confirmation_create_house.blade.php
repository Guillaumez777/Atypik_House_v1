@extends('layouts.app')
@section('title', 'Comfirmation création')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Confirmation de la création de votre annonce</div>
                
                <div class="panel-body">
                    <p>Votre annonce a bien été prise en compte!</p>   
                    <p>Notre équipe va étudier votre annonce et revenir vers vous.</p>
                    <p>En attendant vous pouvez voir nos différents hebergements en cliquant sur le bouton ci-dessous</p>
                    <p>Notre équipe vous remercie!</p>
                    <div class="text-center">
                    <a href= "{{ url('/houses') }}" class="btn btn-success btn_reserve">Nos hébergements</a>   
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/create_house.js') }}"></script>