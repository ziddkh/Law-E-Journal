<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\ConsultationRequest;
use Illuminate\Http\Request;

class ConsultationRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $consultationRequests = new ConsultationRequest;

        if(!empty($request->name)) {
            $consultationRequests = $consultationRequests->where('name', 'LIKE', '%' . $request->name . '%');
        }

        if(!empty($request->email)) {
            $consultationRequests = $consultationRequests->where('email', 'LIKE', '%' . $request->email . '%');
        }

        $consultationRequests = $consultationRequests->orderBy('id', 'DESC')->paginate(10);

        return view('pages.consultation-requests.index', [
            'consultation_requests' => $consultationRequests,
            'search_terms' => [
                'name' => $request->name,
                'email' => $request->email
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
        $consultationRequest = ConsultationRequest::where('id', $id)->first();
        if(empty($consultationRequest)) {
            return redirect()->back()->with('error_message', 'Request not found!');
        }

        return view('pages.consultation-requests.show', [
            'consultation_request' => $consultationRequest
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
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        abort(404);
    }
}
