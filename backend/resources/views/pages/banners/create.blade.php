@extends('layouts.app')

@section('main-content')
    <div class="title-block">
        <h1 class="title">Create Banner</h1>
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
            <form method="POST" action="{{ route('banners.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="form-group">
                    <label for="title">Title <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('title') is-invalid @enderror" id="title" name="title" value="{{ old('title') }}" required>
                    @error('title')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="cta_button_text">CTA Button Text <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('cta_button_text') is-invalid @enderror" id="cta_button_text" name="cta_button_text" value="{{ old('cta_button_text') }}" required>
                    @error('cta_button_text')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="cta_button_url">CTA Button URL <sup style='color: red'>*</sup></label>
                    <input type="url" class="form-control @error('cta_button_url') is-invalid @enderror" id="cta_button_url" name="cta_button_url" value="{{ old('cta_button_url') }}" required>
                    @error('cta_button_url')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group" style="position: relative">
                    <label for="description">Description <sup style='color: red'>*</sup></label>
                    <textarea name="description" class="form-control" id="text-area">{{ old('description') }}</textarea>
                    @error('description')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="image_url">Image</label>
                    <input type="file" class="form-control @error('image_url') is-invalid @enderror" id="image_url" name="image_url">
                    @error('image_url')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="d-flex justify-content-start" style="gap: 5px">
                    <button type="button" class="btn btn-secondary" onclick="window.location='{{ route('banners.index') }}'">
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

