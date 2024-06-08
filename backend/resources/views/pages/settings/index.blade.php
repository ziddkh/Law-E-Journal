@extends('layouts.app')

@section('main-content')
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Settings</h1>
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
                        <h3 class="panel-title">Search Setting</h3>
                    </div>
                    <div class="panel-body">
                        <form action="{{ route('settings.index') }}" method="GET">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Key</label>
                                        <input type="text" class="form-control" autocomplete="off" name="key" value="{{ $search_terms['key'] }}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Value</label>
                                        <input type="text" class="form-control" autocomplete="off" name="value" value="{{ $search_terms['value'] }}">
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
                        <h3 class="panel-title">Settings</h3>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Key</th>
                                        <th>Value</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if(count($settings) <= 0)
                                        <tr>
                                            <td colspan="4">No data</td>
                                        </tr>
                                    @else 
                                        @foreach($settings as $setting)
                                            <tr>
                                                <td>{{ $loop->iteration }}</td>
                                                <td>{{ $setting->key }}</td>
                                                @if($setting->value && $setting->key == 'Company Logo')
                                                    <td>
                                                        <div class="mb-2">
                                                            <img src="{{ Storage::url($setting->value) }}" alt="Company Logo" class="img-thumbnail" width="150">
                                                        </div>
                                                    </td>
                                                @else
                                                    <td>{{ $setting->value }}</td>
                                                @endif
                                                <td>
                                                    <div class="d-flex" style="gap:5px">
                                                        <a href="{{ route('settings.show', [
                                                            'setting' => $setting
                                                        ]) }}" class="btn btn-primary">
                                                            <i class="fas fa-fw fa-pencil"></i>
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                </tbody>
                            </table>
                        </div>
    
                        {!! $settings->appends($_GET)->links() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
