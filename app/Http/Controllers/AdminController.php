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
    public function index(User $users, Category $categories, Propriete $proprietes)
    {
        $proprietes = propriete::all();
        $categories = category::all();
        $users = user::all();
        $houses = house::all();
        return view('admin')->with('users', $users)
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
        $user = DB::table('users')
        ->where('id', $id)
        ->get();
        return view('admin.profilUser')->with('user', $user);
    }

    public function editHouse($id)
    { 
        // $house = DB::table('houses')
        // ->select('houses.*')
        // ->where('id', $id)
        // ->get(); 
        // dump($house);
        $categories = category::all();
        $villes = ville::all();
        $houses = house::where('id','=', $id)->get();
        //dump($house);
        return view('admin.editHouse')->with('houses', $houses)->with('categories', $categories)->with('villes', $villes);
        //return view('admin.editHouse', compact('house', 'id'));
    }

    public function updateHouse(Request $request, House $house, $id)
    {
        $house = house::where('id', '=', $id)->get();
        dump($house);
        $house->title = $request->get('title');
        $house->idCategory = $request->get('idCategory');
        $house->price = $request->get('price');
        $house->photo = $request->get('photo');
        $house->description = $request->get('description');
        /*$this->validate($request, [
        // check validtion for image or file
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);*/

        //$picture = $request->file('photo');
        $picture = $request->file('photo');
        $filename  = time() . '.' . $picture->getClientOriginalExtension();
        $path = public_path('img/houses/' . $filename);
        Image::make($picture->getRealPath())->resize(350, 200)->save($path);
        $house->photo = $filename;

        $house->save();
        return redirect()->back()->with('success', 'Votre hebergement a bien été modifié');
    }

    public function deleteHouse($id) {
        $house = house::find($house->id);
        $house->delete();
        return redirect()->back()->with('success', 'Votre hebergement a bien été modifié');
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
