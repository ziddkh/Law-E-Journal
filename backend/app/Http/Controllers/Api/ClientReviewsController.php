<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ClientReview;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClientReviewsController extends Controller
{
    /**
     * Display a listing of various resources.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $clientReviews = ClientReview::orderBy('id', 'DESC')->get();

        return response()->json([
            'client_reviews' => $clientReviews
        ], JsonResponse::HTTP_OK);
    }
}
