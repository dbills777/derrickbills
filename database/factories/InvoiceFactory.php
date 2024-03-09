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
        $status = fake()->randomElement(['paid', 'billed', 'void']);
        return [
            'customer_id' => \App\Models\Customer::factory(),
            'status' => $status,
            'billed_date' => fake()->dateTimeThisDecade(),
            'paid_date' => fake()->dateTime(),
            'amount' => fake()->randomFloat(2, 100, 1000),
            // 'total' => fake()->randomFloat(2, 100, 1000),
        ];
    }
}
