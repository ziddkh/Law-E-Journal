<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index()
    {
        $services = Service::get();
        return response()->json($services, 200);
    }

    public function show($name)
    {
        $service = Service::where('name', $name)->first();
        return response()->json($service, 200);
    }
}
