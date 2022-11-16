<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageController extends Controller
{

    public function home (Request $request)
    {
        return view('frontend.pages.home');
    }

}
