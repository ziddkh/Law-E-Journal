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
        <h1 class="title">Edit Company Information</h1>
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
            <form method="POST" action="{{ route('company-informations.update', $companyInformation->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="title">Title <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('title') is-invalid @enderror" id="title" name="title" value="{{ old('title', $companyInformation->title) }}" required>
                    @error('title')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group" style="position: relative">
                    <label for="short_description">Short Description</label>
                    <textarea name="short_description" class="form-control @error('short_description') is-invalid @enderror">{{ old('short_description', $companyInformation->short_description) }}</textarea>
                    @error('short_description')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group" style="position: relative">
                    <label for="description">Description</label>
                    <textarea name="description" class="form-control" id="text-area">{{ old('description', $companyInformation->description) }}</textarea>
                    @error('description')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="d-flex justify-content-start" style="gap: 5px">
                    <button type="button" class="btn btn-secondary" onclick="window.location='{{ route('company-informations.index') }}'">
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
