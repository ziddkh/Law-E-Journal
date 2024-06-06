<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $services = new Service;

        if(!empty($request->name)) {
            $services = $services->where('name', 'LIKE', '%' . $request->name . '%');
        }

        $services = $services->orderBy('id', 'DESC')->paginate(10);

        return view('pages.services.index', [
            'services' => $services,
            'search_terms' => [
                'name' => $request->name
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.services.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_url' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        if ($request->hasFile('image_url')) {
            $imagePath = $request->file('image_url')->store('services', 'public');
            $validated['image_url'] = $imagePath;
        }

        $service = Service::create($validated);

        return redirect()->route('services.show', [
            'service' => $service
        ])->with('success_message', 'Service created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $service = Service::where('id', $id)->first();
        if(empty($service)) {
            return redirect()->back()->with('error_message', 'Service not found!');
        }

        return view('pages.services.show', [
            'service' => $service
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
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_url' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
        ]);
    
        $service = Service::where('id', $id)->first();
        if (empty($service)) {
            return redirect()->back()->with('error_message', 'Service not found!');
        }
    
        if ($request->hasFile('image_url')) {
            // Delete the old image if it exists
            if ($service->image_url) {
                \Storage::disk('public')->delete($service->image_url);
            }
    
            // Store the new image
            $imagePath = $request->file('image_url')->store('services', 'public');
            $validated['image_url'] = $imagePath;
        }
    
        $service->update($validated);
    
        return redirect()->route('services.show', [
            'service' => $service
        ])->with('success_message', 'Service updated successfully!');
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $service = Service::where('id', $id)->first();
        if(empty($service)) {
            return redirect()->back()->with('error_message', 'Service not found!');
        }
        
        $service->delete();
        return redirect()->route('services.index');
    }
}
