@extends('layouts.app')

@section('styles')
    <style>
        .note-toolbar {
            margin: 0 !important;
            padding: 0 0 5px 5px !important;
            background-color: rgba(0,0,0,.03) !important;
            border-bottom: 1px solid rgba(0,0,0,.125) !important;
            display: block !important;
        }

        .note-toolbar .btn {
            color: black !important;
        }

        .note-editor.note-frame .note-editing-area .note-editable {
            width: auto !important;
        }
    </style>
@stop

@section('main-content')
    <div class="title-block">
        <h1 class="title">Edit Service</h1>
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
            <form method="POST" action="{{ route('services.update', $service->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="name">Name <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name', $service->name) }}" required>
                    @error('name')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group" style="position: relative">
                    <label for="description">Description <sup style='color: red'>*</sup></label>
                    <textarea name="description" class="form-control" id="text-area">{{ old('description', $service->description) }}</textarea>
                    @error('description')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="image_url">Image</label>
                    @if($service->image_url)
                        <div class="mb-2">
                            <img src="{{ Storage::url($service->image_url) }}" alt="Service Image" class="img-thumbnail" width="150">
                        </div>
                    @endif
                    <input type="file" class="form-control @error('image_url') is-invalid @enderror" id="image_url" name="image_url">
                    @error('image_url')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="d-flex justify-content-start" style="gap: 5px">
                    <button type="button" class="btn btn-secondary" onclick="window.location='{{ route('services.index') }}'">
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

@section('scripts')
    <script>
        $(document).ready(function() {
            $("#text-area").summernote({
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'underline', 'clear']],
                    ['fontname', ['fontname']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture']],
                    ['view', [ 'codeview', 'help']],
                ],
            });
        });
    </script>
@stop
