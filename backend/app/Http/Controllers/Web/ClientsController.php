<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $clients = Client::search($request)
            ->orderBy('id', 'DESC')
            ->paginate(10);

        return view('pages.clients.index', [
            'clients' => $clients,
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
        return view('pages.clients.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'image_url' => 'nullable|image|mimes:webp,jpeg,png,jpg,svg|max:2048',
            'url' => 'nullable'
        ]);

        // Prepend https:// if not already present
        $validated['url'] = str_replace('https://', '', $request->url);

        if ($request->hasFile('image_url')) {
            $imagePath = $request->file('image_url')->store('clients', 'public');
            $validated['image_url'] = $imagePath;
        }

        $client = Client::create($validated);

        return redirect()->route('clients.show', [
            'client' => $client
        ])->with('success_message', 'User created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $client = Client::where('id', $id)->first();
        if(empty($client)) {
            return redirect()->back()->with('error_message', 'Client not found!');
        }

        return view('pages.clients.show', [
            'client' => $client
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
            'name' => 'required|string|max:100',
            'image_url' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'url' => 'nullable'
        ]);

        // Prepend https:// if not already present
        $validated['url'] = str_replace('https://', '', $request->url);

        $client = Client::where('id', $id)->first();
        if (empty($client)) {
            return redirect()->back()->with('error_message', 'Client not found!');
        }

        if ($request->hasFile('image_url')) {
            // Delete the old image if it exists
            if ($client->image_url) {
                \Storage::disk('public')->delete($client->image_url);
            }

            // Store the new image
            $imagePath = $request->file('image_url')->store('clients', 'public');
            $validated['image_url'] = $imagePath;
        }

        $client->update($validated);

        return redirect()->route('clients.show', [
            'client' => $client
        ])->with('success_message', 'Client updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $client = Client::where('id', $id)->first();
        if(empty($client)) {
            return redirect()->back()->with('error_message', 'Client not found!');
        }

        // Delete the old image if it exists
        if ($client->image_url) {
            \Storage::disk('public')->delete($client->image_url);
        }

        $client->delete();
        return redirect()->route('clients.index')
            ->with('success_message', 'Service deleted successfully.');
    }
}
