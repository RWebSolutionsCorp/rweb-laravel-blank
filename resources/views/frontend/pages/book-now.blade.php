@section('title')
    Book Now | {{ env('APP_NAME') }}
@stop

@extends('frontend.layouts.app')

@section('content')

    <div class="pt-4">
    </div>

    <div class="book-now-page pt-5">
        <section class="book-now-1 py-5">
            <form class="container" method="POST" action="{{ url('submit-booking?action=POST') }}">@csrf
                <div class="row">
                    <div class="col-12 mb-2">
                        <h1 class="fs-4">BOOK AN APPOINTMENT</h1>
                        <p>Please fill up this form and we'll get back to you soon as your appointment is confirmed.</p>
                        <hr>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                        <h1 class="fs-5">LIST OF IDARA SERVICES</h1>
                        @error('treatments')
                        <code>{{ $message }}</code>
                        @enderror

                        @foreach ($services as $service)

                        <ul class="list-group rounded-0 list-group-flush">
                            <li class="list-group-item text-idara-pink"><h1 class="fs-6 mb-0">{{ $service->name }}</h1></li>

                            @foreach ($service->treatments as $treatment)

                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" @if (Request::get('treatment') == $treatment->id) checked @endif type="checkbox" value="{{ $treatment->name }}" name="treatments[]" id="flexCheckDefault{{ $treatment->id }}">
                                    <label class="form-check-label fs-13" for="flexCheckDefault{{ $treatment->id }}">
                                      {{ $treatment->name }}
                                    </label>
                                </div>
                            </li>

                            @endforeach

                        </ul>

                        @endforeach
                    </div>
                    <div class="col-12 col-md-8 col-lg-8 col-xl-8 right">
                        <div class="row">
                            <div class="col-12 py-2">
                                <p class="mb-1">Appointment Type <span class="text-idara-pink">(required)</span></p>
                                <select class="w-100" required name="appointment_type">
                                    <option @if (old('appointment_type') == 'Inquiry') selected @endif>Inquiry</option>
                                    <option @if (old('appointment_type') == 'Clinical Appointment') selected @endif>Clinical Appointment</option>
                                </select>
                                @error('appointment_type')
                                <code>{{ $message }}</code>
                                @enderror
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2">
                                <p class="mb-1">Appointment Date <span class="text-idara-pink">(required)</span></p>
                                <input type="date" required name="appointment_date" value="{{ old('appointment_date') }}" />
                                @error('appointment_date')
                                <code>{{ $message }}</code>
                                @enderror
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2">
                                <p class="mb-1">Preferred Schedule <span class="text-idara-pink">(required)</span></p>
                                <select class="w-100" required name="preferred_schedule">
                                    <option @if (old('preferred_schedule') == 'AM') selected @endif >AM</option>
                                    <option @if (old('preferred_schedule') == 'PM') selected @endif >PM</option>
                                </select>
                                @error('preferred_schedule')
                                <code>{{ $message }}</code>
                                @enderror
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2">
                                <p class="mb-1">Full Name <span class="text-idara-pink">(required)</span></p>
                                <input placeholder="Enter your full name" required name="full_name" value="{{ old('full_name') }}"  />
                                @error('full_name')
                                <code>{{ $message }}</code>
                                @enderror
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2">
                                <p class="mb-1">Email <span class="text-idara-pink">(required)</span></p>
                                <input type="email" placeholder="Enter your email" required name="email" value="{{ old('email') }}"  />
                                @error('email')
                                <code>{{ $message }}</code>
                                @enderror
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2">
                                <p class="mb-1">Contact No. <span class="text-idara-pink">(required)</span></p>
                                <input placeholder="Enter your contact no." required name="contact_no" value="{{ old('contact_no') }}" />
                                @error('contact_no')
                                <code>{{ $message }}</code>
                                @enderror
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2">
                                <p class="mb-1">Preferred Branch <span class="text-idara-pink">(required)</span></p>
                                <select class="w-100" name="branch_id" required>
                                    <option value="" selected>Select Branch</option>
                                    @foreach ($branches as $branch)
                                    <option @if (old('branch_id') == $branch->id) selected @endif value="{{ $branch->id }}">{{ $branch->name }} - {{ $branch->address }}</option>
                                    @endforeach
                                </select>
                                @error('branch_id')
                                <code>{{ $message }}</code>
                                @enderror
                            </div>
                            <div class="col-12 py-2">
                                <p class="mb-1">Your Message <span class="text-idara-pink">(required)</span></p>
                                <textarea rows="4" required name="message">{{ old('message') }}</textarea>
                                @error('message')
                                <code>{{ $message }}</code>
                                @enderror
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 offset-md-6 col-lg-6 offset-md-6 col-xl-6 offset-xl-6 py-2">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>

@stop

@section('after-js')
<script>
$(document).ready(function(){


});
</script>
@stop
