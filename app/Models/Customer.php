<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = ['account_type', 'name', 'date_of_birth', 'email', 'phone_number', 'city', 'street', 'state', 'postal_code',];

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
