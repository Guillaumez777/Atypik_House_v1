<?php
namespace App\Http\Controllers;
use App\User;
use App\Category;
use App\House;
use App\Ville;
use App\Propriete;
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
        $villes = ville::all();
        $houses = house::where('id','=', $id)->get();
        return view('admin.editHouse')->with('houses', $houses)->with('categories', $categories)->with('villes', $villes);
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

    public function proprietes(Request $request, Category $categories)  
    {
        return view('admin.proprietes')->with('categories', $categories);
                                      /*->with('proprietes', $proprietes)
                                      ->with('houses', $houses);*/
    }

    public function createproprietes(Request $request)  
    {
        foreach ($request->get('propriete') as $propertie){
            $propriete = new propriete;
            $propriete->typeProprietes = $request->typeProprietes;
            $propriete->propriete = $propertie;
            $propriete->category_id = $request->category_id;
            $propriete->save();
        }
        return redirect()->back()->with('success', 'Votre propriété a bien été ajouté à votre catégorie!');
    }
    
}
