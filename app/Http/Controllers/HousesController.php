<?php

namespace App\Http\Controllers;

use App\House;
use App\Ville;
use App\Category;
use App\Comment;
use App\Reservation;
use App\Propriete;
use App\ValuecatPropriete;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use Session;
use Image;
use View;

class HousesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(House $house)
    {
        $houses = house::all();
        return view('houses.index')->with('houses', $houses);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \App\Category  $categories
     * @param  \App\Ville  $villes
     * @return \Illuminate\Http\Response
     */
    public function create(Category $categories, Ville $villes)
    {
        $categories = category::all();
        $villes = ville::all();
        //$proprietes = propriete::all();

        return view('houses.create', [
            'villes'=> $villes,
            'categories' => $categories,
        ]);
    }

    public function create_step1(Ville $villes, Request $request) {
        $villes = ville::all();
        //$houseDatas = $request->session()->get('houseDescription');

        //var_dump($houseDatas);
        /*$houseDatas = $request->session()->reflash();
        var_dump($houseDatas);*/
        return view('houses.create_step1', [
            'villes'=> $villes
        ]);
    }

    public function postcreate_step1(Request $request) {
        /*$validatedVille = $this->validate($request, [
            'ville_id' => 'required',
        ]);*/
        //$houseDatas = $request->session()->flush();
        
        //$house->ville_id = $request->ville_id;
        
        $houseVille = session('houseVille', $request->ville);
        $request->session()->push('houseVille', $request->ville);

        $houseUser = session('houseUser', $request->user_id);
        $request->session()->push('houseUser', $request->user_id);

        /*return view('houses.create_step2', [
            'houseDatas' => $houseDatas
        ]);*/
        return redirect('/house/create_step2');
    }

    public function create_step2(Category $categories, Request $request) {
        $categories = category::all();
        $houseVille = $request->session()->get('houseVille');

        var_dump($houseVille);
        
        return view('houses.create_step2', [
            'categories' => $categories,
            'houseVille' => $houseVille
        ]);
    }

    public function postcreate_step2(/*Category $categories,*/ Request $request) {
        $categories = category::all();
        $houseVille = $request->session()->get('houseVille');

        $houseCategory = session('houseCategory', $request->category_id);
        $request->session()->push('houseCategory', $request->category_id);

        $houseTitle = session('houseTitle', $request->title);
        $request->session()->push('houseTitle', $request->title);

        $houseDescription = session('houseDescription', $request->description);
        $request->session()->push('houseDescription', $request->description);

        return redirect('/house/create_step3');
    }

    public function create_step3(Request $request) {
        return view('houses.create_step3');
    }

    public function postcreate_step3(Request $request) {
        $housePrix = session('housePrix', $request->price);
        $request->session()->push('housePrix', $request->price);
    
        $houseVille = $request->session()->get('houseVille');
        $houseTitle = $request->session()->get('houseTitle');
        $houseDescription = $request->session()->get('houseDescription');
        $housePrix = $request->session()->get('housePrix');
        return redirect('/house/create_step4');
    }
    

    public function create_step4(Request $request) {
        return view('houses.create_step4');
    }

    public function postcreate_step4(Request $request) {
        $houseTitle = $request->session()->get('houseTitle');
        $houseUser = $request->session()->get('houseUser');
        $houseCategory = $request->session()->get('houseCategory');
        $houseVille = $request->session()->get('houseVille');
        $houseDescription = $request->session()->get('houseDescription');
        $housePrix = $request->session()->get('housePrix');
        
        $housePhoto = session('housePhoto', $request->photo);
        $request->session()->push('housePhoto', $request->photo);
        
        $house = new house;
        $house->title = last($houseTitle);
        $house->user_id = last($houseUser);
        $house->category_id = last($houseCategory);
        $house->ville = last($houseVille);
        $house->description = last($houseDescription);
        $house->price = last($housePrix);
        $house->statut = "En attente de validation";
        

        $this->validate($request, [
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);

        $picture = $request->file('photo');
        $filename  = time() . '.' . $picture->getClientOriginalExtension();
        $path = public_path('img/houses/' . $filename);
        Image::make($picture->getRealPath())->resize(350, 200)->save($path);
        $house->photo = $filename;
        $house->save();
        
        return redirect('/house/confirmation_create_house');
        
    }

    public function confirmation_create_house(){
        return view('houses.confirmation_create_house');
    }

    public function json_propriete(){
        
        //$proprietes->load('propriete');
        $category_id = $_GET['category_id'];
        //json_decode($data);
        $proprietes = propriete::where('category_id', $category_id)->get();
        return response()->json(["proprietes" => $proprietes,
                                 "category_id" => $category_id], 200);     
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $house = new house;
        $house->title = $request->title;
        $house->user_id = $request->user_id;
        $house->category_id = $request->category_id;
        $house->ville_id = $request->ville_id;
        $house->price = $request->price;
        $house->photo = $request->photo;
        $house->description = $request->description;

        $this->validate($request, [
        // check validtion for image or file
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);

        //$picture = $request->file('photo');
        $picture = $request->file('photo');
        $filename  = time() . '.' . $picture->getClientOriginalExtension();
        $path = public_path('img/houses/' . $filename);
        Image::make($picture->getRealPath())->resize(350, 200)->save($path);
        $house->photo = $filename;
        $house->save();
        
        return redirect('/houses/index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function show(House $house, Reservation $reservation, Comment $comments)
    {
        //$houses->posts()->where('idUser', Auth::user()->idUser)->get();
        /*return view('houses.index')->with('houses', $houses);*/
        $house = house::find($house->id);
        /*$reservation = DB::table('reservations')
            ->select('houses.*', 'reservations.*')
            ->leftJoin('houses', 'reservations.user_id', 'houses.user_id')
            ->where('reservations.house_id', '=', $house->id)
            ->where('reservations.user_id', '=', Auth::user()->id)
            ->where('reservations.reserved', '=', "1")
            ->get();
        $comments = comment::all();
        $sommesNote = 0;
        $i = 0;
        foreach($comments as $comment){
            $sommesNote+=$comment->note;
            $i++;
        }
        $moyenne = $sommesNote / $i;  */  
        return view('houses.show', compact('house', 'id'))->with('house', $house);/*->with('reservation', $reservation)->with('moyenne', $moyenne);*/
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function edit(House $house, Category $categories, Ville $villes)
    {
        $house = house::find($house->id);
        $categories = category::all();
        $villes = ville::all();
        return view('houses.edit', compact('house', 'id'))->with('categories', $categories)->with('villes', $villes);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, House $house)
    {
        $house = house::find($house->id);
        $house->title = $request->get('title');
        $house->category_id = $request->get('category_id');
        $house->ville_id = $request->get('ville_id');
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
        return redirect('/houses/index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function destroy(House $house)
    {
        $house = house::find($house->id);
        $house->delete();
        return redirect('houses/index');
        
    }

    public function mylocations($id) {

     $houseProfil = DB::table('users')
     ->select('users.*', 'houses.*')
     ->leftJoin('houses', 'houses.user_id','users.id')
     ->where('users.id', '=', $id)
     ->where('houses.id', '!=', NULL)
     ->get();
        return view('houses.mylocations', compact('houseProfil'))->with('data', Auth::user()->user);
    }

    public function note(House $house, Note $note) {
        $note = note::find($house->id);
        $house->title = $request->get('title');
        $house->idCategory = $request->get('idCategory');
        $house->price = $request->get('price');
    }
}
