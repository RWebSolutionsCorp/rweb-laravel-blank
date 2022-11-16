<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    <title>
        @yield('title', env('APP_NAME'))
    </title>

    @yield('seo')

</head>
<body>

    @include('frontend.layouts.header')

    <div>
        @yield('content')
    </div>

    @include('frontend.layouts.footer')

    @yield('before-js')

    <script src="{{ asset('js/app.js') }}"></script>

    @yield('after-js')
</body>
</html>
