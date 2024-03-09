<?php

namespace Database\Factories;

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
        $accountType =  $this->fake()->randomElement(['individual', 'business']);
        $name = $accountType === 'individual' ? $this->fake()->firstName() : $this->fake()->company();
        return [
            'account_type' => $accountType,
            'name' => $name,
            'email' => $this->fake()->unique()->safeEmail(),
            'address' => $this->fake()->streetAddress(),
            'city' => $this->fake()->city(),
            'state' => $this->fake()->state(),
            'postal_code' => $this->fake()->postcode(),
            'phone_number' => $this->fake()->phoneNumber(),
            'country' => $this->fake()->country(),
        ];
    }
}
