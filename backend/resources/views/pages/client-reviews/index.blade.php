@extends('layouts.app')

@section('main-content')
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Client Review Management</h1>
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
                        <h3 class="panel-title">Search Client Review</h3>
                    </div>
                    <div class="panel-body">
                        <form action="{{ route('client-reviews.index') }}" method="GET">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" autocomplete="off" name="name" value="{{ $search_terms['name'] }}">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Search</button>
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
                    <div class="panel-heading">
                        <h3 class="panel-title">Client Reviews</h3>
                    </div>
                    <div class="panel-body">
                        <div class="pb-3">
                            <a href="{{ route('client-reviews.create') }}" class='btn btn-primary'>Create Client Review</a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if(count($clientReviews) <= 0)
                                        <tr>
                                            <td colspan="3">No client-reviews</td>
                                        </tr>
                                    @else 
                                        @foreach($clientReviews as $clientReview)
                                            <tr>
                                                <td>{{ $loop->iteration }}</td>
                                                <td>{{ $clientReview->name }}</td>
                                                <td>
                                                    <div class="d-flex" style="gap:5px">
                                                        <a href="{{ route('client-reviews.show', [
                                                            $clientReview->id
                                                        ]) }}" class="btn btn-primary">
                                                            <i class="fas fa-fw fa-pencil"></i>
                                                        </a>
                                                        <form id="delete-form-{{$clientReview->id}}" action="{{ route('client-reviews.destroy', [$clientReview->id]) }}" method="POST">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this clientReview?')">
                                                                <i class="fas fa-fw fa-trash"></i>
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
    
                        {!! $clientReviews->appends($_GET)->links() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
