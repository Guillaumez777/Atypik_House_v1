@extends('layouts.admin')
@section('content')
<div class="admin-user-profil">
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="col-md-2"></div>
            <div class="col-offset-md-2 col-md-10">
                <div class="panel panel-default">
                @foreach ($users as $user)
                    <div class="panel-heading">Profil de {{$user->nom}} {{$user->prenom}}</div>
                    <div class="panel-body">       
                        <div class="row">                                      
                            <div class="form-group">
                                <label for="name" class="col-md-2 control-label">Nom : </label>
                                <div class="col-md-2">
                                    {{$user->nom}}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="name" class="col-md-2 control-label">Prénom : </label>
                                <div class="col-md-2">
                                    {{$user->prenom}}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="name" class="col-md-2 control-label">Email : </label>
                                <div class="col-md-2">
                                    {{$user->email}}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <a href="" class="btn btn-success button-profiluser">Ses réservations</a>
                            </div>
                            <div class="col-md-4">
                                <a href="" class="btn btn-success button-profiluser">Ses annonces</a>
                            </div>
                            <div class="col-md-4">
                                <a href="{{route('admin.listcomments', $user['id']) }}" class="btn btn-success button-profiluser">Ses commentaires</a>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>

            <div class="col-offset-md-2 col-md-10 right">
                <div class="panel panel-default">
                    <div class="panel-heading text-center">Annonces de {{$user->nom}} {{$user->prenom}}</div>
                    @foreach ($houses as $house)           
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 mb-4 thumbnail">
                                    <div class="card h-100">
                                        <img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}">
                                        <div>
                                            <<h4 class="title card-title">
                                                <a href="{{route('user.showHouse', $house['id']) }}">{{$house->title}}</a>
                                            </h4>
                                            <p class="price">{{$house->price}}€ par nuit</p>
                                            <div class="card-infos">
                                                <p>Type de bien : {{$house->category->category}}</p>
                                                @foreach($house->valuecatproprietes as $valuecatpropriete)
                                                @if($loop->iteration > 0)
                                                    @if($valuecatpropriete->value == 0)
                                                    @else
                                                        <p>{{$valuecatpropriete->propriete->propriete}}: {{$valuecatpropriete->value}}</p> 
                                                    @endif
                                                @break   
                                                @endif      
                                            @endforeach      
                                                <p><?php echo(substr($house->description, 0, 40));?></p>   
                                                <p>Annulation gratuite !</p>
                                                <p> {{$house->ville}}</p>
                                                <p> {{$house->adresse}}</p>
                                            @if($house->statut == "En attente de validation")
                                                <p>Statut: <span style="color:red;"><?php echo($house->statut);?></span></p>
                                            @else
                                                <p>Statut: <span style="color:green;"><?php echo($house->statut);?></span></p>
                                            @endif
                                            <div class="row">
                                                <div class="form-group">
                                                    <div class="col-md-12 text-center">
                                                        <a href="{{route('admin.editHouse', $house['id']) }}" class="btn btn-primary">Modifier</a>
                                                    </div>                      
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>