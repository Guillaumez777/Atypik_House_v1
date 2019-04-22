<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\House;
use App\User;
use App\Admin;
use App\Reservation;
use App\Message;
use App\Comment;
// use JWTAuth;
// use JWTAuthException;

class ApiController extends Controller
{
    public function addComment(array $request)
    {
        $data = $request->json()->all();
		$comment = new Comment();
		$comment->comment = $data['comment'];
		$comment->note = $data['note'];
		$comment->save();
		return response(($result === true ? 'succeed':'failed'),200)->header('Content-Type', 'application/json');
    }
}
