<?php

namespace App\Http\Controllers;

use App\House;
use App\Ville;
use App\Category;
use App\Comment;
use App\Reservation;
use App\Propriete;
use App\Valuecatpropriete;
use App\User;
use App\Message;
use Illuminate\Http\Request;
use App\Http\Requests\CreateHouseStep1Request;
use App\Http\Requests\CreateHouseStep2Request;
use App\Http\Requests\CreateHouseStep3Request;
use App\Http\Requests\CreateHouseStep4Request;
use Illuminate\Http\Response;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

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
        $categories = category::all();
        $houses = house::with('valuecatproprietes', 'proprietes', 'category')->where('statut', 'Validé')->orderBy('id', 'desc')->get();
        return view('houses.index')->with('houses', $houses)
                                   ->with('categories', $categories);
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

        return view('houses.create', [
            'villes'=> $villes,
            'categories' => $categories,
        ]);
    }

    public function create_step1(Request $request) {     
        return view('houses.create_step1');
    }

    public function postcreate_step1(CreateHouseStep1Request $request) {

        $housePays = session('housePays', $request->pays);
        $request->session()->push('housePays', $request->pays);

        $houseVille = session('houseVille', $request->ville);
        $request->session()->push('houseVille', $request->ville);

        $houseAdresse = session('houseAdresse', $request->adresse);
        $request->session()->push('houseAdresse', $request->adresse);

        $houseUser = session('houseUser', $request->user_id);
        $request->session()->push('houseUser', $request->user_id);

        return redirect('/house/create_step2');
    }

    public function create_step2(Category $categories, Request $request) {
        $categories = category::where('statut','=', 1)->get();
        $request->session()->forget('houseProprietes');
        $request->session()->forget('houseProprietesId');

        $housePays = $request->session()->get('housePays');
        $houseVille = $request->session()->get('houseVille');
        $houseAdresse = $request->session()->get('houseAdresse');
        $ville = $request->old('ville');
        
        return view('houses.create_step2', [
            'categories' => $categories,
            'housePays' => $housePays,
            'houseVille' => $houseVille,
            'houseAdresse' => $houseAdresse
        ]);
    }

    public function postcreate_step2(CreateHouseStep2Request $request) {
        $ville = $request->old('ville');
        $categories = category::where('statut', '=', 1)->get();
        
        $proprietes = $request->input('propriete');
        $proprietes_id = $request->input('propriete_id');

        $housePropriete = session('houseProprietes', $proprietes);
        $houseProprieteId = session('houseProprietesId', $proprietes_id);

        if ($proprietes == null) {

        } else {
            foreach ($proprietes as $valuePropriete){
                $request->session()->push('houseProprietes', $valuePropriete);
            }
            foreach ($proprietes_id as $keyId => $id){
                $request->session()->push('houseProprietesId', $id);
            }
        }

        $housePays = $request->session()->get('housePays');
        $houseVille = $request->session()->get('houseVille');
        $houseAdresse = $request->session()->get('houseAdresse');

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

    public function postcreate_step3(CreateHouseStep3Request $request) {
        $housePrix = session('housePrix', $request->price);
        $request->session()->push('housePrix', $request->price);
        
        $housePays = $request->session()->get('housePays');
        $houseVille = $request->session()->get('houseVille');
        $houseAdresse = $request->session()->get('houseAdresse');
        $houseTitle = $request->session()->get('houseTitle');
        $houseDescription = $request->session()->get('houseDescription');
        $housePrix = $request->session()->get('housePrix');
        return redirect('/house/create_step4');
    }
    

    public function create_step4(Request $request) {
        return view('houses.create_step4');
    }

    public function postcreate_step4(CreateHouseStep4Request $request) {
        $houseTitle = $request->session()->get('houseTitle');
        $houseUser = $request->session()->get('houseUser');
        $houseCategory = $request->session()->get('houseCategory');
        $housePays = $request->session()->get('housePays');
        $houseVille = $request->session()->get('houseVille');
        $houseAdresse = $request->session()->get('houseAdresse');
        $houseDescription = $request->session()->get('houseDescription');
        $housePrix = $request->session()->get('housePrix');
        
        $housePhoto = session('housePhoto', $request->photo);
        $request->session()->push('housePhoto', $request->photo);
        
        $house = new house;
        $house->title = last($houseTitle);
        $house->user_id = last($houseUser);
        $house->category_id = last($houseCategory);
        $house->pays = last($housePays);
        $house->ville = last($houseVille);
        $house->adresse = last($houseAdresse);
        $house->description = last($houseDescription);
        $house->price = last($housePrix);
        $house->statut = "En attente de validation";

        $housePropriete = $request->session()->get('houseProprietes');
        $houseProprieteId = $request->session()->get('houseProprietesId');  
        $houseProprieteLabel = $request->session()->get('houseProprieteLabel');      

        $this->validate($request, [
            'photo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:20000',
        ]);

        $picture = $request->file('photo');
        $filename  = time() . '.' . $picture->getClientOriginalExtension();
        $path = public_path('img/houses/' . $filename);
        Image::make($picture->getRealPath())->resize(450, 300)->save($path);
        $house->photo = $filename;
        $house->save();
        if($housePropriete == null){

        } else {
            $i = 0;
            foreach($housePropriete as $proprietes){
                $valuecatProprietesHouse = new valuecatPropriete;
                $valuecatProprietesHouse->value = $proprietes;
                $valuecatProprietesHouse->category_id = $house->category_id;
                $valuecatProprietesHouse->propriete_id = intval($houseProprieteId[$i]);
                $valuecatProprietesHouse->house_id = $house->id;
                
                $valuecatProprietesHouse->save();
                $i++;  
            }
        }
        $message = new message;
        $message->content = "Vous avez bien créé l'annonce ".$house->title.", notre équipe va vérifier le contenu et vous enverra un message, une fois votre annonce validée par notre équipe, elle sera consultable sur le site dans nos hébergements";
        $message->user_id = $house->user_id;
        $message->admin_id = Auth::user()->id;
        $message->save();
        return redirect('/house/confirmation_create_house')->with('success', "Votre annonce a bien été créé, vous avez reçu un message");
    }

    public function confirmation_create_house(){
        return view('houses.confirmation_create_house');
    }

    public function json_propriete($id){
        $category = category::find($id);
        $proprietes = propriete::where('category_id', $category->id)->get();

        return response()->json(["proprietes" => $proprietes,
                                 "category_id" => $category->id], 200); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function show(House $house, Reservation $reservation)
    {
        $house = house::find($house->id);
        return view('houses.show', compact('house', 'id'))->with('house', $house);
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
