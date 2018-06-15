@extends('layouts.app')
@section('content')
<div class="container-fluid banner">
    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <form class="form-horizontal" method="get" action="{{url('search')}}" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h1 class="title title-intro">Trouvez les meilleurs locations insolites en Europe !</h1>
                                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-9 col-sm-offset-1">
                                            <div class="form-group button2">
                                                @include('search',['url'=>'search','link'=>'search'])
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                            <!--
                            {!! Form::open(['method'=>'GET','url'=>'QueryController@search','class'=>'form','role'=>'search'])  !!}
                            {!! Form::text('search', null,
                                                array('required',
                                                        'class'=>'form-control ',
                                                        'placeholder'=>'Saisir une ville ...')) !!}
                            {!! Form::submit('Rechercher',
                                                        array('class'=>'btn btn-searchbar')) !!}
                            {!! Form::close() !!}-->
<div class="container list-category">
    <h2>Conditions Générale d'utilisation</h2>
    <div class="row">
        <div class="container">
            <p>Le site accessible par l’url www.atypikhouse.fr est exploité dans le respect de la législation française. L'utilisation de ce site est régie par les présentes conditions générales. En utilisant le site, vous reconnaissez avoir pris connaissance de ces conditions et les avoir acceptées. Celles-ci pourront êtres modifiées à tout moment et sans préavis par la société Nom de la boite. Eurodev Agency ne saurait être tenu pour responsable en aucune manière d’une mauvaise utilisation du service.
</p>
        </div>
    </div>
</div>
@endsection
