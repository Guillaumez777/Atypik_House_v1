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
    <h2>A propos</h2>
    <div class="row">
        <div class="container">
            Atypikhouse est une société à résponsabilité limitée (sarl) au capital de 10000€ composée de trois associés partageant les mêmes passions pour les voyages, l'habitat alternatif et la vie en harmonie avec la nature.<br>

            <br>Atypikhouse a pour ambition de recenser les plus beaux habitats alternatif (yourtes, cabanes, cabanes flottantes etc...) afin de les proposer en location au plus grand nombre, attirés par le calme et la nature.<br>

            <br>Le site Atypikhouse permet à ses utilisateurs de rechercher un logement à louer en france ou en europe, mais permet également à ses utilisateurs de mettre en location leurs propres logements de manière simple et sécurisé.<br>

            <br>Soucieux de la qualité de nos services, nous assurons un controle sérieux sur les logements mis à disposition des clients afin d'assurer un service irreprochable et sécurisé.<br>

            <br>Le site Atypikhouse est secondé par une application permettant à tous les utilisateurs de notre service d'avoir un récapitulatif de leurs achats et pourront également gérer leurs logements si ils ont été enregistrés comme propriété louable.<br>

           <br>Atypikhouse vous permet donc de reserver des logements atypique en ligne et de gérer vos commandes ou logements via notre application.<br>

            <br>pour toutes question vous pouvez nous contacter par mail à administration.atypikhouse@gmail.com.<br>
        </div>
    </div>
</div>
@endsection
