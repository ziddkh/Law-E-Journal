<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait Searchable
{
    /**
     * Get the searchable columns for the model.
     *
     * @return array
     */
    abstract public function searchableColumns(): array;

    /**
     * Scope a query to search for specific columns based on request input.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearch($query, Request $request): Builder
    {
        $query = $query->where(function ($query) use ($request) {
            foreach ($this->searchableColumns() as $column => $operator) {
                if ($request->filled('search')) {
                    $query = $this->applyGlobalSearchCondition($query, $column, $operator, trim($request->search));
                }

                if ($request->filled($column)) {
                    $query = $this->applySpecificSearchCondition($query, $column, $operator, trim($request->{$column}));
                }
            }
        });

        return $query;
    }

    /**
     * Apply global search condition to the query.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $column
     * @param string $operator
     * @param mixed $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function applyGlobalSearchCondition($query, $column, $operator, $value): Builder
    {
        if (strtolower($operator) === 'like') {
            return $query->orWhere($column, $operator, "%$value%");
        } else {
            return $query->orWhere($column, $operator, $value);
        }
    }

    /**
     * Apply specific search condition to the query.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $column
     * @param string $operator
     * @param mixed $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function applySpecificSearchCondition($query, $column, $operator, $value): Builder
    {
        if (strtolower($operator) === 'like') {
            return $query->where($column, $operator, "%$value%");
        } else {
            return $query->where($column, $operator, $value);
        }
    }
}
