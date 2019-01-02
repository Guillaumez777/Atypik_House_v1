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
            'ville' => 'required|regex:/^[a-zA-Z]+$/u|max:30',
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
            'ville.required' => 'Veuillez saisir une ville',
            'ville.max'  => 'Votre ville ne doit pas dépasser 30 caractères',
            'ville.regex'  => 'Votre ville doit contenir que des lettres et non des caractères spéciaux'
        ];
    }
}