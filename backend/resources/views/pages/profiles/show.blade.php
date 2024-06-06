@extends('layouts.app')

@section('main-content')
    <div class="title-block">
        <h1 class="title">Edit Profile</h1>
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
            <form method="POST" action="{{ route('profiles.update', $profile->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="name">Name <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name', $profile->name) }}" required>
                    @error('name')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="position">Position <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('position') is-invalid @enderror" id="position" name="position" value="{{ old('position', $profile->position) }}" required>
                    @error('position')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group" style="position: relative">
                    <label for="description">Description <sup style='color: red'>*</sup></label>
                    <textarea name="description" class="form-control @error('description') is-invalid @enderror" id="text-area">{{ old('description', $profile->description) }}</textarea>
                    @error('description')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="image_url">Image</label>
                    @if($profile->image_url)
                        <div class="mb-2">
                            <img src="{{ Storage::url($profile->image_url) }}" alt="Profile Image" class="img-thumbnail" width="150">
                        </div>
                    @endif
                    <input type="file" class="form-control @error('image_url') is-invalid @enderror" id="image_url" name="image_url">
                    @error('image_url')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="d-flex justify-content-end" style="gap: 5px">
                    <button type="button" class="btn btn-secondary" onclick="window.location='{{ route('profiles.index') }}'">Back</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    </div>
@endsection
