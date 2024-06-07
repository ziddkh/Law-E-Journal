<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    /**
     * Display a listing of various resources.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $settings = Setting::search($request)
            ->orderBy('id', 'DESC')
            ->get();

        return response()->json([
            'settings' => $settings
        ], JsonResponse::HTTP_OK);
    }
}
