<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()  
    { 
        /* $this 
            ->add('title', 'text') 
            ->add('body', 'textearea', [ 
                'template' => 'form.index'    // resources/views/form/index.blade.php 
        ]); */ 
        return view('form.index'); 
    } 
 
    public function store(Request $request)  
    { 
        $this->validate($request, [ 
            'name' => 'required|unique:posts|max:100', 
            'email' => 'required|unique:posts|max:100', 
            'content' => 'required' 
        ]); 
    }
}
