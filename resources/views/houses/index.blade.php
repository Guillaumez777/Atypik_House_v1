@extends('layouts.app')
@section('content')
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
        @foreach($houses as $house)
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card h-100">
                <a href="{{action('HousesController@show', $house['id'])}}"><img class="img-responsive" src="{{ asset('img/houses/'.$house->photo) }}"></a>
                <div class="card-body">
                    <h3 class="title card-title">
                        <a href="{{action('HousesController@show', $house['id'])}}">{{$house->title}}</a>
                    </h3>
                    <p>Type de bien : Logement</p>
                    <p><i class="fas fa-bed"></i> : 2 lits - <i class="fas fa-users"></i> : pour 2 Personnes</p>
                    <h3 class="price">{{$house->price}}€</h3>
                    <p class="card-text"><?php echo(substr($house->description, 0, 50));?></p>
                </div>
                <div class="note card-footer">
                    <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                    <a class="btn btn-success btn_reserve" href="{{action('HousesController@show', $house['id'])}}">Réserver</a>
                </div>
            </div>
          </form>
        <!-- </form> -->
        </div>   
        @endforeach
    </div>   
</div>