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
            'name' => 'required|max:50|regex:/^[a-zA-Z]+$/u', 
            'email' => 'required|max:50', 
            'content' => 'required|max:100'
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
            'email.required' => 'Veuillez saisir votre email',
            'email.max' => 'Votre nom ne doit pas dépasser 50 caractères',
            'content.required' => 'Veuillez saisir votre message',
            'content.max' => 'Votre message ne doit pas dépasser 1000 caractères',
        ];
    }

    
}
