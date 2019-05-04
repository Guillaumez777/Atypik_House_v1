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
	
	//Récupère les hébergements de l'annonceur sur l'application mobile
	public function myLocations($id)
    {
		$houseProfil = house::with('proprietes', 'valuecatproprietes', 'category', 'user')->where('user_id', $id)->get()->toJson();
 		return response($houseProfil,200)->header('Content-Type', 'application/json');
	}

	//Récupère les commandes de l'utilisateur sur l'application mobile
	public function myOrders($id)
    {
		$today = Date::now()->format('Y-m-d');
		$reservationProfil = reservation::with('house')->where('user_id', $id)->get()->toJson();
 		return response($reservationProfil,200)->header('Content-Type', 'application/json');
	}

	//Récupère les commentaires de l'utilisateur sur l'application mobile
	public function myComments($id)
    {
		$commentProfil = comment::with('house', 'user')->where('user_id', $id)->orderBy('id','desc')->get()->toJson();
 		return response($commentProfil,200)->header('Content-Type', 'application/json');
	}

	//Récupère les messages que vous envoie l'administrateur
	public function myNotifications($id)
    {
		$messageProfil = DB::table('messages')
			->select('users.*', 'messages.*', 'admins.*')
			->join('users', 'users.id', '=', 'messages.user_id')
			->join('admins', 'admins.id', '=', 'messages.admin_id')
			->where('users.id', '=', $id)
			->where('messages.user_id', '=', $id)
			->where('admins.id', '=', "1")
			->where('messages.admin_id', '=', "1")
			->orderBy('messages.id','desc')
			->get()->toJson();
		return response($messageProfil,200)->header('Content-Type', 'application/json');
	}
	
	//Ajoute un commentaire sur l'hébergement que vous avez reservé
    public function addComment(Request $request)
    {
		$comment = new Comment();
		$comment->comment = $request->comment;
		$comment->note = $request->note;
		$comment->user_id = $request->user_id;
		$comment->admin_id = 0;
		$comment->house_id = $request->house_id;
		$comment->save();

        return Response::json(['data' => 'added successfully'],200);
	}
}
