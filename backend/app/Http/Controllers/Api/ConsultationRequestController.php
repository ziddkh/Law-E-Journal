<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ConsultationRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ConsultationRequestController extends Controller
{
    /**
     * Handle the submission of the form.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function submit(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone_number' => 'required|string|max:20',
            'message' => 'required|string'
        ]);

        // Return validation errors if validation fails
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        try {
            ConsultationRequest::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'phone_number' => $request->input('phone_number'),
                'message' => $request->input('message')
            ]);

            // Return a success response
            return response()->json([
                'message' => 'Consultation request submitted successfully!'
            ], JsonResponse::HTTP_OK);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while submitting your request. Please try again later.'
            ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
