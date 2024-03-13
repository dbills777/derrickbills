<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class BulkStoreInvoiceRequest extends FormRequest
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
        // note on alt data structure
        // data: [
        //     {
        //         "customerId": 1,
        //         "status": "paid",
        //         "amount": 100,
        //         "billedDate": "2021-01-01 00:00:00",
        //         "paidDate": "2021-01-01 00:00:00"
        //     }
        // ]
        // return ['data.*.customrID']


        return [
            '*.customer_id' => ['required', 'integer', 'exists:customers,id'],
            '*.status' => ['required', Rule::in(['paid', 'billed', 'void'])],
            '*.amount' => ['required', 'numeric'],
            '*.billed_date' => ['required',  'nullable'],
            '*.paid_date' => ['required', 'nullable'],
        ];
    }
    protected function prepareForValidation()
    {
        $data = [];
        foreach ($this->toArray() as $object) {
            $object['customer_id'] = $object['customer_id'] ?? null;
            $object['billed_date'] = $object['billed_date'] ?? null;
            $object['paid_date'] = $object['paid_date'] ?? null;
            $data[] = $object;
        }
        $this->merge($data);
    }
}
