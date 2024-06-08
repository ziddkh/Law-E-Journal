<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $galleries = Gallery::search($request)
            ->orderBy('id', 'DESC')
            ->paginate(10);

        return view('pages.galleries.index', [
            'galleries' => $galleries,
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
        return view('pages.galleries.create');
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
            $imagePath = $request->file('image_url')->store('galleries', 'public');
            $validated['image_url'] = $imagePath;
        }

        $gallery = Gallery::create($validated);

        return redirect()->route('galleries.show', [
            'gallery' => $gallery
        ])->with('success_message', 'Gallery created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $gallery = Gallery::where('id', $id)->first();
        if(empty($gallery)) {
            return redirect()->back()->with('error_message', 'Gallery not found!');
        }

        return view('pages.galleries.show', [
            'gallery' => $gallery
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
    
        $gallery = Gallery::where('id', $id)->first();
        if (empty($gallery)) {
            return redirect()->back()->with('error_message', 'Gallery not found!');
        }
    
        if ($request->hasFile('image_url')) {
            // Delete the old image if it exists
            if ($gallery->image_url) {
                \Storage::disk('public')->delete($gallery->image_url);
            }
    
            // Store the new image
            $imagePath = $request->file('image_url')->store('galleries', 'public');
            $validated['image_url'] = $imagePath;
        }
    
        $gallery->update($validated);
    
        return redirect()->route('galleries.show', [
            'gallery' => $gallery
        ])->with('success_message', 'Gallery updated successfully!');
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $gallery = Gallery::where('id', $id)->first();
        if(empty($gallery)) {
            return redirect()->back()->with('error_message', 'Gallery not found!');
        }
        
        // Delete the old image if it exists
        if ($gallery->image_url) {
            \Storage::disk('public')->delete($gallery->image_url);
        }

        $gallery->delete();
        return redirect()->route('galleries.index')
            ->with('success_message', 'Gallery deleted successfully.');
    }
}
