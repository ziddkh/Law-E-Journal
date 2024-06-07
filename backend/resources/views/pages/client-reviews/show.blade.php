@extends('layouts.app')

@section('main-content')
    <div class="title-block">
        <h1 class="title">Edit Testimonials</h1>
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
            <form method="POST" action="{{ route('client-reviews.update', $clientReview->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="name">Name <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name', $clientReview->name) }}" required>
                    @error('name')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="position">Position <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('position') is-invalid @enderror" id="position" name="position" value="{{ old('position', $clientReview->position) }}" required>
                    @error('position')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>


                <div class="form-group" style="position: relative">
                    <label for="description">Description <sup style='color: red'>*</sup></label>
                    <textarea name="description" class="form-control @error('description') is-invalid @enderror" id="text-area">{{ old('description', $clientReview->description) }}</textarea>
                    @error('description')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="image_url">Image</label>
                    @if($clientReview->image_url)
                        <div class="mb-2">
                            <img src="{{ Storage::url($clientReview->image_url) }}" alt="Testimonials Image" class="img-thumbnail" width="150">
                        </div>
                    @endif
                    <input type="file" class="form-control @error('image_url') is-invalid @enderror" id="image_url" name="image_url">
                    @error('image_url')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="d-flex justify-content-start" style="gap: 5px">
                    <button type="button" class="btn btn-secondary" onclick="window.location='{{ route('client-reviews.index') }}'">
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
