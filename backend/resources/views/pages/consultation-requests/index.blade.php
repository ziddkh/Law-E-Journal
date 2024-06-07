@extends('layouts.app')

@section('main-content')
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Consultation Request</h1>
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
                        <h3 class="panel-title">Search Requests</h3>
                    </div>
                    <div class="panel-body">
                        <form action="{{ route('settings.index') }}" method="GET">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" autocomplete="off" name="name" value="{{ $search_terms['name'] }}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="text" class="form-control" autocomplete="off" name="email" value="{{ $search_terms['email'] }}">
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
                        <h3 class="panel-title">Consultation Request</h3>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if(count($consultation_requests) <= 0)
                                        <tr>
                                            <td colspan="5">No data</td>
                                        </tr>
                                    @else 
                                        @foreach($consultation_requests as $consultation_request)
                                            <tr>
                                                <td>{{ $loop->iteration }}</td>
                                                <td>{{ $consultation_request->name }}</td>
                                                <td>{{ $consultation_request->email }}</td>
                                                <td>{{ $consultation_request->phone_number }}</td>
                                                <td>
                                                    <div class="d-flex" style="gap:5px">
                                                        <a href="{{ route('consultation-requests.show', [
                                                            $consultation_request->id
                                                        ]) }}" class="btn btn-primary">
                                                            <i class="fas fa-fw fa-eye"></i>
                                                            View
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                </tbody>
                            </table>
                        </div>
    
                        {!! $consultation_requests->appends($_GET)->links() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
