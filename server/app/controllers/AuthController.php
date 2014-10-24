<?php
/**
 * Created by PhpStorm.
 * User: joker
 * Date: 10/24/14
 * Time: 11:53 AM
 */

class AuthController extends \BaseController{
    public function login()
    {
        $email = Input::json('email');
        $password = Input::json('password');

        $user = User::where('email', '=', $email)->first();

        if (!$user)
        {
            return Response::json(array('message' => 'Wrong email and/or password'), 401);
        }

        if (Hash::check($password, $user->password))
        {
            // The passwords match...
            unset($user->password);
            return Response::json(array('token' => $this->createToken($user)));
        }
        else
        {
            return Response::json(array('message' => 'Wrong email and/or password'), 401);
        }
    }
}