<?php
session_start();
require ('../core/User.php');

$failData = [];

if( empty($_POST['login']) || $_POST['login'] != 'admin')
{
    $failData[] = 'login';
}

if( empty($_POST['password']) || $_POST['login'] != 'admin')
{
    $failData[] = 'password';
}

if( !empty($failData) )
{
    echo json_encode([
        'status' => 'error',
        'error' => 1,
        'error_inputs' => $failData
    ]);

    exit();
}

$user = new User();

$user->login('admin', 'admin');

echo json_encode([
    'status' => 'success',
    'error' => 0,
    'result' => [
        'redirectTo' => '/admin.php'
    ]
]);
