<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class ByPhoneNumber
{
    public function __construct(protected Request $request)
    {
    }
    /**
     * Apply the filter to the given query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function handle(Builder $builder, \Closure $next)
    {
        return $next($builder)
            ->when(
                $this->request->has('phone'),
                fn ($query) => $query->where('phone_number', 'REGEXP', $this->request->phone)
            );
    }
}
