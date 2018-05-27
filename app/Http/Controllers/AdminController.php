<?php
namespace App\Http\Controllers;
use App\User;
use App\Category;
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
        return view('admin')->with('users', $users)->with('categories', $categories)->with('proprietes', $proprietes);
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

    public function createproprietes(Request $request)  
    {
        //$proprietes = $request->propriete;

        foreach ($request->get('propriete') as $propertie){
            $propriete = new propriete;
            $propriete->type = 2;
            $propriete->typeInt = 2;
            $propriete->propriete = $propertie;
            $propriete->category_id = $request->category_id;
            $propriete->save();
        }
        return redirect()->back()->with('success', 'Votre propriété a bien été ajouté à votre catégorie!');
    }
    
}
