@extends('layouts.app')
@section('content')
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
        @foreach($houses as $house)
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="{{ asset('img/houses/'.$house->photo) }}"></a></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="{{action('HousesController@show', $house['id'])}}">{{$house->title}}</a>
                    </h4>
                    <h5>{{$house->price}}€</h5>
                    <p class="card-text">{{$house->description}}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
            <!-- <form class="form-horizontal" method="post" action="{{'/houses/'.$house->id}}">
            {{ csrf_field() }}
            {{ method_field("DELETE") }}
            <button>Delete Task</button> -->
            <a href="{{action('HousesController@edit', $house['id'])}}" class="btn btn-warning">Edit</a></td>
            <form action="{{action('HousesController@destroy', $house['id'])}}" method="post">
            {{csrf_field()}}
            <input name="_method" type="hidden" value="DELETE">
            <button class="btn btn-danger" type="submit">Delete</button>
          </form>
        <!-- </form> -->
        </div>   
        @endforeach
    </div>   
</div>