<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProfilesController extends Controller
{
    /**
     * Display a listing of profiles grouped by their position.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $positions = ['Lawyer', 'Advisor', 'Founder', 'Partner'];
        $profiles = [];

        foreach ($positions as $position) {
            $profiles[strtolower($position) . 's'] = Profile::where('position', $position)->get();
        }

        return response()->json($profiles, JsonResponse::HTTP_OK);
    }

    /**
     * Display the specified profile by ID.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $profile = Profile::where('id', $id)->first();

        if (empty($profile)) {
            return response()->json([
                'message' => 'Profile not found!'
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response()->json([
            'profile' => $profile
        ], JsonResponse::HTTP_OK);
    }
}
