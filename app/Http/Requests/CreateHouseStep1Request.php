<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class CreateHouseStep1Request extends FormRequest
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
            'pays' => 'required|regex:/^[a-zA-Z]+$/u|max:30',
            'ville' => 'required|regex:/^[a-zA-Z]+$/u|max:30',
            'adresse' => 'required|regex:/^[a-zA-Z0-9\s]+$/u|max:30'
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
            'pays.required' => 'Veuillez saisir un pays',
            'pays.max'  => 'Votre pays ne doit pas dépasser 30 caractères',
            'pays.regex'  => 'Votre pays doit contenir que des lettres et non des caractères spéciaux',
            'ville.required' => 'Veuillez saisir une ville',
            'ville.max'  => 'Votre ville ne doit pas dépasser 30 caractères',
            'ville.regex'  => 'Votre ville doit contenir que des lettres et non des caractères spéciaux',
            'adresse.required' => 'Veuillez saisir une adresse',
            'adresse.max'  => 'Votre adresse ne doit pas dépasser 30 caractères',
            'adresse.regex'  => 'Votre adresse ne doit pas contenir des caractères spéciaux'
        ];
    }
}
