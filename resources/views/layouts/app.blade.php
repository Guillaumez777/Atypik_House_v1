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
    <title>AtypikHouse - Votre habitat insolite, partout en Europe</title>

    {{-- Logo Navigateur --}}
    <link rel="icon" type="image/png" href="{{ asset('img/LogoNavigateur.png') }}" />

    {{-- Fonts --}}
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" id="logo" href="{{ url('/') }}">
                        <img src="{{ asset('img/Logo.png') }}" alt="Logo" width="70">
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @if (Auth::guest())
                            <li><a href="{{ url('/') }}">Accueil</a></li>
                            <li><a href="{{ route('houses.index') }}">Nos hébergements</a></li>
                            <li><a href="{{ route('login') }}">Connexion</a></li>
                            <li><a href="{{ route('register') }}">Inscription</a></li>
                        @else
                            <li><a href="{{ url('/') }}">Accueil</a></li>
                            <li><a href="{{ route('houses.index') }}">Nos hébergements</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->prenom }} <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="{{url('/profile')}}/{{Auth::user()->id}}">Mon profil</a></li>
                                    <li><a href="{{url('/mylocations')}}/{{Auth::user()->id}}">Mes locations</a></li>
                                    <li><a href="{{ route('houses.create') }}">Créer un hébergement</a></li>
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Se déconnecter
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </nav>
    </div>
        @yield('content')
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-offset-2 col-md-5">
                    <ul>
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Conditions générales d'utilisation</a></li>
                    </ul>
                </div>
                <div class="col-md-5">
                    <ul>
                        <li><a href="#">Hébergement</a></li>
                        <li><a href="#">devenir hotes</a></li>
                        <li><a href="#">Règle pour les Hôtes</a></li>
                        <li><a href="#">Consigne de sécurité</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
