{!! Form::open(['method'=>'GET','url'=>$url,'class'=>'form','role'=>'search'])  !!}
    {!! Form::text('search', null,
            array('required',
                    'class'=>'form-control ',
                    'placeholder'=>'Saisir une ville ...')) !!}

    {!! Form::submit('Rechercher',
            array('class'=>'btn btn-searchbar')) !!}
{!! Form::close() !!}