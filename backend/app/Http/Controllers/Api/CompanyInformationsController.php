<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CompanyInformation;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompanyInformationsController extends Controller
{
    /**
     * Display the specified post.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request)
    {
        $companyInformation = CompanyInformation::orderBy('id', 'DESC')->first();

        if(empty($companyInformation)) {
            return response()->json([
                'message' => 'Company Information not found!'
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response()->json([
            'company_information' => $companyInformation
        ], JsonResponse::HTTP_OK);
    }
}
