<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Customer;
use Illuminate\Support\Facades\Pipeline;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerSearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $pipelines = [
            \App\Filters\V1\ByName::class,
            \App\Filters\V1\ByAccountType::class,
            \App\Filters\V1\ByEmail::class,
            \App\Filters\V1\ByDateOfBirth::class,
            


        ];
        return Pipeline::send(Customer::query())
            ->through($pipelines)
            ->thenReturn()
            ->get();
    }
}
