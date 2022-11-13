@section('title')
    Branches | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')


    {{-- <div class="pt-5"> --}}
        {{-- <img src="{{ asset('images/banners/banner-skinconsultation.jpg') }}" class="img-fluid w-100" alt=""> --}}
    {{-- </div> --}}

    <div class="branches-page py-5">
        <div class="container pt-4">
            <div class="row pt-5">
                <div class="col-12">
                    <hr>
                </div>
                @foreach ($branches as $branch)
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h2 class="fs-6 mb-0 mt-2 text-idara-pink">{{ $branch->name }}</h2>
                    <p class="mb-0">{{ $branch->address }}</p>
                    <p class="mb-0">{{ $branch->contact_no }}</p>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-4 align-self-center">
                    <img src="{{ asset('uploads/' . $branch->image) }}" class="w-100" alt="">
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-8 align-self-center">
                    {!! $branch->map_link !!}
                </div>
                <div class="col-12">
                    <hr>
                </div>
                @endforeach
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
