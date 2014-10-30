<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::post('auth/login', 'AuthController@login');

Route::group(['before' => 'auth'], function () {
    Route::get('user/me', 'UserController@getUser');

    Route::resource('posts', 'PostController', ['except' => ['create']]);
    Route::resource('media', 'MediaController', ['except' => ['create']]);
});

Route::get('{angular?}', [ 'uses' => 'HomeController@index' ])->where('angular', '.*');