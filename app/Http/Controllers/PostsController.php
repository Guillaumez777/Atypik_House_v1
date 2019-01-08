<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests\CreatePostRequest;

class PostsController extends Controller
{
    public function index()  
    { 
        return view('posts.index'); 
    } 
 
    public function store(CreatePostRequest $request)  
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

        return back()->with('success', 'Votre message a bien été envoyé, nos administrateurs reviendront vers vous !');
    }
}
