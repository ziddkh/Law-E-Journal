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
        $posts = $posts->published();

        $articlePosts = $posts->article()->orderBy('id', 'DESC')->take(9);
        $mediaPosts = $posts->media()->orderBy('id', 'DESC')->take(9);
        $newsPosts = $posts->news()->orderBy('id', 'DESC')->take(9);

        $takeRecommendedPosts = $request->filled('take') ? $request->take : 5;
        $recommendedPosts = Post::recommended()
            ->orderBy('id', 'DESC')
            ->take($takeRecommendedPosts)
            ->get();

        return response()->json([
            'article_posts' => $articlePosts,
            'media_posts' => $mediaPosts,
            'news_posts' => $newsPosts,
            'recommended_posts' => $recommendedPosts,
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

        $recommendedPosts = Post::recommended()
            ->orderBy('id', 'DESC')
            ->take(5)
            ->get();

        return response()->json([
            'post' => $post,
            'recommended_post' => $recommendedPosts
        ], JsonResponse::HTTP_OK);
    }

    /**
     * Filter and retrieve posts by types (articles, news, media) and recommended posts.
     *
     * This method retrieves a specified number of published posts for each type (articles, news, media),
     * and recommended posts, ordered by descending ID, and returns them in a JSON response.
     * If the 'take' parameter is not specified in the request, it defaults to 6.
     *
     * @param \Illuminate\Http\Request $request The incoming HTTP request instance.
     * @return \Illuminate\Http\JsonResponse A JSON response containing the filtered posts.
     */
    public function filteredPostsByTypes(Request $request)
    {
        $take = $request->take ?? 6;
        $articles = Post::published()
            ->article()
            ->orderBy('id', 'DESC')
            ->take($take);

        $news = Post::published()
            ->news()
            ->orderBy('id', 'DESC')
            ->take($take);

        $media = Post::published()
            ->media()
            ->orderBy('id', 'DESC')
            ->take($take);

        $recommendedPosts = Post::recommended()
            ->orderBy('id', 'DESC')
            ->take($take)
            ->get();

        return response()->json([
            'articles' => $articles,
            'news' => $news,
            'media' => $media,
            'recommended_posts' => $recommendedPosts,
        ], JsonResponse::HTTP_OK);
    }
}
