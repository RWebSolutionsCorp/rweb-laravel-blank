@section('title')
    Shop | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')


<div class="pt-5">
    <img src="{{ asset('images/banners/banner-shop.jpg') }}" class="img-fluid w-100" alt="">
</div>


    <div class="shop-page">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 py-3">
                    <div class="card rounded-0">
                        <div class="card-body">
                            <h2 class="fs-5 mb-3">
                                <b>SHOP BY CATEGORY</b>
                            </h2>
                            <ul class="">
                                <li>
                                    <a href="{{ url('shop') }}">All Products</a>
                                </li>

                                @foreach ($categories as $category)

                                <li>
                                    <a class="@if(str_replace(' ', '-', $category->name) == $id) text-idara-pink fw-bold fs-6 @endif" href="{{ url('shop-filter/' . str_replace(' ', '-', $category->name)) }}">{{ $category->name }}</a>
                                </li>

                                @endforeach
                            </ul>
                        </div>
                        <div class="px-3">
                            <hr class="mt-0">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9 py-3">
                    <div class="row">
                        @foreach ($products as $product)
                        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 py-2">
                            <a href="{{ url('shop/' . str_replace(' ', '-', $product->name)) }}" class="text-decoration-none text-dark">
                                <img src="{{ asset('uploads/' . $product->primary_image) }}" class="img-fluid" />
                            </a>
                            <a href="https://shopee.ph/demieidara#product_list" target="_blank" class="btn btn-danger border-0 rounded-0 position-relative w-100 text-decoration-none bg-pink text-white">
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
    </div>

@stop

@section('after-js')
<script>
$(document).ready(function(){


});
</script>
@stop
