@section('content')
@section('title', 'Confirmation payement')
@extends('layouts.app')
@section('link')
<link href="{{ asset('css/jquery-ui.min.css') }}" rel="stylesheet">
@section('content')
<div class="container list-category">
    <div class="panel panel-default">
        <div class="panel-heading text-center">Confirmation de votre paiement</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card h-100 text-center">
                            <p class="card-text">Vous avez bien payer pour le <?php \Date::setLocale('fr'); $startdate = Date::parse($reservation->start_date)->format('l j F Y'); echo($startdate);?> au <?php \Date::setLocale('fr'); $enddate = Date::parse($reservation->end_date)->format('l j F Y'); echo($enddate);?></p>
                            <div>
                                <a class="btn btn-success btn_reserve" href="{{ route('houses') }}">Voir nos hebergements</a>
                            </div> 
                        <div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</div>
@section('script')
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/jquery-ui.min.js') }}"></script>
<script src="https://momentjs.com/downloads/moment-with-locales.js"></script>
<script src="{{ asset('js/calendar.js') }}"></script>
<!-- <script src="{{ asset('js/date_french.js') }}"></script> -->
@endsection