<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     * Format the data to be returned in the response in JSON format.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'accountType' => $this->account_type,
            'name' => $this->name,
            'dateOfBirth' => $this->date_of_birth,
            'email' => $this->email,
            'phoneNumber' => $this->phone_number,
            'state' => $this->state,
            'city' => $this->city,
            'street' => $this->street,
            'postalCode' => $this->postal_code,
            'invoiceCount' => $this->invoices->count(),
            'invoices' => $this->invoices,
            'invoices' => $this->whenLoaded('invoices')
        ];
    }
}
