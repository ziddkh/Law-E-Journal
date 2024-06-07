<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $settings = new Setting();

        if(!empty($request->key)) {
            $settings = $settings->where('key', 'LIKE', '%' . $request->key . '%');
        }

        if(!empty($request->value)) {
            $settings = $settings->where('value', 'LIKE', '%' . $request->value . '%');
        }

        $settings = $settings->orderBy('id', 'DESC')->paginate(10);

        return view('pages.settings.index', [
            'settings' => $settings,
            'search_terms' => [
                'key' => $request->key,
                'value' => $request->value
            ]
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
        $setting = Setting::where('id', $id)->first();
        if(empty($setting)) {
            return redirect()->back()->with('error_message', 'Setting not found!');
        }

        return view('pages.settings.show', [
            'setting' => $setting
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
        if ($request->key == 'Company Logo') {
            $validated = $request->validate([
                'key' => 'required|string|max:255',
                'value' => 'nullable|file|mimes:jpeg,png,jpg|max:2048'
            ]);
        } else {
            $validated = $request->validate([
                'key' => 'required|string|max:255',
                'value' => 'nullable|string|max:255',
            ]);
        }
    
        $setting = Setting::where('id', $id)->first();
        if (empty($setting)) {
            return redirect()->back()->with('error_message', 'Setting not found!');
        }

        if ($request->hasFile('value')) {
            // Delete the old image if it exists
            if ($setting->value) {
                \Storage::disk('public')->delete($setting->value);
            }
    
            // Store the new image
            $imagePath = $request->file('value')->store('settings/company-logo', 'public');
            $validated['value'] = $imagePath;
        }
    
        $setting->update($validated);
    
        return redirect()->route('settings.show', [
            'setting' => $setting
        ])->with('success_message', 'Setting updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        abort(404);
    }
}
