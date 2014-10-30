<?php namespace YOLO;
use Config;
use JWT;
use Request;
use User;

/**
 * Created by PhpStorm.
 * User: joker
 * Date: 10/25/14
 * Time: 11:02 PM
 */

class UserUtils {
    public function getCurrentUser()
    {
        $token = explode(' ', Request::header('Authorization'))[1];
        $payloadObject = JWT::decode($token, Config::get('secrets.TOKEN_SECRET'));
        $payload = json_decode(json_encode($payloadObject), true);

        $user = User::find($payload['sub']);

        return $user;
    }
}