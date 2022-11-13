@section('title')
    Success | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')

    <div class="success-page text-center">
        <img src="{{ asset('images/banners/success-img.jpg') }}" alt="">
        <div class="overlay">
            <div class="text">
                <div class="text-center mb-4">
                    <img src="{{ asset('images/banners/sparkle-png.png') }}" alt="" width="50px">
                </div>
                <h1 class="fs-2 mb-4">YOUR SUBMISSION HAS BEEN SUCCESSFUL!</h1>
                <p class="text-center mb-0">
                    Thank you. We have receivedd your submission.
                </p>
                <p class="text-center mb-4">
                    Check your email for a booking confirmation. We'll be in touch really soon!
                </p>
                <a class="text-white text-decoration-none" href="{{ url('/') }}">
                    <i class="fa fa-arrow-left"></i>
                    BACK TO HOME
                </a>
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
