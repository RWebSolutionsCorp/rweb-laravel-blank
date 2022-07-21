<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResponseController extends Controller
{

    public function success (Request $request)
    {
        return 'Success';
    }

    public function error (Request $request)
    {
        return 'Error';
    }

}
