@section('title')
    {{ str_replace('-', ' ', $blog->title) }} | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')

    <div class="blog-page pt-5">
        <div class="container pt-5">
            <div class="row py-3">
                <div class="col-12 pb-3">
                    <a href="{{ url('blogs') }}" class="text-decoration-none text-idara-pink"><i class="fa fa-arrow-left"></i> Back to Blogs</a>
                </div>
                <div class="col-12 pb-3">
                    <h1 class="text-idara-pink fs-5">{{ str_replace('-', ' ', $blog->title) }}</h1>
                    <div class="fs-13">
                        {{ $blog->author }} | {{ date('F d, Y', strtotime($blog->created_at)) }} | {{ $blog->views }}
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <img src="{{ asset('uploads/' . $blog->image) }}" class="img-fluid w-100" alt="">
                    <p class="mb-0 py-1"><span class="badge bg-secondary">{{ $blog->category }}</span></p>
                </div>
                <div class="col-12">
                    {!! $blog->description !!}
                </div>
            </div>
        </div>

    </div>

@stop

@section('after-js')
<script>
$(document).ready(function(){


});
</script>
@stop
