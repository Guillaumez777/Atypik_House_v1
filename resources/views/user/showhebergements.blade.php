@extends('layouts.app')
@section('title', 'Détail de l"annonce')
@section('footer', 'footer_none')
@section('content')
<div class="admin-user-profil">
    <div class="container list-category" role="details-reservation">
        <div class="panel panel-default">
            <div class="panel-heading">Détails de l'annonce</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="card-show h-100">
                            <img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}" alt="Hébergement insolite - {{$house->title}}">
                            <div class="card-center">
                                <h4 class="title card-title text-center">
                                    <a href="#">{{$house->title}}</a>
                                </h4>
                                <h3 class="price">{{$house->price}}€ / nuit</h3>
                                <p>Type de bien : {{$house->category->category}}</p>
                                @foreach($house->valuecatproprietes as $valuecatpropriete)
                                    @if($valuecatpropriete->value == 0)
                                    @else
                                        <p>{{$valuecatpropriete->propriete->propriete}}: {{$valuecatpropriete->value}}</p> 
                                    @endif                                 
                                @endforeach
                                <p class="card-text">{{$house->description}}</p>
                                <p>Annulation gratuite !</p>
                                <p>Pays: {{$house->pays}}</p>
                                <p>Ville, département ou région: {{$house->ville}}</p>
                                <p>Adresse:  {{$house->adresse}}</p>
                                <p> Téléphone de l'annonceur : {{$house->telephone}}</p>
                                <a href="{{route('user.editHouse', $house['id']) }}" class="btn btn-primary btn-color">Modifier</a>
                            </div>
                        </div>
                    </div>
                </div>
                @foreach ($house->comments as $comment)
                    <div class="panel panel-default" style="margin: 0; border-radius: 0;">
                        <div class="panel-body">
                            <div class="col-sm-9">
                                {{ $comment->comment }}
                            </div>
                            <div class="col-sm-3 text-right">
                                @if($comment->user_id != "0")
                                        <small>Posté par {{ $comment->user->prenom }} {{ $comment->user->nom }}</small><br/>
                                    @if($comment->note != "0")
                                        <small>Note: {{$comment->note}}/5</small>
                                    @endif
                                @else
                                    <small>Posté par {{ $comment->admin->name }}</small><br/>
                                    @if($comment->note != "0")
                                        <small>Note: {{$comment->note}}/5</small> 
                                    @endif  
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach 
                @if (Auth::check())
                    @if($house->user_id == Auth::user()->id)
                    <div class="panel panel-default" style="margin: 0; border-radius: 0;">
                        <div class="panel-body">
                            <form action="{{ url('/comments') }}" method="POST" style="display: flex;">
                                {{ csrf_field() }}
                                <input type="hidden" name="house_id" value="{{ $house->id }}">
                                <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
                                <input type="hidden" name="admin_id" value="0">
                                <input type="text" name="comment" placeholder="Saisir un commentaire" class="form-control" id="input_comment" style="border-radius: 0;">
                                <div class="rating">
                                    <input type="radio" id="star5" name="note" value="5" /><label for="star5" title="Meh">5 stars</label>
                                    <input type="radio" id="star4" name="note" value="4" /><label for="star4" title="Kinda bad">4 stars</label>
                                    <input type="radio" id="star3" name="note" value="3" /><label for="star3" title="Kinda bad">3 stars</label>
                                    <input type="radio" id="star2" name="note" value="2" /><label for="star2" title="Sucks big tim">2 stars</label>
                                    <input type="radio" id="star1" name="note" value="1" /><label for="star1" title="Sucks big time">1 star</label>
                                </div>
                                <input type="submit" value="Envoyer" class="btn btn-primary" style="border-radius: 0;">
                            </form>
                            @if (count($errors) > 0)
                                <div class="alert alert-danger">
                                    <a href="#" class="close" data-dismiss="alert">&times;</a>
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            {{ $error }}
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            @if (Session::has('success'))
                                <div class="alert alert-success">
                                    <a href="#" class="close" data-dismiss="alert">&times;</a>
                                    {{ Session::get('success') }}
                                </div>
                            @endif
                        </div>
                    </div>
                    @endif
                @endif
            </div>
        </div>
    </div>
</div>
@section('script')
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/jquery-ui.min.js') }}"></script>
<script src="{{ asset('js/calendar.js') }}"></script>
@endsection