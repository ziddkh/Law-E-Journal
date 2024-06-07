<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Display a listing of various resources.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $posts = Post::search($request);
        if(!empty($request->tags)) {
            $posts = $posts->whereHas('tags', function($query, $request) {
                $query->whereIn('tag', $request->tags);
            });
        }
        $posts = $posts->published()
            ->orderBy('id', 'DESC')
            ->paginate(10);

        return response()->json([
            'posts' => $posts
        ], JsonResponse::HTTP_OK);
    }

    /**
     * Display the specified post.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request)
    {
        $post = Post::search($request)
            ->published()
            ->first();

        if(empty($post)) {
            return response()->json([
                'message' => 'Post not found!'
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response()->json([
            'post' => $post
        ], JsonResponse::HTTP_OK);
    }
}
