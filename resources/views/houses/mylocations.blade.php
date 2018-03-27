@extends('layouts.app')
@section('content')
<div class="container list-category">
    <h2>Mes hébergements</h2>
    <div class="row">
        @foreach($houseProfil as $house)
        
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="{{ asset('img/houses/'.$house->photo) }}"></a></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <p>{{$house->title}}</p>
                    </h4>
                    <h5>{{$house->price}}€</h5>
                    <p class="card-text">{{$house->description}}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
            <?php var_dump($house); ?>
           <a href="{{action('HousesController@edit', $house->id)}}" class="btn btn-warning">Edit</a>
           <a href="{{url('/houses/edit')}}/{{$house->id}}" class="btn btn-warning">Modifier</a>
            <form action="{{action('HousesController@destroy', $house->id)}}" method="post">
            {{csrf_field()}}
            <input name="_method" type="hidden" value="DELETE">
            <button class="btn btn-danger" type="submit">Delete</button>
            </form>
        </div>
       
        @endforeach
        
    </div>   
</div>