<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreInvoiceRequest extends FormRequest
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
            'customer_id' => ['required', 'integer', 'exists:customers,id'],
            'status' => Rule::in(['paid', 'billed', 'void']),
            'amount' => 'required|numeric|between:0,999999.99',
            'billed_date' => ['required', 'date'],
            'paid_date' => ['required', 'string', 'max:255'],

        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'customer_id' => ucwords($this->customerId), // 'customer_id' => 'required|integer|exists:customers,id',
            'billed_date' => ucwords($this->billedDate),
            'paid_date' => ucwords($this->paidDate),
        ]);
    }
}
