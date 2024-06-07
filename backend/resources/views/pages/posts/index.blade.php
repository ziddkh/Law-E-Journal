@extends('layouts.app')

@section('main-content')
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Post Management</h1>
        </div>
    </div>

    @if(Session::has('success_message'))
        <div class="alert alert-success">
            <strong>Success:</strong> {{ Session::get('success_message') }}
        </div>
    @endif

    @if(Session::has('error_message'))
        <div class="alert alert-danger">
            <strong>Error:</strong> {{ Session::get('error_message') }}
        </div>
    @endif

    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="card">
                    <div class="panel-heading">
                        <h3 class="panel-title">Search Posts</h3>
                    </div>
                    <div class="panel-body">
                        <form action="{{ route('posts.index') }}" method="GET">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input type="text" class="form-control" autocomplete="off" name="title" value="{{ $search_terms['title'] }}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Start Date</label>
                                        <input type="date" class="form-control" autocomplete="off" name="start_date" id="start_date" value="{{ $search_terms['start_date'] }}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>End Date</label>
                                        <input type="date" class="form-control" autocomplete="off" name="end_date" id="end_date" value="{{ $search_terms['end_date'] }}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Slug</label>
                                        <input type="text" class="form-control" autocomplete="off" name="slug" value="{{ $search_terms['slug'] }}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Status</label>
                                        <select name="status" class="form-control" id="status">
                                            <option value="">Status</option>
                                            <option value="Draft" {{ $search_terms['status'] == 'Draft' ? 'selected' : '' }}>Draft</option>
                                            <option value="Published" {{ $search_terms['status'] == 'Published' ? 'selected' : '' }}>Published</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Type</label>
                                        <select name="type" class="form-control" id="type">
                                            <option value="">Type</option>
                                            <option value="Article" {{ $search_terms['type'] == 'Article' ? 'selected' : '' }}>Article</option>
                                            <option value="News" {{ $search_terms['type'] == 'News' ? 'selected' : '' }}>News</option>
                                            <option value="Media" {{ $search_terms['type'] == 'Media' ? 'selected' : '' }}>Release</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-fw fa-search"></i>
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row pt-3">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="card">
                    <div class="panel-heading" style="display: flex; align-items: center; justify-content: space-between;padding-bottom:10px">
                        <h3 class="panel-title">Posts</h3>
                        <div>
                            <a href="{{ route('posts.create') }}" class='btn btn-primary'>
                                <i class="fas fa-plus"></i>
                                Create Post
                            </a>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Type</th>
                                        <th>Title</th>
                                        <th>Slug</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Status</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if(count($posts) <= 0)
                                        <tr>
                                            <td colspan="8">No data</td>
                                        </tr>
                                    @else 
                                        @foreach($posts as $post)
                                            <tr>
                                                <td>{{ $loop->iteration }}</td>
                                                <td>{{ $post->type }}</td>
                                                <td>{{ $post->title }}</td>
                                                <td>{{ $post->slug }}</td>
                                                <td>{{ $post->start_date_formatted }}</td>
                                                <td>{{ $post->end_date_formatted }}</td>
                                                <td>
                                                    @if($post->status == 'Draft')
                                                        <span class="badge badge-secondary" style="width: 100px;height: 30px;padding:10px;font-size:13px">Draft</span>
                                                    @elseif($post->status == 'Published')
                                                        <span class="badge badge-success" style="width: 100px;height: 30px;padding:10px;font-size:13px">Published</span>
                                                    @elseif($post->status == 'Archived')
                                                        <span class="badge badge-danger" style="width: 100px;height: 30px;padding:10px;font-size:13px">Archived</span>
                                                    @endif
                                                </td>
                                                <td>
                                                    <div class="d-flex" style="gap:5px">
                                                        <a href="{{ route('posts.show', [
                                                            'post' => $post
                                                        ]) }}" class="btn btn-primary">
                                                            <i class="fas fa-fw fa-pencil"></i>
                                                            Edit
                                                        </a>
    
                                                        <form id="delete-form-{{$post->id}}" action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this post?')">
                                                                <i class="fas fa-fw fa-trash"></i>
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                </tbody>
                            </table>
                        </div>
    
                        {!! $posts->appends($_GET)->links() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
