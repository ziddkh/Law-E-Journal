<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\ConsultationRequest;
use App\Models\Post;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     */
    public function index()
    {
        // analytics
        $totalPublishedPosts = Post::select('id')->published()->count();
        $totalArchivedPosts = Post::select('id')->archived()->count();
        $totalConsultationRequests = ConsultationRequest::select('id')->count();

        // get last 7 days Consultation Request Submission
        $todayDate = Carbon::now()->format('Y-m-d') . ' 23:59:59';
        $sevenDaysBeforeDate = Carbon::now()->subDays(7)->format('Y-m-d') . ' 00:00:00';

        $consultationRequests = ConsultationRequest::whereBetween('created_at', [
                $sevenDaysBeforeDate,
                $todayDate
            ])->orderBy('id', 'DESC')
            ->take(10)
            ->get();

        $dataToReturn = (object) [
            'total_published_posts' => $totalPublishedPosts,
            'total_archived_posts' => $totalArchivedPosts,
            'total_consultation_requests' => $totalConsultationRequests,
            'consultation_requests' => $consultationRequests
        ];

        return view('pages.home', [
            'data' => $dataToReturn
        ]);
    }
}
