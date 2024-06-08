<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\CompanyInformation;
use Illuminate\Http\Request;

class CompanyInformationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $companyInformations = CompanyInformation::orderBy('id', 'DESC')->get();

        return view('pages.company-informations.index', [
            'companyInformations' => $companyInformations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        abort(404);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $companyInformation = CompanyInformation::where('id', $id)->first();
        if(empty($companyInformation)) {
            return redirect()->back()->with('error_message', 'Company Information not found!');
        }

        return view('pages.company-informations.show', [
            'companyInformation' => $companyInformation
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $companyInformation = CompanyInformation::where('id', $id)->first();
        if (empty($companyInformation)) {
            return redirect()->back()->with('error_message', 'Company Information not found!');
        }

        $companyInformation->update($validated);
    
        return redirect()->route('company-informations.show', [
            'company_information' => $companyInformation
        ])->with('success_message', 'Company Information updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        abort(404);
    }
}
