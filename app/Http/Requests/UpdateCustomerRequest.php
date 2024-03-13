<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $method = $this->method();
        if ($method === 'PUT') {
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
        } else {
            return [
                'account_type' => Rule::in(['i', 'I', 'b', 'B']),
                'name' => ['sometimes', 'string', 'max:255'],
                'date_of_birth' => ['sometimes', 'date'],
                'email' => ['sometimes', 'email', 'max:255'],
                'phone_number' => ['sometimes', 'string', 'max:255'],
                'city' => ['sometimes', 'string', 'max:255'],
                'street' => ['sometimes', 'string', 'max:255'],
                'state' => ['sometimes', 'string', 'max:255'],
                'postal_code' => ['sometimes', 'string', 'max:255'],
            ];
        }
    }
    protected function prepareForValidation()
    {
        if ($this->accountType) {
            $this->merge([
                'account_type' => strtoupper($this->accountType),
            ]);
        }
        if ($this->dateOfBirth) {
            $this->merge([
                'date_of_birth' => ucwords($this->dateOfBirth),
            ]);
        }
        if ($this->phoneNumber) {
            $this->merge([
                'phone_number' => ucwords($this->phoneNumber),
            ]);
        }
        if ($this->postalCode) {
            $this->merge([
                'postal_code' => ucwords($this->postalCode),
            ]);
        }
    }
}
