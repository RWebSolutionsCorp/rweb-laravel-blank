@section('title')
    {{ $service->name }} | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')

    <div class="pt-5">
        {{-- <img src="{{ asset('images/banners/banner-skinconsultation.jpg') }}" class="img-fluid w-100" alt=""> --}}
    </div>

    <div class="service-page pt-5">
        <section class="service-1 py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 align-self-center text-center">
                        <a href="{{ url('book-now?service=' . $service->id) }}" class="btn-learn-more w-100 position-relative">
                            Book Now
                        </a>
                    </div>
                    <div class="col-12 mt-5">
                        <h2 href="">
                            <span>{{ $service->name }}</span>
                        </h2>
                    </div>
                    {{-- <div class="col-12 col-md-12 py-3">
                        {!! $service->description !!}
                    </div> --}}


                    <div class="col-12 my-4"></div>

                    @foreach ($service->treatments as $treatment)

                    <div class="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3 p-0">
                        {{-- <a href="{{ url('treatment/' . $treatment->name) }}"> --}}
                        <a>
                            <img src="{{ asset('uploads/' . $treatment->image) }}" class="img-fluid w-100 d-block" alt="">
                            <p class="text">{{ $treatment->name }}</p>
                            <div class="overlay">
                                <p class="text">{{ $treatment->name }}</p>
                            </div>
                        </a>
                    </div>
                    {{-- <div class="col-12 align-self-center">
                        <div class="text-justify">{!! $treatment->description !!}</div>
                    </div> --}}

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
