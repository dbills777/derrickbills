<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Customer::factory()
            ->count(240)
            ->hasInvoices(31)
            ->create();
        Customer::factory()
            ->count(10)
            ->hasInvoices(0)
            ->create();
    }
}
