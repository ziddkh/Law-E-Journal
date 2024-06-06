<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\ClientReview;
use Illuminate\Http\Request;

class ClientReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $clientReviews = new ClientReview;

        if(!empty($request->name)) {
            $clientReviews = $clientReviews->where('name', 'LIKE', '%' . $request->name . '%');
        }

        $clientReviews = $clientReviews->orderBy('id', 'DESC')->paginate(10);

        return view('pages.client-reviews.index', [
            'clientReviews' => $clientReviews,
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
        return view('pages.client-reviews.create');
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
            $imagePath = $request->file('image_url')->store('clientReviews', 'public');
            $validated['image_url'] = $imagePath;
        }

        $clientReview = ClientReview::create($validated);

        return redirect()->route('client-reviews.show', [
            $clientReview->id
        ])->with('success_message', 'Client Review created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $clientReview = ClientReview::where('id', $id)->first();
        if(empty($clientReview)) {
            return redirect()->back()->with('error_message', 'ClientReview not found!');
        }

        return view('pages.client-reviews.show', [
            'clientReview' => $clientReview
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
    
        $clientReview = ClientReview::where('id', $id)->first();
        if (empty($clientReview)) {
            return redirect()->back()->with('error_message', 'ClientReview not found!');
        }
    
        if ($request->hasFile('image_url')) {
            // Delete the old image if it exists
            if ($clientReview->image_url) {
                \Storage::disk('public')->delete($clientReview->image_url);
            }
    
            // Store the new image
            $imagePath = $request->file('image_url')->store('clientReviews', 'public');
            $validated['image_url'] = $imagePath;
        }
    
        $clientReview->update($validated);
    
        return redirect()->route('client-reviews.show', [
            $clientReview->id
        ])->with('success_message', 'Client Review updated successfully!');
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $clientReview = ClientReview::where('id', $id)->first();
        if(empty($clientReview)) {
            return redirect()->back()->with('error_message', 'ClientReview not found!');
        }
        
        $clientReview->delete();
        return redirect()->route('client-reviews.index')
            ->with('success_message', 'Client Review deleted successfully.');;
    }
}
