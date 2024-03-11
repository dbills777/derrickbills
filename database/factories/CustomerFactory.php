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
        $accountType = Arr::random(['i', 'b']);
        $name = $accountType === 'i' ? fake()->firstName() : fake()->company();
        return [
            'account_type' => $accountType,
            'name' => fake()->name(),
            'date_of_birth' => fake()->date(),
            'email' => fake()->unique()->safeEmail(),
            'state' => fake('en_US')->stateAbbr(),
            'city' => fake('en_US')->city(),
            'street' => fake('en_US')->streetName(),
            'postal_code' => fake('en_US')->postcode(),
            'phone_number' => fake()->phoneNumber(),
        ];
    }
}
