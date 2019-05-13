<?php
namespace App\Http\Controllers;
use App\User;
use App\Admin;
use App\Category;
use App\House;
use App\Ville;
use App\Comment;
use App\Propriete;
use App\Post;
use App\Message;
use App\Reservation;
use App\Valuecatpropriete;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;
use Image;
use Jenssegers\Date\Date;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

     // Utilisateurs
    public function listusers(User $users, Category $categories, Propriete $proprietes)
    {
        $proprietes = propriete::all();
        $categories = category::all();
        $users = user::all();
        $houses = house::all();
        return view('admin.listusers')->with('users', $users)
                            ->with('categories', $categories)
                            ->with('proprietes', $proprietes)
                            ->with('houses', $houses);
    }

    public function deleteUser($id) {
        $house = user::find($id);
        $house->delete();
        return redirect()->back()->with('success', 'Le client a bien été supprimé');
    }

    //Message des clients (formulaire de contact)
    public function listposts(Post $posts)
    {
        $posts = post::all();
        return view('admin.listposts')->with('posts', $posts);
    }

    //Vue de détails des messages clients
    public function showposts($id)
    {
        $post = post::find($id);
        return view('admin.showposts')->with('post', $post);
    }

    //Categories

    public function listcategories(Category $categories)
    {
        $categories = category::all();
        return view('admin.listcategories')->with('categories', $categories);
    }

    public function createcategory(Request $request)
    {
        return view('admin.create_category');
    }

    public function registercategory(Request $request)
    {
        $categories = category::all();
        $users = user::all();
        $category = new category;
        $category->category = $request->category;
        $category->statut = 1;
        if ($category->where('category', $category->category)->count() > 0){
            return redirect()->back()->with('danger', "La catégorie existe déjà")->with('categories', $categories);
        }
        $category->save();
        foreach($users as $user){
            $message = new message;
            $message->content = "L'adminitrateur a rajouté la catégorie ".$category->category." sur les type d'hébergement";
            $message->user_id = $user->id;
            $message->admin_id = Auth::user()->id;
            $message->save();
        }
        return redirect()->route('admin.categories')->with('success', "La catégorie a bien été ajoutée, un message a été envoyé à tous les propriétaires")->with('categories', $categories);
    }

    public function enableCategory($id)
    {
        $users = user::all();
        $category = category::find($id);
        $category->statut = 1;
        $category->save();
        foreach($users as $user){
            $message = new message;
            $message->content = "L'adminitrateur a ajouté la catégorie ".$category->category." sur les types d'hébergements";
            $message->user_id = $user->id;
            $message->admin_id = Auth::user()->id;
            $message->save();
        }
        return redirect()->back()->with('success', "La catégorie ".$category->category." a bien été activé, un message a été envoyé à tous les propriétaires");
    }

    public function disableCategory($id)
    {
        $users = user::all();
        $category = category::find($id);
        $category->statut = 0;
        $category->save();
        foreach($users as $user){
            $message = new message;
            $message->content = "L'adminitrateur a supprimé la catégorie ".$category->category.", lorsque vous créérez une nouvelle annonce la catégorie ".$category->category." ne sera plus disponible";
            $message->user_id = $user->id;
            $message->admin_id = Auth::user()->id;
            $message->save();
        }
        return redirect()->back()->with('danger', "La catégorie ".$category->category." a bien été désactivé, un message a été envoyé à tous les propriétaires");
    }

    //Propriétés des catégories

    public function proprietescategory(Request $request, Category $categories, $id)  
    {
        $category = category::find($id);
        $proprietes = propriete::where('category_id', $id)->get();
        //var_dump($proprietes);
        return view('admin.proprietes')->with('category', $category)
                                       ->with('proprietes', $proprietes);
    }

    public function createpropriete(Request $request, $id) {
        $category = category::find($id);
        return view('admin.create_propriete')->with('category', $category);
    }

    public function registerpropriete(Request $request)
    {
        $propriete = new propriete;
        $propriete->propriete = $request->propriete;
        $propriete->category_id = $request->category_id;
        if ($propriete->where('propriete', $propriete->propriete)->where('category_id', '=', $request->category_id)->count() >0) {
            return redirect()->back()->with('danger', "La propriété existe déjà");
        } else {
            $propriete->save();

            $houses = house::where('category_id', '=', $request->category_id)->get();
            foreach($houses as $house){
                $valuecatpropriete = new valuecatpropriete;
                $valuecatpropriete->value = 0;
                $valuecatpropriete->category_id = $request->category_id;
                $valuecatpropriete->propriete_id = $propriete->id;
                $valuecatpropriete->house_id = $house->id;
                $valuecatpropriete->save();

                $message = new message;
                $message->content = "L'administrateur a ajouté une propriété ".$propriete->propriete." sur vos annonces ayant comme catégorie ".$propriete->category->category;
                $message->user_id = $house->user_id;
                $message->admin_id = Auth::user()->id;
                $message->save();
            }
            
            return redirect()->route('admin.proprietes_category', ['id' => $request->category_id])->with('success', "La propriété ".$propriete->propriete." a bien été ajoutée, un message a été envoyé aux proprietaires ayant dans leur annonce la catégorie ".$propriete->category->category)->with('category_id', $request->category_id);
        }
    }

    public function deletepropriete(Request $request, $id)
    {
        $propriete = propriete::find($id);
        $values_propriete = valuecatpropriete::with('propriete')->where([
                                                                ['category_id', '=', $propriete->category_id],
                                                                ['propriete_id', '=', $propriete->id],
                                                        ])->get();
        foreach($values_propriete as $values){
            $values->delete();
        }
        $propriete->delete();
        $houses = house::where('category_id', '=', $propriete->category_id)->get();
        foreach($houses as $house){
            $message = new message;
            $message->content = "L'administrateur a supprimé la propriété ".$propriete->propriete." ainsi que les valeurs attribuées à ".$propriete->propriete;
            $message->user_id = $house->user_id;
            $message->admin_id = Auth::user()->id;
            $message->save();
        }
        return redirect()->back()->with('danger', "Votre propriété ".$propriete->propriete." a bien été supprimée, un message a été envoyé aux propriétaires ayant dans leur annonce la catégorie ".$propriete->category->category);
    }

    public function editHouse($id)
    { 
        $categories = category::all();
        $houses = house::where('id','=', $id)->get();
        return view('admin.editHouse')->with('houses', $houses)->with('categories', $categories);
    }

    public function updateHouse(Request $request,Category $category, Ville $ville, House $house, $id)
    {
        $house = house::find($id);
        $valueproprietes = valuecatpropriete::where('house_id','=', $id)->get();

        if($house->category_id != $request->category_id){
            $house->category_id = $request->category_id;
            $house->save();
            
            
            $proprietes_category = propriete::where('category_id', '=', $request->category_id)->get();
            if($valueproprietes->count() > 0){
                $valueproprietesdelete = valuecatpropriete::where('house_id','=', $id)->delete();
                foreach($proprietes_category as $propriete_category){
                    $valuecatProprietesHouse = new valuecatPropriete;
                    $valuecatProprietesHouse->value = 0;
                    $valuecatProprietesHouse->category_id = $request->category_id;
                    $valuecatProprietesHouse->house_id = $house->id;
                    $valuecatProprietesHouse->propriete_id = $propriete_category->id;
                    $valuecatProprietesHouse->save();
                }    
                $house->save();
            }
            $house->save();
        }
        $house->title = $request->title;
        $house->category_id = intval($request->category_id);
        $house->pays = $request->pays;
        $house->ville = $request->ville;
        $house->adresse = $request->adresse;
        $house->price = $request->price;
        $house->description = $request->description;

        if($house->statut != $request->statut){
            if($request->statut == "En attente de validation"){
                $house->statut = $request->statut;
                $house->save();
                $message = new message;
                $message->content = "L'adminitrateur a mise en attente votre annonce ".$house->title.", il vous enverra un autre message concernant les modifications que vous devez effectuer afin qu'il valide par la suite votre annonce";
                $message->user_id = $house->user_id;
                $message->admin_id = Auth::user()->id;
                $message->save();
                return redirect()->back()->with('success', "L'hébergement du propriétaire a bien été modifié, vous avez mise en attente l'annonce, un message a été envoyé au propriétaire de cette annonce");
            } else {
                $house->statut = $request->statut;
                $house->save();
                $message = new message;
                $message->content = "L'adminitrateur a validé votre annonce ".$house->title;
                $message->user_id = $house->user_id;
                $message->admin_id = Auth::user()->id;
                $message->save();
                return redirect()->back()->with('success', "L'hébergement du propriétaire a bien été modifié, vous avez validé l'annonce, un message a été envoyé au propriétaire de cette annonce");
            }
        }
        $house->save();
        
        $i = 0;
        foreach ($valueproprietes as $value) {
            DB::table('valuecatproprietes')
                ->leftJoin('houses', 'valuecatproprietes.house_id', '=', 'houses.id')
                ->where('house_id','=', $id)
                ->where('valuecatproprietes.id','=', $value->id)
                ->update([
                    'value' => $request->propriete[$i]
            ]);
            $i++;
        }
        $house->save();
    
        if($request->photo == NULL){
            $request->photo = $house->first()->photo;
            $house->save();

            $message = new message;
            $message->content = "L'administrateur a modifié des informations sur votre annonce ".$house->title;
            $message->user_id = $house->user_id;
            $message->admin_id = Auth::user()->id;
            $message->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié, un message a été envoyé au propriétaire de cette annonce");
        } else {
            $picture = $request->file('photo');
            $filename  = time() . '.' . $picture->getClientOriginalExtension();
            $path = public_path('img/houses/' . $filename);
            Image::make($picture->getRealPath())->resize(350, 200)->save($path);
            $house->photo = $filename;
            $house->save();

            $message = new message;
            $message->content = "L'administrateur a modifié des informations sur votre annonce ".$house->title;
            $message->user_id = $house->user_id;
            $message->admin_id = Auth::user()->id;
            $message->save();
            return redirect()->back()->with('success', "L'hébergement du propriétaire a bien été modifié, un message a été envoyé au propriétaire de cette annonce");
        } 
    }

    /**
     * Show the profile for the given user.
     *
     * @return Response
     */
    public function profilUser($id) {  
        $users = User::where('id', $id)->get();
        $houses = House::where('user_id', $id)->get();
        return view('admin.profilUser')->with('houses', $houses)
                                       ->with('users', $users);
    }

    //Liste des reservations des utilisateurs
    public function listreservations($id)
    {
        $today = Date::now()->format('Y-m-d');
        $reservations = reservation::where('user_id','=', $id)->where('start_date', '>=', $today)->get();
        return view('admin.listreservations')->with('reservations', $reservations);
    }

    //Vue de détails des reservations des utilisateurs
    public function showreservations($id)
    {
        $users = User::where('id', $id)->get();
        $houses = House::where('user_id', $id)->get();
        $reservation = reservation::find($id);
        return view('admin.showreservations')->with('houses', $houses)
                                              ->with('users', $users)
                                              ->with('reservation', $reservation);
    }

    //Liste des reservations des utilisateurs
    public function listhistoriques($id)
    {
        $today = Date::now()->format('Y-m-d');
        $historiques = DB::table('reservations')->join('houses', 'reservations.house_id', '=', 'houses.id')
                                                ->where('reservations.user_id','=', $id)
                                                ->where('reservations.start_date', '<', $today)
                                                ->get();

        $today = Date::now()->format('Y-m-d');
        $historiques = Reservation::with('house')->where([
                                                    ['user_id', '=', $id],
                                                    ['start_date', '<', $today],
                                                    ['end_date', '<=', $today]
                                                ])->get();
        return view('admin.listhistoriques')->with('historiques', $historiques);
    }

    //Vue de détails des historiques des utilisateurs
    public function showhistoriques($id)
    {
        $users = User::where('id', $id)->get();
        $houses = House::where('user_id', $id)->get();
        $historique = reservation::find($id);
        return view('admin.showhistoriques')->with('houses', $houses)
                                              ->with('users', $users)
                                              ->with('historique', $historique);
    }

    //Vue de détails des annonces des utilisateurs
    public function listannonces($id)
    {
        $users = User::where('id', $id)->get();
        $houses = House::where('user_id', $id)->get();
        return view('admin.listannonces')->with('houses', $houses)
                                         ->with('users', $users);
    }

    public function showannonces($id)
    {
        $users = User::where('id', $id)->get();
        $house = house::find($id);
        return view('admin.showannonces')->with('house', $house)
                                         ->with('users', $users);
    }

    public function deleteAnnonce($id) {
        $house = house::find($id);
        $house->delete();
        $message = new message;
        $message->content = "L'adminitrateur a supprimé votre annonce ".$house->title;
        $message->user_id = $house->user_id;
        $message->admin_id = Auth::user()->id;
        $message->save();
        return redirect()->back()->with('success', "L'annonce a bien été supprimée, un message a été envoyé au propriétaire de l'annonce");
    }

    public function listcomments(Comment $comments, $id)
    {
        $comments = comment::where('user_id', $id)->get();
        return view('admin.listcomments')->with('comments', $comments);
    }

    public function addComment(Request $request)
    {
        // $this->validate($request, [
        //     'house_id' => 'exists:houses,id|numeric',
        //     'comment' => 'required|max:255'
        // ]);
        $comment = new Comment;
        $comment->comment = $request->comment;
        if($request->note == null){
            $comment->note = 0;
        } else {
            $comment->note = $request->note;
        }
        $comment->user_id = "0";
        $comment->admin_id = "1";
        $comment->house_id = $request->house_id;
        $comment->save();
        Session::flash('success', 'Votre commentaire a bien été ajouté');
        return redirect()->back();
    }

    public function deleteComment($id) {
        $comment = comment::find($id);
        $comment->delete();
        return redirect()->back()->with('success', 'Le commentaire a bien été supprimé');
    }

    public function note(House $house, Note $note) {
        $note = note::find($house->id);
        $house->title = $request->get('title');
        $house->idCategory = $request->get('idCategory');
        $house->price = $request->get('price');
    }

    public function messages($id) {
        $messages = message::where('user_id','=', $id)->orderBy('id', 'desc')->get();
        $user = user::find($id);
        return view('admin.user_messages')->with('messages', $messages)->with('user', $user);
    }

    public function addMessage(Request $request) {
        $message = new Message;
        $message->content = $request->content;
        $message->user_id = $request->user_id;
        $message->admin_id = Auth::user()->id;
        $message->save();
        Session::flash('success', 'Votre message a bien été envoyé');
        return redirect()->back();
    } 
}
