<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;

class ProfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $profiles = Profile::search($request)
            ->orderBy('id', 'DESC')
            ->paginate(10);

        return view('pages.profiles.index', [
            'profiles' => $profiles,
            'search_terms' => [
                'name' => $request->name,
                'position' => $request->position
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.profiles.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string',
            'description' => 'required|string',
            'image_url' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'email' => 'nullable',
            'phone' => 'nullable',
            'instagram' => 'nullable',
            'facebook' => 'nullable',
            'twitter' => 'nullable',
            'tik_tok' => 'nullable',
            'youtube' => 'nullable',
        ]);

        if ($request->hasFile('image_url')) {
            $imagePath = $request->file('image_url')->store('profiles', 'public');
            $validated['image_url'] = $imagePath;
        }

        $profile = Profile::create($validated);

        return redirect()->route('profiles.show', [
            $profile->id
        ])->with('success_message', 'Profile created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $profile = Profile::where('id', $id)->first();
        if(empty($profile)) {
            return redirect()->back()->with('error_message', 'Profile not found!');
        }

        return view('pages.profiles.show', [
            'profile' => $profile
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
            'position' => 'required|string',
            'description' => 'required|string',
            'image_url' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'email' => 'nullable',
            'phone' => 'nullable',
            'instagram' => 'nullable',
            'facebook' => 'nullable',
            'twitter' => 'nullable',
            'tik_tok' => 'nullable',
            'youtube' => 'nullable',
        ]);
    
        $profile = Profile::where('id', $id)->first();
        if (empty($profile)) {
            return redirect()->back()->with('error_message', 'Profile not found!');
        }
    
        if ($request->hasFile('image_url')) {
            // Delete the old image if it exists
            if ($profile->image_url) {
                \Storage::disk('public')->delete($profile->image_url);
            }
    
            // Store the new image
            $imagePath = $request->file('image_url')->store('profiles', 'public');
            $validated['image_url'] = $imagePath;
        }
    
        $profile->update($validated);
    
        return redirect()->route('profiles.show', [
            $profile->id
        ])->with('success_message', 'Profile updated successfully!');
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $profile = Profile::where('id', $id)->first();
        if(empty($profile)) {
            return redirect()->back()->with('error_message', 'Profile not found!');
        }

        // Delete the old image if it exists
        if ($profile->image_url) {
            \Storage::disk('public')->delete($profile->image_url);
        }
        
        $profile->delete();
        return redirect()->route('profiles.index')
            ->with('success_message', 'Profile deleted successfully.');;
    }
}
