<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
 */
class InvoiceFactory extends Factory
{
    protected $model = \App\Models\Invoice::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = $this->fake()->randomElement(['paid', 'billed', 'void']);
        return [
            'customer_id' => \App\Models\Customer::factory(),
            'status' => $status,
            'billed_date' => $this->fake()->dateTimeThisDecade(),
            'paid_date' => $this->fake()->dateTime(),
            'amount' => $this->fake()->randomFloat(2, 100, 1000),
            // 'total' => $this->fake()->randomFloat(2, 100, 1000),
        ];
    }
}
