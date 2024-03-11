<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'invoiceId' => $this->id,
            'status' => $this->status,
            'billedDate' => $this->billed_date,
            'paidDate' => $this->paid_date,
            'total' => $this->amount,
            'balance' => $this->balance,
            'notes' => $this->notes,
            'items' => $this->items,
            'customerId' => $this->customer_id,
            'customer' => $this->whenLoaded('customer'),
        ];
    }
}
