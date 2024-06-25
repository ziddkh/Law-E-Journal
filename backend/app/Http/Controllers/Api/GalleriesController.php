<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class GalleriesController extends Controller
{
    /**
     * Display a listing of various resources.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $galleries = Gallery::search($request)->orderBy('id', 'DESC')->paginate(10);

        $takeRecommendedGalleries = $request->filled('take') ? $request->take : 5;
        $recommendedGalleries = Gallery::recommended()
            ->orderBy('id', 'DESC')
            ->take($takeRecommendedGalleries)
            ->get();

        return response()->json([
            'galleries' => $galleries,
            'recommended_galleries' => $recommendedGalleries
        ], JsonResponse::HTTP_OK);
    }
}
