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
    <h2>Mentions Légales</h2>
    <div class="row">
        <div class="container">
<p>Merci de lire attentivement les présentes modalités d'utilisation du présent site avant de le parcourir. </p>
<p>En vous connectant sur ce site, vous acceptez sans réserve les présentes modalités.</p>
<p>Informations de l’entreprise </p>
<p>AtypikHouse </p>
<p>par notre Site Internet </p>
<p>11 rue Léon Frot </p>
<p>75011 Paris </p>
<p>France </p>
<p>Tél. : + 33 (0)1 49 57 59 59 </p>
<p>Fax : + 33 (0)5 40 00 02 66 </p>
<p>https://www.atypikhouse.fr </p>

<p>SARL au capital de 5 000€</p>
<p>RCS B 497 553 71 – Siret : 43954371900020</p>
<p>Code APE : 6469Z</p>
<p>N° déclaration CNIL : 1512942</p>
<p>N° TVA : FR 12 271 491 327</p>
<p>Hébergeur</p>
<p>OVH</p>
<p>SAS au capital de 10 069 020 €</p>
<p>RCS Lille Métropole 424 761 419 00045</p>
<p>Code APE 2620Z</p>
<p>N° TVA : FR 22 424 761 419</p>
<p>Siège social : 2 rue Kellermann - 59100 Roubaix - France</p>
<p>Directeur de la publication : Octave KLABA</p>
<p>Président : Henryk KLABA</p>
<p>Directeur général : Miroslaw KLABA</p>
<p>Directeur général délégué : Octave KLABA</p>
    </div>


    </div>
</div>
@endsection
