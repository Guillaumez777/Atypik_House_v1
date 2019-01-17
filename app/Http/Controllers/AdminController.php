<?php
namespace App\Http\Controllers;
use App\User;
use App\Category;
use App\House;
use App\Ville;
use App\Comment;
use App\Propriete;
use App\Post;
use App\Valuecatpropriete;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;
use Image;
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

    public function registercategory(Request $request, Category $categories)
    {
        $categories = category::all();
        $category = new category;
        $category->category = $request->category;
        if ($category->where('category', $category->category)->count() > 0){
            return redirect()->back()->with('danger', "La catégorie existe déjà")->with('categories', $categories);

        }
        $category->save();
        return redirect()->route('admin.categories')->with('success', "La catégorie a bien été ajoutée")->with('categories', $categories);
    }

    public function deletecategory($id)
    {
        $category = category::find($id);
        $category->delete();
        return redirect()->back()->with('danger', 'Votre catégorie a bien été supprimée');
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
            }
            
            return redirect()->route('admin.proprietes_category', ['id' => $request->category_id])->with('success', "La propriété a bien été ajoutée")->with('category_id', $request->category_id);
        }
    }

    public function deletepropriete($id)
    {
        $propriete = propriete::find($id);
        $propriete->delete();

        $valuecatpropriete = valuecatpropriete::where('propriete_id', '=', $propriete->id)->delete();
        return redirect()->back()->with('danger', 'Votre propriété a bien été supprimée');
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

    

    public function editHouse($id)
    { 
        $categories = category::all();
        $houses = house::where('id','=', $id)->get();
        return view('admin.editHouse')->with('houses', $houses)->with('categories', $categories);
    }

    public function updateHouse(Request $request,Category $category, Ville $ville, House $house, $id)
    {
        $house = house::find($id);
        $house->title = $request->title;
        $house->category_id = $request->category_id;
        $house->ville = $request->ville;
        $house->price = $request->price;
        $house->description = $request->description;
        $house->statut = $request->statut;
        /*$this->validate($request, [
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);*/
        if($request->photo == NULL){
            $request->photo = $house->photo;
            $house->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
           
        } else {
            $picture = $request->file('photo');
            $filename  = time() . '.' . $picture->getClientOriginalExtension();
            $path = public_path('img/houses/' . $filename);
            Image::make($picture->getRealPath())->resize(350, 200)->save($path);
            $house->photo = $filename;
            $house->save();
            return redirect()->back()->with('success', "L'hébergement de l'utilisateur a bien été modifié");
        }
    }

    public function deleteHouse($id) {
        $house = house::find($house->id);
        $house->delete();
        return redirect()->back()->with('success', 'Votre hebergement a bien été supprimé');
    }

    //Vue de détails des annonces des utilisateurs
    public function listannonces($id)
    {
        $users = User::where('id', $id)->get();
        $houses = House::where('user_id', $id)->get();
        return view('admin.annonces_user')->with('houses', $houses)
                                       ->with('users', $users);
    }

    public function showannonces($id)
    {
        $house = house::find($id);
        return view('admin.showannonces')->with('house', $house);
    }

    public function listcomments(Comment $comments, $id)
    {
        $comments = comment::find($id)->where('user_id', '=', $id)->get();
        return view('admin.commentsUser')->with('comments', $comments);
    }

    public function deleteComment($id) {
        $comment = comment::find($id);
        $comment->delete();
        return redirect()->back()->with('success', 'Le commentaire a bien été supprimé');
    }

    
    
}
