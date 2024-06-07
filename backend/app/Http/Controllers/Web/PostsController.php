<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostTag;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if(!empty($request->start_date) && !empty($request->end_date)) {
            if($request->start_date > $request->end_date) {
                return redirect()->back()->with('error_message', 'End Date cannot be less than Start Date');
            }
        }

        $posts = new Post;

        if(!empty($request->title)) {
            $posts = $posts->where('title', 'LIKE', '%' . $request->title . '%');
        }

        if(!empty($request->slug)) {
            $posts = $posts->where('slug', 'LIKE', '%' . $request->slug . '%');
        }

        if(!empty($request->start_date)) {
            $posts = $posts->where('start_date', '<=', $request->start_date);
        }

        if(!empty($request->end_date)) {
            $posts = $posts->where('end_date', '>=', $request->end_date);
        }

        if(!empty($request->status)) {
            $posts = $posts->where('status', $request->status);
        }

        if(!empty($request->type)) {
            $posts = $posts->where('type', $request->type);
        }

        $posts = $posts->paginate(10);

        return view('pages.posts.index', [
            'posts' => $posts,
            'search_terms' => [
                'title' => $request->title,
                'slug' => $request->slug,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'status' => $request->status,
                'type' => $request->type
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.posts.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation rules
        $request->validate([
            'type' => 'required|in:Article,News,Media',
            'title' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'tags' => 'required|array|min:1',
            'tags.*' => 'string|max:255',
            'content' => 'required|string',
            'status' => 'required|in:Draft,Published',
            'image_url' => 'nullable|image|mimes:jpeg,png,jpg|max:8192'
        ]);

        if ($request->hasFile('image_url')) {
            $imagePath = $request->file('image_url')->store('services', 'public');
        }

        try {
            DB::beginTransaction();
            // Create new post
            $post = new Post();
            $post->type = $request->type;
            $post->title = $request->title;
            if (empty($request->slug)) {
                // If slug is not provided or empty, generate it from the title
                $post->slug = $this->generateSlugFromTitle($request->title);
            } else {
                // Otherwise, use the provided slug
                $post->slug = $request->slug;
            }
            $post->start_date = $request->start_date;
            $post->end_date = $request->end_date;
            $post->content = $request->content;
            $post->status = $request->status;
            $post->created_by = auth()->user()->id;
            $post->image_url = $imagePath;
            $post->save();

            $tags = $request->tags;
            foreach($tags as $tag) {
                PostTag::create([
                    'post_id' => $post->id,
                    'tag' => $tag
                ]);
            }
            DB::commit();
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
            // return redirect()->back()->with('error_message', 'Something went wrong when creating post! Please try again later');
        }

        $successMessage = ($post->status == 'Draft') ? 'Successfully saved post as draft' : 'Successfully published the post';

        // Redirect with success message
        return redirect()->route('posts.show', [
            'post' => $post
        ])->with('success_message', $successMessage);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Post::where('id', $id)->first();
        if(empty($post)) {
            return redirect()->back()->with('error_message', 'Post not found!');
        }

        return view('pages.posts.show', [
            'post' => $post,
            'tags' => $post->tags->pluck('tag')->toArray() ?? []
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validation rules
        $request->validate([
            'type' => 'required|in:Article,News,Media',
            'title' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'tags' => 'required|array|min:1',
            'tags.*' => 'string|max:255',
            'content' => 'required|string',
            'status' => 'required|in:Draft,Published',
            'image_url' => 'nullable|image|mimes:jpeg,png,jpg|max:8192'
        ]);
    
        $post = Post::where('id', $id)->first();
        if(empty($post)) {
            return redirect()->back()->with('error_message', 'Post not found!');
        }

        $imagePath = $post->image_url;
        if ($request->hasFile('image_url')) {
            // Delete the old image if it exists
            if ($post->image_url) {
                \Storage::disk('public')->delete($post->image_url);
            }
    
            // Store the new image
            $imagePath = $request->file('image_url')->store('services', 'public');
        }
    
        // Get existing slugs except for the current post's slug
        $existingSlugs = Post::where('id', '!=', $post->id)->pluck('slug')->toArray();
    
        try {
            DB::beginTransaction();
            // Update post fields
            $post->type = $request->type;
            $post->title = $request->title;
            if (empty($request->slug)) {
                // If slug is not provided or empty, generate it from the title
                $post->slug = $this->generateUniqueSlugFromTitle($request->title, $existingSlugs);
            } else {
                // Otherwise, use the provided slug
                $post->slug = $request->slug;
            }
            $post->start_date = $request->start_date;
            $post->end_date = $request->end_date;
            $post->content = $request->content;
            $post->status = $request->status;
            $post->updated_by = auth()->user()->id;
            $post->image_url = $imagePath;
            $post->save();
    
            $tags = $request->tags;
            PostTag::where('post_id', $post->id)->delete();
            foreach($tags as $tag) {
                PostTag::create([
                    'post_id' => $post->id,
                    'tag' => $tag
                ]);
            }
            DB::commit();
        } catch(Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('error_message', 'Something went wrong when updating post! Please try again later');
        }

        return redirect()->route('posts.show', [
            'post' => $post
        ])->with('success_message', 'Successfully updated post');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Find the post by ID
        $post = Post::findOrFail($id);

        PostTag::where('post_id', $post->id)->delete();

        // Delete the old image if it exists
        if ($post->image_url) {
            \Storage::disk('public')->delete($post->image_url);
        }

        // Delete the post
        $post->delete();

        // Redirect with success message
        return redirect()->route('posts.index')
            ->with('success_message', 'Post deleted successfully.');
    }

    function generateSlugFromTitle($title) {
        // Replace spaces with hyphens
        $slug = str_replace(' ', '-', $title);
        
        // Convert to lowercase
        $slug = strtolower($slug);
        
        // Remove special characters except hyphens
        $slug = preg_replace('/[^a-z0-9-]/', '', $slug);
        
        return $slug . '-' . Carbon::now()->format('YmdHis');
    }
}
