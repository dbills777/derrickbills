<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    protected $model = \App\Models\Customer::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $accountType = Arr::random(['individual', 'business']);
        $name = $accountType === 'individual' ? fake()->firstName() : fake()->company();
        return [
            'account_type' => $accountType,
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'address' => fake()->streetAddress(),
            'city' => fake()->city(),
            'state' => fake()->state(),
            'postal_code' => fake()->postcode(),
            'phone_number' => fake()->phoneNumber(),
            'country' => fake()->country(),
        ];
    }
}
