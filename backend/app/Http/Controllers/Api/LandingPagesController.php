<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\ClientReview;
use App\Models\CompanyInformation;
use App\Models\Client;
use App\Models\Post;
use App\Models\Profile;
use App\Models\Service;
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
            ->published()
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

        // Get all clients ordered by latest
        $clients = Client::orderBy('id', 'DESC')->get();

        // Get latest 10 client reviews
        $clientReviews = ClientReview::orderBy('id', 'DESC')
            ->take(6)
            ->get();

        $recommendedPosts = Post::recommended()
            ->orderBy('id', 'DESC')
            ->take(7)
            ->get();

        $companyInformation = CompanyInformation::orderBy('id', 'DESC')->first();

        // Return the collected data as JSON response
        return response()->json([
            'posts' => $posts,
            'banners' => $banners,
            'profiles' => $profiles,
            'services' => $services,
            'clients' => $clients,
            'client_reviews' => $clientReviews,
            'recommended_posts' => $recommendedPosts,
            'company_information' => $companyInformation ?? NULL
        ], JsonResponse::HTTP_OK);
    }

}
