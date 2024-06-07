@extends('layouts.app')

@section('main-content')
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">User Management</h1>
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
                        <h3 class="panel-title">Search Users</h3>
                    </div>
                    <div class="panel-body">
                        <form action="{{ route('users.index') }}" method="GET">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Username</label>
                                        <input type="text" class="form-control" autocomplete="off" name="username" value="{{ $search_terms['username'] }}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="text" class="form-control" autocomplete="off" name="email" value="{{ $search_terms['email'] }}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" autocomplete="off" name="name" value="{{ $search_terms['name'] }}">
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
                        <h3 class="panel-title">Users</h3>
                        <div>
                            <a href="{{ route('users.create') }}" class='btn btn-primary'>
                                <i class="fas fa-plus"></i>
                                Create User
                            </a>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if(count($users) <= 0)
                                        <tr>
                                            <td colspan="5">No users</td>
                                        </tr>
                                    @else 
                                        @foreach($users as $user)
                                            <tr>
                                                <td>{{ $loop->iteration }}</td>
                                                <td>{{ $user->username }}</td>
                                                <td>{{ $user->email }}</td>
                                                <td>{{ $user->name }}</td>
                                                <td>
                                                    <div class="d-flex" style="gap:5px">
                                                        <a href="{{ route('users.show', [
                                                            'user' => $user
                                                        ]) }}" class="btn btn-primary">
                                                            <i class="fas fa-fw fa-pencil"></i>
                                                        </a>
    
                                                        <form id="delete-form-{{$user->id}}" action="{{ route('users.destroy', ['user' => $user->id]) }}" method="POST">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this user?')">
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
    
                        {!! $users->appends($_GET)->links() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
