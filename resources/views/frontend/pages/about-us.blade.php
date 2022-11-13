@section('title')
    About Us | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')

    <div class="about-us-page">
        <div class="banner"></div>


        <div class="py-5">
            <div class="about-us-1">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                            <img src="{{ asset('images/about-us/about-img.jpg') }}" class="img-fluid" alt="">
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 align-self-center">
                            <p>The company originated 18 years ago in Thailand for health and beauty products manufacturing owned as family business.</p>
                            <p>The old company name is 3P Cosmetic where Skin care products were formulated and manufactured, tolling to neighboring countries like Laos.</p>
                        </div>
                        <div class="col-12 py-4">
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-us-2">
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-4">
                            <h1 class="fs-3 text-dark">OUR HISTORY</h1>
                        </div>
                        <div class="col-12">
                            <p class="text-justify">In year 2010. the company changed its name to limited brand IDARA expanding more in Thailand and to other neighboring countries like Vietnam and philippines.</p>
                            <p class="text-justify">In 2017, it launched its first wellness clinic in the Philippines named Idara Wellness and Spa offering health and beauty skin care products of Idara Thailand and catering IV Vitamin Therapy/Glutathione Treatment for detoxification, skin whitening and glutathione health benefits as anti-oxidant.</p>
                            <p class="text-justify">Year after it was named Idara Aesthetics in Timog, Quezon City to add and upgrade service with facial care, laser treatments, slimming treatments and doctor’s procedure catering both men and women. In the later part of 2019, its first branch located in Robinsons Galleria was established. With optimism and clear goals, the company is set to expand aggressively in Metro Manila and other highly developed cities and metropolitans.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-us-3">
                <div class="container">
                    <div class="row">
                        <div class="col-12 my-5">
                            <a href="">
                                <span>VISION</span>
                            </a>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-7 offset-lg-5 col-xl-7 offset-lg-5">
                            <h2 class="fs-3">The <span class="text-idara-pink">LEADING ICON</span> in the <span class="text-idara-pink">AESTHETIC INDUSTRY</span> that is capable of <span class="text-idara-pink">MAKING A DIFFERENCE</span> in the LIVES of every CLIENT.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-us-4">
                <div class="container">
                    <div class="row">
                        <div class="col-12 my-5">
                            <a href="">
                                <span>MISSION</span>
                            </a>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="mission">
                                <img src="{{ asset('images/about-us/01.png') }}" alt="" class="img-fluid">
                                <p>To provide ADVANCE and PREMIUM AESTHETIC SERVICES to MEN and WOMEN WITH OUTMOST REGARD to ethics and PROFESSIONALISM</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                            <div>
                                <img src="{{ asset('images/about-us/02.png') }}" alt="" class="img-fluid">
                                <p>To bring INNOVATIVE AESTHETIC TECHNOLOGIES in the Philippines.</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                            <div>
                                <img src="{{ asset('images/about-us/03.png') }}" alt="" class="img-fluid">
                                <p>To GROW eith the STAKEHOLDERS and SHAREHOLDERS in order to DELIVER MORE SERVICES to the PEOPLE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-us-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 my-5">
                            <a href="">
                                <span>CORE VALUES</span>
                            </a>
                        </div>
                        <div class="col-12 mb-2">
                            <img src="{{ asset('images/about-us/01.png') }}" alt="">
                            <span class="text-idara-pink">HIGHEST QUALITY</span> of <span class="text-idara-pink">SERVICES</span>
                        </div>
                        <div class="col-12 mb-2">
                            <img src="{{ asset('images/about-us/01.png') }}" alt="" class="img-fluid">
                            <span class="text-idara-pink">EXCELLENCE</span> and <span class="text-idara-pink">PROFESSIONALISM</span>
                        </div>
                        <div class="col-12">
                            <img src="{{ asset('images/about-us/01.png') }}" alt="" class="img-fluid">
                            <span class="text-idara-pink">RESPECT</span> and <span class="text-idara-pink">COMPASSION</span>
                        </div>

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
