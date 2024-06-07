@extends('layouts.app')

@section('main-content')
    <div class="title-block">
        <h1 class="title">Settings</h1>
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

    <div class="card">
        <div class="card-body">
            <form method="POST" action="{{ route('settings.update', $setting->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="key">Key</label>
                    <input type="text" class="form-control @error('key') is-invalid @enderror" id="key" name="key" value="{{ old('key', $setting->key) }}" readonly>
                    @error('key')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                @if($setting->key == 'Company Logo')
                    <div class="form-group">
                        <label for="value">Image</label>
                        @if($setting->value)
                            <div class="mb-2">
                                <img src="{{ Storage::url($setting->value) }}" alt="Company Logo" class="img-thumbnail" width="150">
                            </div>
                        @endif
                        <input type="file" class="form-control @error('value') is-invalid @enderror" id="value" name="value">
                        @error('value')
                            <span class="invalid-feedback" role="alert">{{ $message }}</span>
                        @enderror
                    </div>
                @else
                    <div class="form-group">
                        <label for="value">Value <sup style='color: red'>*</sup></label>
                        <input type="text" class="form-control @error('value') is-invalid @enderror" id="value" name="value" value="{{ old('value', $setting->value) }}" required>
                        @error('value')
                            <span class="invalid-feedback" role="alert">{{ $message }}</span>
                        @enderror
                    </div>
                @endif

                <div class="d-flex justify-content-start" style="gap: 5px">
                    <button type="button" class="btn btn-secondary" onclick="window.location='{{ route('settings.index') }}'">
                        <i class="fas fa-fw fa-arrow-left"></i>
                        Back
                    </button>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-fw fa-save"></i>
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection
