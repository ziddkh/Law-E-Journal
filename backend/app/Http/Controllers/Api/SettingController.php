<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function __construct(
        protected Setting $model
    ) {}

    public function index(Request $request): JsonResponse
    {
        $settings = $this->model->select('key', 'value')->latest('id')->get();
        return response()->json([
            'settings' => $settings
        ], JsonResponse::HTTP_OK);
    }
}
