<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\ServiceHeader;
use Illuminate\Http\Request;

class ServiceHeaderController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $serviceHeaders = ServiceHeader::orderBy('id', 'DESC')->get();

        return view('pages.service-header.index', [
            'serviceHeaders' => $serviceHeaders,
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
        $serviceHeader = ServiceHeader::where('id', $id)->first();
        if(empty($serviceHeader)) {
            return redirect()->back()->with('error_message', 'Service Header not found!');
        }

        return view('pages.service-header.show', [
            'serviceHeader' => $serviceHeader
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

        $serviceHeader = ServiceHeader::where('id', $id)->first();
        if (empty($serviceHeader)) {
            return redirect()->back()->with('error_message', 'Service Header not found!');
        }

        $serviceHeader->update($validated);

        return redirect()->route('service-header.show', [
            'service_header' => $serviceHeader
        ])->with('success_message', 'Service Header updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        abort(404);
    }
}
