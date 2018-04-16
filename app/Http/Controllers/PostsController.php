<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function index()  
    { 
        /* $this 
            ->add('title', 'text') 
            ->add('body', 'textearea', [ 
                'template' => 'form.index'    // resources/views/form/index.blade.php 
        ]); */ 
        return view('posts.index'); 
    } 
 
    public function store(Request $request)  
    { 
        $this->validate($request, [ 
            'name' => 'required|max:100', 
            'email' => 'required|max:100', 
            'content' => 'required' 
        ]); 
        $post = new post;
        $post->name = $request->name;
        $post->email = $request->email;
        $post->content = $request->content;
        $post->save();
        // $request->session()->flash('status', 'Votre message a bien été envoyé !');
        return back()->with('success', 'Votre message a bien été envoyé !');
    }
}
