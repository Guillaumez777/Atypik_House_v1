<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditHouseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:50|regex:/^[\pL\s\-]+$/u', 
            'ville' => 'required|max:100|regex:/^[a-zA-Z]+$/u',
            'price' => 'required|max:100000|numeric',
            'adresse' => 'required|max:50',
            'photo' => 'image|mimes:jpg,png,jpeg,gif,svg|max:20000',
            'description' => 'required|max:1000',
            'propriete' => 'required|max:500'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title.required' => 'Veuillez saisir votre titre',
            'title.max' => 'Votre titre ne doit pas dépasser 50 caractères',
            'title.regex' => 'Votre titre doit contenir que des lettres et non des chiffres ou caractères spéciaux',
            'ville.required' => 'Veuillez saisir votre ville',
            'ville.max' => 'Votre ville ne doit pas dépasser 50 caractères',
            //'ville.regex' => 'Votre ville doit contenir que des lettres et non des chiffres ou caractères spéciaux',
            'adresse.required' => 'Veuillez saisir votre adresse',
            'adresse.max' => 'Votre adresse ne doit pas dépasser 50 caractères',
            'adresse.regex' => 'Votre adresse ne doit contenir des caractères spéciaux',
            'price.required' => 'Veuillez saisir le prix par nuit',
            'price.numeric' => 'Veuillez saisir uniquement des chiffres',
            'price.max' => 'Vous ne pouvez pas mettre un montant au delà de 100000€',
            'photo.required' => 'Veuillez mettre une photo de votre hebergement',
            'photo.image' => 'Veuillez mettre une image',
            'description.required' => 'Veuillez detailler votre annonce',
            'description.max' => 'La description de votre annonce ne doit pas dépasser 1000 caractères',
            'propriete.required' => 'Veuillez mettre une valeur ca doit être un chiffre',
        ];
    }
}
