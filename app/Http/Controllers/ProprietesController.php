<?php

namespace App\Http\Controllers;

use App\Propriete;
use App\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use Session;

class ProprietesController extends Controller
{
    public function index()  
    { 
        /* $this 
            ->add('title', 'text') 
            ->add('body', 'textearea', [ 
                'template' => 'form.index'    // resources/views/form/index.blade.php 
        ]); */ 
        //return view('admin.home'); 
    } 
 
    // public function store(Request $request)  
    // { 
    //     $propriete = new propriete;
    //     $propriete->propriete = $request->propriete;
    //     $propriete->category_id = $request->category_id;
    //     $propriete->save();
    //     return view('admin')->with('success', 'Votre propriété a bien été ajouté à votre catégorie!');
    // }
}
