<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Title --}}
    {{-- <title>{{ config('app.name', 'Laravel') }}</title> --}}
    <title>AtypikHouse - Admin</title>

    {{-- Logo Navigateur --}}
    <link rel="icon" type="image/png" href="{{ asset('img/LogoNavigateur.png') }}" />

    {{-- Fonts --}}
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <h3 id="titre">Administration AtypikHouse</h3>
            <ul id="menu">
                <li><a href="{{ url('/') }}" class="btn btn-success">Site Internet</a></li>
                <li><a href="#" class="btn btn-danger">Déconnexion</a></li>
            </ul>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li><a href="#" id="1">Hébergements</a></li>
                    <li><a href="#" id="2">Réservations</a></li>
                    <li><a href="#" id="3">Utilisateurs</a></li>
                    <li><a href="#" id="4">Avis</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        @yield('content')
    </div>
<footer>

</footer>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/admin.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" crossorigin="anonymous"></script>
</body>
</html>
