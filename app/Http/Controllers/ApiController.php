<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
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
    public function addComment(Request $request)
    {
        //$data = $request->json()->all();
		$comment = new Comment();
		$comment->comment = $request->comment;
		$comment->note = $request->note;
		$comment->user_id = $request->user_id;
		$comment->admin_id = 0;
		$comment->house_id = $request->house_id;
		$comment->save();

        return Response::json(['data' => 'added successfully'],200);
		//return response(($comment === true ? 'succeed':'failed'),200)->header('Content-Type', 'application/json');
    }
}
