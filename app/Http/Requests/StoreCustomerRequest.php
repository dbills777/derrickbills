<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'account_type' => Rule::in(['i', 'I', 'b', 'B']),
            'name' => ['required', 'string', 'max:255'],
            'date_of_birth' => ['required', 'date'],
            'email' => ['required', 'email', 'max:255'],
            'phone_number' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'street' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'postal_code' => ['required', 'string', 'max:255'],
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'account_type' => strtoupper($this->accountType),
            'date_of_birth' => ucwords($this->dateOfBirth),
            'postal_code' => ucwords($this->PostalCode),
            'phone_number' => ucwords($this->phoneNumber),
            'postal_code' => ucwords($this->postalCode),

        ]);
    }
}
