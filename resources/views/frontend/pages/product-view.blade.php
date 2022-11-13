@section('title')
    {{ $product->name }} | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')

    <div class="product-page pt-5">
        <div class="container pt-5">
            <div class="row py-5">
                <div class="col-12 col-md-5 col-lg-5 col-xl-5 product-slide px-5">
                    <div class="position-relative">
                        <div class="mySlides">
                            <div class="numbertext">1 / {{ count($product->images ? json_decode($product->images) : []) + 1 }}</div>
                            <img src="{{ asset('uploads/' . $product->primary_image) }}" class="w-100">
                        </div>

                        @php
                            $first = 2;
                        @endphp

                        @foreach ($product->images ? json_decode($product->images) : [] as $img)

                        <div class="mySlides">
                            <div class="numbertext">{{ $first++ }} / {{ count($product->images ? json_decode($product->images) : []) + 1 }}</div>
                            <img src="{{ asset('uploads/' . $img) }}" class="w-100">
                        </div>

                        @endforeach

                        <a class="prev" onclick="plusSlides(-1)">❮</a>
                        <a class="next" onclick="plusSlides(1)">❯</a>

                        <div class="row">

                            <div class="column">
                              <img class="demo cursor" src="{{ asset('uploads/' . $product->primary_image) }}" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
                            </div>

                            @php
                                $second = 2;
                            @endphp

                            @foreach ($product->images ? json_decode($product->images) : [] as $image)

                            <div class="column">
                                <img class="demo cursor" src="{{ asset('uploads/' . $image) }}" style="width:100%" onclick="currentSlide({{ $second++ }})" alt="Cinque Terre">
                              </div>
                            @endforeach
                        </div>

                    </div>
                </div>
                <div class="col-12 col-md-7 col-lg-7 col-xl-7 align-self-center">
                    <h4 class="title fw-6 mb-0 fw-semibold">
                        {{ $product->name }}
                    </h4>
                    <ul class="list-unstyled list-group list-group-horizontal">
                        @for ($i = 0; $i < $product->stars; $i++)
                        <li class="">
                            <a class="text-decoration-none text-warning">
                                <i class="fa-solid fa-star"></i>
                            </a>
                        </li>
                    @endfor
                    </ul>
                    <div class="my-3">
                        <h3 class="text-idara-pink">
                            <b>{{ number_format($product->price, 2) }}</b>
                        </h3>
                    </div>
                    <div class="my-1">
                        <p class="mb-0 fs-13">Categories: {{ implode(", ", json_decode($product->categories)) }}</p>
                    </div>
                    <div class="my-1">
                        <p class="mb-0 fs-13">Tags: {{ implode(", ", json_decode($product->tags)) }}</p>
                    </div>
                    <div class="my-2">
                        {!! $product->description !!}
                    </div>
                    <div class="my-2">
                        <a href="{{ url('about-us') }}" class="btn btn-learn-more w-100 py-2">
                            Add To Bag
                        </a>
                    </div>
                    @if ($product->lazada)
                    <div class="my-2">
                        <a href="{{ $product->lazada }}" target="_blank" class="btn btn-learn-more w-100 py-2">
                            Lazada
                        </a>
                    </div>
                    @endif
                    @if ($product->shopee)
                    <div class="my-2">
                        <a href="{{ $product->shopee }}" target="_blank" class="btn btn-learn-more w-100 py-2">
                            Shopee
                        </a>
                    </div>
                    @endif
                </div>
            </div>

            <div class="row px-3 pb-5">
                <div class="col-12">
                    <hr>
                </div>
                <div class="col-12 py-3">
                    <h4 class="text-idara-pink fs-4"><b>RELATED PRODUCTS</b></h4>
                </div>
                <div class="col-12 pt-3">
                    <div class="owl-carousel owl-theme" id="owl-carousel-products">
                        @foreach ($related_products as $related)

                        <div class="item">
                            <a href="{{ url('shop/' . str_replace(' ', '-', $related->name)) }}" class="text-decoration-none text-dark">
                                <img src="{{ asset('uploads/' . $related->primary_image) }}" class="img-fluid" />
                            </a>
                            <a href="" class="btn btn-danger btn-block border-0 rounded-0 position-relative w-100 text-decoration-none bg-pink text-white">
                                ADD TO BAG
                            </a>
                            <a href="{{ url('shop/' . str_replace(' ', '-', $related->name)) }}" class="text-decoration-none text-dark">
                                <p class="mt-2 mb-1 fw-bold product-title">{{ $related->name }}</p>
                                <p class="mb-0 product-category">{{ implode(", ", json_decode($related->categories)) }}</p>
                                <p class="mb-0 my-1 fw-bold product-price">₱ {{ number_format($related->price, 2) }}</p>
                                <ul class="list-unstyled list-group list-group-horizontal">
                                    @for ($i = 0; $i < $related->stars; $i++)
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

});
</script>

<script>
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    </script>

@stop
