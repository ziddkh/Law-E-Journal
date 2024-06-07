<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $banners = new Banner;

        if(!empty($request->title)) {
            $banners = $banners->where('title', 'LIKE', '%' . $request->title . '%');
        }

        $banners = $banners->orderBy('id', 'DESC')->paginate(10);

        return view('pages.banners.index', [
            'banners' => $banners,
            'search_terms' => [
                'title' => $request->title
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.banners.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'cta_button_text' => 'required|string|max:255',
            'cta_button_url' => 'required|string|max:255',
            'image_url' => 'nullable|image|mimes:jpeg,png,jpg|max:16384'
        ]);

        if ($request->hasFile('image_url')) {
            $imagePath = $request->file('image_url')->store('banners', 'public');
            $validated['image_url'] = $imagePath;
        }

        $banner = Banner::create($validated);

        return redirect()->route('banners.show', [
            'banner' => $banner
        ])->with('success_message', 'Banner created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $banner = Banner::where('id', $id)->first();
        if(empty($banner)) {
            return redirect()->back()->with('error_message', 'Banner not found!');
        }

        return view('pages.banners.show', [
            'banner' => $banner
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
            'description' => 'nullable|string',
            'cta_button_text' => 'required|string|max:255',
            'cta_button_url' => 'required|string|max:255',
            'image_url' => 'nullable|image|mimes:jpeg,png,jpg|max:16384'
        ]);
    
        $banner = Banner::where('id', $id)->first();
        if (empty($banner)) {
            return redirect()->back()->with('error_message', 'Banner not found!');
        }
    
        if ($request->hasFile('image_url')) {
            // Delete the old image if it exists
            if ($banner->image_url) {
                \Storage::disk('public')->delete($banner->image_url);
            }
    
            // Store the new image
            $imagePath = $request->file('image_url')->store('banners', 'public');
            $validated['image_url'] = $imagePath;
        }
    
        $banner->update($validated);
    
        return redirect()->route('banners.show', [
            'banner' => $banner
        ])->with('success_message', 'Banner updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $banner = Banner::where('id', $id)->first();
        if(empty($banner)) {
            return redirect()->back()->with('error_message', 'Banner not found!');
        }

        // Delete the old image if it exists
        if ($banner->image_url) {
            \Storage::disk('public')->delete($banner->image_url);
        }
        
        $banner->delete();
        return redirect()->route('banners.index')
            ->with('success_message', 'Banner deleted successfully.');
    }
}
