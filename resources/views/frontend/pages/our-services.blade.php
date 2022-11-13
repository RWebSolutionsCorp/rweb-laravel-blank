@section('title')
    Our Services | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')

    <div class="our-services-page">
        <section class="our-services-1 py-5">
            <div class="container">
                <div class="row mt-4">
                    <div class="col-12 mt-5 pb-3 px-0">
                        <h2 class="text-idara-pink fs-4">OUR SERVICES</h2>
                        <h1 class="fs-2">IDARA AESTHETICS TREATMENTS</h1>
                    </div>

                    @foreach ($services as $service)

                    <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-0">
                        <a href="{{ url('our-services/' . $service->name) }}">
                            <img src="{{ asset('uploads/' . $service->image) }}" class="img-fluid w-100 d-block" alt="">
                            <p class="text">{{ $service->name }}</p>
                            <div class="overlay">
                                <p class="text">{{ $service->name }}</p>
                            </div>
                        </a>
                    </div>

                    @endforeach
                </div>
            </div>
        </section>
    </div>

@stop

@section('after-js')
<script>
$(document).ready(function(){


});
</script>
@stop
