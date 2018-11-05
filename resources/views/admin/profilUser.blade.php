@extends('layouts.admin')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Profil de </div>
                <div class="panel-body">                                       
                    <div class="form-group">
                        <label for="name" class="col-md-4 control-label">Nom:</label>
                        <div class="col-md-6">
                            Trinidad
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name" class="col-md-4 control-label">Prénom</label>
                        <div class="col-md-6">
                            Gilbert
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name" class="col-md-4 control-label">Email</label>
                        <div class="col-md-6">
                            gilbert.trinidad1@gmail.com
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6 col-md-offset-4">
                            <a href="{{ url()->previous() }}" class="btn btn-primary">Retour</a>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>