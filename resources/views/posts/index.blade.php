<!--============================--> 
<!-- views/form/index.blade.php --> 
<!--============================--> 
@extends('layouts.app') 
@section('content') 
    <div class="container" id="form"> 
        {!! Form::open(['url' => 'posts']) !!} 
            <div class="form-group"> 
                {{-- @if (Form::is('success'))
                    <div class="alert alert-success">Votre formulaire a été envoyé.</div>
                @endif --}}
                @include('flash-message')
                @yield('content')
                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                    {!! Form::label('name', 'Nom : ', array('class' => 'formLabel control-label')) !!} 
                    {!! Form::text('name', Form::old('name'), array( 
                        'class' => 'form-control', 
                        'placeholder' => 'Entrer votre nom' 
                    )) !!} 
                    @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>
            </div> 
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}"> 
                {!! Form::label('email', 'Email : ', array('class' => 'formLabel control-label')) !!} 
                {!! Form::text('email', Form::old('email'), array( 
                    'class' => 'form-control', 
                    'placeholder' => 'Entrer votre email' 
                )) !!} 
                @if ($errors->has('email'))
                    <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div> 
            <div class="form-group{{ $errors->has('content') ? ' has-error' : '' }}"> 
                {!! Form::label('content', 'Message : ', array('class' => 'formLabel control-label')) !!} 
                {!! Form::textarea('content', Form::old('content'), array( 
                    'class' => 'form-control', 
                    'placeholder' => 'Entrer votre message', 
                    'rows' => '8', 
                    'cols' => '15' 
                )) !!} 
                @if ($errors->has('name'))
                    <span class="help-block">
                        <strong>{{ $errors->first('content') }}</strong>
                    </span>
                @endif
            </div> 
            {!! Form::submit('Envoyer !', array('class' => 'btn btn-success')) !!} 
        {!! Form::close() !!} 
    </div> 
@endsection 