<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePostRequest extends FormRequest
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
            'name' => 'required|regex:/^[a-zA-Z\s\-]+$/u|max:50', 
            'email' => 'required|max:50|email', 
            'content' => 'required|max:100',
            'agree' => 'accepted'
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
            'name.required' => 'Veuillez saisir votre nom complet',
            'name.max' => 'Votre nom ne doit pas dépasser 50 caractères',
            'name.regex' => 'Votre nom doit contenir que des lettres et non des chiffres ou caractères spéciaux',
            'email.required' => 'Veuillez saisir votre adresse mail',
            'email.email' => 'Veuillez mettre une adresse mail',
            'email.max' => 'Votre nom ne doit pas dépasser 50 caractères',
            'content.required' => 'Veuillez saisir votre message',
            'content.max' => 'Votre message ne doit pas dépasser 1000 caractères',
            'agree.accepted' => 'Vous devez accepter les conditions'
        ];
    }

    
}
