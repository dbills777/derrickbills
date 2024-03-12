<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class ByCity
{
    /**
     * Create a new ByCity instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function __construct(protected Request $request)
    {
    }
    
    /**
     * Apply the filter to the given query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Closure  $next
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function handle(Builder $builder, \Closure $next)
    {
        return $next($builder)
            ->when(
                $this->request->has('city'),
                fn ($query) => $query->where('city', 'REGEXP', $this->request->city)
            );
    }
}
