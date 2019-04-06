@extends('layouts.app')
@section('title', 'Vos messages')
@section('link')
<link href="{{ asset('css/jquery-ui.min.css') }}" rel="stylesheet">
@section('content')
<div class="container list-category">
    <div class="panel panel-default">
        <div class="panel-heading">Vos messages</div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-12">
                    @foreach ($messages as $message)
                        <div class="panel panel-default" style="margin: 0; border-radius: 0;">
                            <div class="panel-body">
                                <div class="col-sm-9">
                                    {{ $message->content }}
                                </div>
                                <div class="col-sm-3 text-right">
                                    @if($message->user_id != "0")
                                        <small>Envoyé par {{ $message->admin->name }}</small><br/>
                                    @endif
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>