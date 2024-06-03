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
        <h1 class="title">Post Details</h1>
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
            <form method="POST" action="{{ route('posts.update', $post->id) }}">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="type">Title <sup style='color: red'>*</sup></label>
                    <select name="type" class="form-control" id="type">
                        <option value="">Select Type</option>
                        <option value="Article" {{ old('type', $post->type) == 'Article' ? 'selected' : '' }}>Article</option>
                        <option value="News" {{ old('type', $post->type) == 'News' ? 'selected' : '' }}>News</option>
                        <option value="Media" {{ old('type', $post->type) == 'Media' ? 'selected' : '' }}>Release</option>
                    </select>
                    @error('type')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="title">Title <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('title') is-invalid @enderror" id="title" name="title" value="{{ old('title', $post->title) }}" required>
                    @error('title')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="slug">Slug <sup style='color: red'>*</sup></label>
                    <input type="text" class="form-control @error('slug') is-invalid @enderror" id="slug" name="slug" value="{{ old('slug', $post->slug) }}" required>
                    @error('slug')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="start_date">Start Date <sup style='color: red'>*</sup></label>
                    <input type="date" class="form-control datepicker @error('start_date') is-invalid @enderror" id="start_date" name="start_date" value="{{ old('start_date', $post->start_date) }}" required>
                    @error('start_date')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="end_date">End Date <sup style='color: red'>*</sup></label>
                    <input type="date" class="form-control datepicker @error('end_date') is-invalid @enderror" id="end_date" name="end_date" value="{{ old('end_date', $post->end_date) }}" required>
                    @error('end_date')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="tags">Tags<sup style='color: red'>*</sup></label>
                    <select name="tags[]" class="selectize" id="tags" multiple>
                        <option value="">Please Select</option>
                        @foreach($tags as $tag)
                            <option value="{{ $tag->id }}" {{ in_array($tag->id, $post->tags->pluck('id')->toArray()) ? 'selected' : '' }}>{{ $tag->tag }}</option>
                        @endforeach
                    </select>
                    @error('tags')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group" style="position: relative">
                    <label for="content">Content <sup style='color: red'>*</sup></label>
                    <textarea name="content" class="form-control" id="text-area">{{ old('content', $post->content) }}</textarea>
                    @error('content')
                        <span class="invalid-feedback" role="alert">{{ $message }}</span>
                    @enderror
                </div>

                <div class="d-flex justify-content-end" style="gap: 5px">
                    <button type="button" class="btn btn-secondary" onclick="window.location='{{route('posts.index') }}'">Cancel</button>
                    <button type="submit" class="btn btn-primary" name="status" value="{{ $post->status }}">Update</button>
                    @if($post->status == 'Draft')
                        <button type="submit" class="btn btn-primary" name="status" value="Published">Publish</button>
                    @endif
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            let oldTags = {!! json_encode(old('tags')) !!};
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

            $('#tags').selectize({
                plugins: ['remove_button'],
                delimiter: ',',
                persist: false,
                create: function(input) {
                    return {
                        value: input,
                        text: input
                    }
                },
                multiple: true
            });

            for (var i = 0; i < existingTags.length; i++) {
                let tag = existingTags[i];
                if (!selectize[0].selectize.options[tag]) {
                    selectize[0].selectize.addOption({value: tag, text: tag});
                }
            }
        });
    </script>
@stop
