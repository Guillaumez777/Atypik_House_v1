<!--============================--> 
<!-- views/form/index.blade.php --> 
<!--============================--> 
@extends('layouts.app') 
@section('content') 
    <div class="container" id="form"> 
        {!! Form::open(['url' => 'form']) !!} 
            <div class="form-group"> 
                {!! Form::label('name', 'Nom : ', array('class' => 'formLabel')) !!} 
                {!! Form::text('name', Form::old('name'), array( 
                    'class' => 'form-control', 
                    'placeholder' => 'Entrer votre nom' 
                )) !!} 
            </div> 
            <div class="form-group"> 
                {!! Form::label('email', 'Email : ', array('class' => 'formLabel')) !!} 
                {!! Form::text('email', Form::old('email'), array( 
                    'class' => 'form-control', 
                    'placeholder' => 'Entrer votre email' 
                )) !!} 
            </div> 
            <div class="form-group"> 
                {!! Form::label('content', 'Message : ', array('class' => 'formLabel')) !!} 
                {!! Form::textarea('content', Form::old('content'), array( 
                    'class' => 'form-control', 
                    'placeholder' => 'Entrer votre message', 
                    'rows' => '8', 
                    'cols' => '15' 
                )) !!} 
            </div> 
            {!! Form::submit('Envoyer !', array('class' => 'btn btn-success')) !!} 
        {!! Form::close() !!} 
    </div> 
@endsection 