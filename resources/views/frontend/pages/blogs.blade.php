@section('title')
    Blogs | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')


    <div class="blogs-page pt-5">
        <div class="banner"></div>
        <div class="container pt-3">
            <div class="row py-5">
                <div class="col-12 col-md-12 col-lg-12 col-xl-12">
                    <div class="row">
                        @foreach ($blogs as $blog)
                        <div class="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
                            <a  class="text-decoration-none text-dark">
                                <img src="{{ asset('uploads/' . $blog->image) }}" class="img-fluid w-100 mb-2" alt="">
                                <h5 class="text-idara-pink mb-0">{{{ $blog->title }}}</h5>
                                <div class="row">
                                    <div class="col-6 align-self-center">
                                        <p class="fs-13 mb-0">{{ date('F d, Y', strtotime($blog->created_at)) }}</p>
                                    </div>
                                    <div class="col-6 align-self-center text-end">
                                        <p class="mb-0 py-1"><span class="badge bg-secondary">{{ $blog->category }}</span></p>
                                    </div>
                                </div>
                                <a href="{{ url('blogs/' . str_replace(' ', '-', $blog->title)) }}" class="btn w-100 btn-learn-more">
                                    Read More <i class="fa fa-arrow-right"></i>
                                </a>
                            </a>
                        </div>
                        @endforeach
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-3 col-xl-3"></div>
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
