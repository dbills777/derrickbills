<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class ByDateOfBirth
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
                $this->request->has('date_of_birth'),
                fn ($query) => $query->where('date_of_birth', 'REGEXP', $this->request->date_of_birth)
            );
    }
}
