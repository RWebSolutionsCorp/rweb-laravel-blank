@section('title')
    Home | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')

    <div class="home-page">
        <section class="home-1 py-5">
            <div class="container">
                <div class="row mt-4">
                    <div class="col-12 mt-5">

                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="{{ asset('images/home/banner-home.jpg') }}" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset('images/home/banner-home.jpg') }}" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset('images/home/banner-home.jpg') }}" class="d-block w-100">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section class="home-2 py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <img src="{{ asset('images/home/product-img.jpg') }}" class="img-fluid" alt="">
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-self-center">
                        <h2 class="text-idara-pink my-3">
                            OUR STORY
                        </h2>
                        <h1 class="my-3">IDARA AESTHETICS</h1>
                        <p class="fs-6">In 2017, it launched its first wellness clinic in the Philippines named Idara Wellness and Spa offering health and beauty skin care products of Idara Thailand and catering IV Vitamin Therapy/Glutathione Treatment for detoxification, skin whitening and glutathione health benefits as anti-oxidant.</p>
                        <p class="fs-6">Despite challenges we experience, your safety is our top priority. All staff are fully vaccinated and the facility is regulary sanitized.</p>
                        <p class="fs-6">"We make sure you feel pampered and safe with our hands"</p>
                        <br>
                        <a href="{{ url('about-us') }}" class="btn-learn-more">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="home-3 py-5">
            <div class="container">
                <div class="row px-3">
                    <div class="col-12 pb-3 px-0">
                        <h2 class="text-idara-pink fs-4">OUR TREATMENTS</h2>
                        <h1 class="fs-2">IDARA SKIN TREATMENTS</h1>
                    </div>
                    @foreach ($bodies as $body)
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 p-0">
                        <a href="{{ url('our-services') }}">
                            <img src="{{ asset('uploads/' . $body->image) }}" class="img-fluid w-100 d-block" alt="">
                            <p class="text">{{ $body->name }}</p>
                            <div class="overlay">
                                <p class="text">{{ $body->name }}</p>
                            </div>
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
        </section>
        <section class="home-4 py-5">
            <div class="container">
                <div class="row px-3">
                    <div class="col-12 col-sm-12 col-md-9 offset-md-3 col-lg-6 offset-lg-6 col-xl-6 offset-xl-6 pb-3 px-0 text-center text-md-end">
                        <h2 class="text-idara-pink fs-4">OUR PRODUCTS</h2>
                        <h1 class="fs-2">IDARA PRODUCTS</h1>
                        <p>Choosing the recommended products keeps you from switching from product to product, with will cost you more, or worse, putting you into risk.</p>
                        <a href="{{ url('shop') }}" class="text-decoration-none text-idara-pink">
                            <i class="fa-solid fa-circle-arrow-left"></i> See All Products
                        </a>
                    </div>
                    <div class="col-12 pt-3">
                        <div class="owl-carousel owl-theme" id="owl-carousel-products">
                            @foreach ($products as $product)

                            <div class="item">
                                <a href="{{ url('shop/' . str_replace(' ', '-', $product->name)) }}" class="text-decoration-none text-dark">
                                    <img src="{{ asset('uploads/' . $product->primary_image) }}" class="img-fluid" />
                                </a>
                                <a href="https://shopee.ph/demieidara#product_list" target="_blank" class="btn btn-danger btn-block border-0 rounded-0 position-relative w-100 text-decoration-none bg-pink text-white">
                                    ADD TO BAG
                                </a>
                                <a href="{{ url('shop/' . str_replace(' ', '-', $product->name)) }}" class="text-decoration-none text-dark">
                                    <p class="mt-2 mb-1 fw-bold product-title">{{ $product->name }}</p>
                                    <p class="mb-0 product-category">{{ implode(", ", json_decode($product->categories)) }}</p>
                                    <p class="mb-0 my-1 fw-bold product-price">₱ {{ number_format($product->price, 2) }}</p>
                                    <ul class="list-unstyled list-group list-group-horizontal">
                                        @for ($i = 0; $i < $product->stars; $i++)
                                        <li class="">
                                            <a class="text-decoration-none text-warning">
                                                <i class="fa-solid fa-star"></i>
                                            </a>
                                        </li>
                                        @endfor
                                    </ul>
                                </a>
                            </div>

                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-5 py-5">
            <div class="container">
                <div class="row px-3">
                    <div class="col-12 pb-3 px-0 text-center">
                        <h2 class="text-idara-pink fs-4">OUR REVIEWS</h2>
                        <h1 class="fs-2">INFLUENCERS' TESTIMONIAL</h1>
                    </div>
                    <div class="col-12 py-5">
                        <div class="owl-carousel owl-theme" id="owl-carousel-reviews">
                            @foreach ($testimonials as $testimonial)

                            <div class="item">
                                <div class="row">
                                    <div class="col-6 offset-3 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1 text-center align-self-center p-2">
                                        <img src="{{ asset('uploads/' . $testimonial->image) }}" class="img-fluid" alt="">
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 align-self-center">
                                        <div class="review-box">
                                            <ul class="list-unstyled list-group list-group-horizontal">
                                                @for ($i = 0; $i < $testimonial->stars; $i++)
                                                <li class="">
                                                    <a class="text-decoration-none text-idara-pink">
                                                        <i class="fa-solid fa-star"></i>
                                                    </a>
                                                </li>
                                                @endfor
                                            </ul>
                                            <p class="my-3 review-words">
                                                {{ $testimonial->description }}
                                            </p>
                                            <h1 class="fs-6 mb-0 text-idara-pink">
                                                <b>
                                                    {{ $testimonial->name }}
                                                </b>
                                            </h1>
                                            <p class="review-position mb-0">
                                                {{ $testimonial->position }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

@stop

@section('after-js')
<script>
$(document).ready(function(){
    $('#owl-carousel-products').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })

    $('#owl-carousel-reviews').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })

});
</script>
@stop
