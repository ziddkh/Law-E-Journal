<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\ServiceHeader;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index()
    {
        $services = Service::get();
        $serviceHeader = ServiceHeader::latest()->first();
        return response()->json([
            'services' => $services,
            'service_header' => $serviceHeader,
        ], 200);
    }

    public function show($name)
    {
        $service = Service::where('name', $name)->first();
        return response()->json($service, 200);
    }
}
