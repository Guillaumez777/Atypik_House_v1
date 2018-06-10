@extends('layouts.app')
@section('link')
<link href="{{ asset('css/jquery-ui.min.css') }}" rel="stylesheet">
@section('content')
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="card h-100">
                <a href="{{action('HousesController@show', $house['id'])}}"><img class="img-responsive img_house" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                <div class="card-body">
                    <h4 class="title card-title">
                        <a href="#">{{$house->title}}</a>
                    </h4>
                    <p>Type de bien : Logement</p>
                    <p><i class="fas fa-bed"></i> : 2 lits - <i class="fas fa-users"></i> : pour 2 Personnes</p>
                    <h3 class="price">{{$house->price}}€</h3>
                    <p class="card-text">{{$house->description}}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
                @foreach ($house->comments as $comment)
                    <div class="panel panel-default" style="margin: 0; border-radius: 0;">
                        <div class="panel-body">
                            <div class="col-sm-9">
                                {{ $comment->comment }}
                            </div>
                            <div class="col-sm-3 text-right">
                                <small>Posté par {{ $comment->user->prenom }}</small>
                            </div>
                        </div>
                    </div>
                @endforeach
                @if (Auth::check())
                    <div class="panel panel-default" style="margin: 0; border-radius: 0;">
                        <div class="panel-body">
                            <form action="{{ url('/comments') }}" method="POST" style="display: flex;">
                                {{ csrf_field() }}
                                <input type="hidden" name="house_id" value="{{ $house->id }}">
                                <input type="text" name="comment" placeholder="Saisir un commentaire" class="form-control" style="border-radius: 0;">
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
            </div>
        </div>
        <div class="col-md-6">
            <div class="calendar panel panel-default">
                <h4 class="text-center panel-heading">Réserver vos dates : </h4>
                <form class="form-horizontal" method="POST" action="{{url('reservations')}}" enctype="multipart/form-data">
                    {{ csrf_field() }}
                <div class="form-group">
                    <input type="hidden" name="house_id" value="{{ $house->id }}">
                    {!! Form::label('from', 'Départ : ', array('class' => 'formLabel')) !!}
                    {!! Form::text('start_date', Form::old('from'), array( 
                        'class' => 'form-control',
                        'id' => 'from',
                        // 'required' => 'required',
                    )) !!} 
                    {!! Form::label('to', 'Arrivée : ', array('class' => 'formLabel')) !!} 
                    {!! Form::text('end_date', Form::old('to'), array( 
                        'class' => 'form-control',
                        'id' => 'to',
                        // 'required' => 'required',
                    )) !!}
                    {{-- <div id="datepicker"></div> --}}
                    {{-- {!! Form::label('traveler', 'Voyageurs : ', array('class' => 'formLabel')) !!} 
                    {!! Form::select('traveler', array(
                        'Cats' => array('leopard' => 'Leopard'),
                        'Dogs' => array('spaniel' => 'Spaniel'),
                    )) !!}  --}}
                </div>
                <h3 class="price">Prix du séjour : {{$house->price}}€</h3>
                {!! Form::submit('Réserver', array('class' => 'btn btn-success btn_reserve')) !!}
                @if ($errors->any())
                    <div class="alert alert-danger">Vous devez remplir tout les champs</div>
                @else
                    <div></div>
                @endif
            </div>
        </div>

        <!-- <form class="form-horizontal" method="post" action="{{'/houses/'.$house->id}}">
            {{ csrf_field() }}
            {{ method_field("DELETE") }}
            <button>Delete Task</button>
        </form> -->
    </div>   
</div>
@section('script')
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/jquery-ui.min.js') }}"></script>
<script src="{{ asset('js/calendar.js') }}"></script>
@endsection