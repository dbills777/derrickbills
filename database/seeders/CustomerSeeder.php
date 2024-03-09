<?php

namespace Database\Seeders;

use App\Models\Customer;
use Database\Factories\CustomerFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CustomerFactory::maka
            ->count(10)
            ->hasInvoices(0)
            ->create();
        CustomerFactory::maka
            ->count(100)
            ->hasInvoices( 24)
            ->create();
    }
}
