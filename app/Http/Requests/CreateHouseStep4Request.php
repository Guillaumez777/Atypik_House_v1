<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateHouseStep4Request extends FormRequest
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
            'photo' => 'image|mimes:jpg,png,jpeg|size:2048',
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
            'photo.required' => 'Veuillez mettre une photo de votre hebergement',
            'photo.image' => 'Veuillez mettre une image',
            'photo.size' => 'La taille maximum de la photo doit etre de 1mo'
        ];
    }
}
