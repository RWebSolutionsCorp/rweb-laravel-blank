<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CMS</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <link rel="stylesheet" href="{{ asset('css/admin.css') }}">

</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="{{ url('/admin/login') }}"> CMS</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    @if (Session::has('success'))
    <div class="alert alert-success alert-dismissible">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <h5><i class="icon fas fa-check"></i> Success!</h5>
        {{ Session::get('success') }}
      </div>
    @endif
    @if (Session::has('error'))
    <div class="alert alert-danger alert-dismissible">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <h5><i class="icon fas fa-times"></i> Error!</h5>
        {{ Session::get('error') }}
      </div>
    @endif
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form action="{{ url('admin/login') }}" method="post">@csrf
        <div class="input-group">
          <input type="email" class="form-control" placeholder="Email" required name="email" value="hello@rweb.solutions">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <span class="text-danger d-block mb-3">
            @error('email')
            {{ $message }}
            @enderror
         </span>
        <div class="input-group">
          <input type="password" class="form-control" placeholder="Password" required name="password" value="*">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <span class="text-danger d-block mb-3">
            @error('password')
            {{ $message }}
            @enderror
         </span>
        <div class="row">
          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
      </form>

    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
<script src="{{ asset('js/admin.js') }}"></script>
</body>
</html>
