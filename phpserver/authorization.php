<?php

require ('core/User.php');

$failData = [];

if( empty($_POST['login']) || $_POST['login'] != 'admin' )
{
    $failData[] = 'login';
}

if( empty($_POST['password']) || $_POST['password'] != 'admin' )
{
    $failData[] = 'password';
}

if( !empty($failData) )
{
    respond(false, 1, ['error_msg' => 'Incorrect data', 'error_inputs' => $failData]);
    exit();
}

$user = new User();

$user->login('admin', 'admin');

respond( true, 0, ['result' => ['redirectTo' => '/admin']] );
exit();