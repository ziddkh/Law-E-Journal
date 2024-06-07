<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\ClientReview;
use App\Models\Partner;
use App\Models\Post;
use App\Models\Profile;
use App\Models\Service;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LandingPagesController extends Controller
{
    /**
     * Display a listing of various resources.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        // Get latest 5 posts
        $posts = Post::search($request)
            ->orderBy('id', 'DESC')
            ->take(5)
            ->get();

        // Get all banners ordered by latest
        $banners = Banner::orderBy('id', 'DESC')->get();

        // Get latest 10 profiles
        $profiles = Profile::orderBy('id', 'DESC')
            ->take(10)
            ->get();

        // Get all services ordered by latest
        $services = Service::orderBy('id', 'DESC')->get();

        // Get all settings ordered by latest
        $settings = Setting::orderBy('id', 'DESC')->get();

        // Get all partners ordered by latest
        $partners = Partner::orderBy('id', 'DESC')->get();

        // Get latest 10 client reviews
        $clientReviews = ClientReview::orderBy('id', 'DESC')
            ->take(10)
            ->get();

        // Return the collected data as JSON response
        return response()->json([
            'data' => [
                'posts' => $posts,
                'banners' => $banners,
                'profiles' => $profiles,
                'services' => $services,
                'settings' => $settings,
                'partners' => $partners,
                'client_reviews' => $clientReviews
            ]
        ], JsonResponse::HTTP_OK);
    }

}
