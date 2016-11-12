<?php
session_start();
require ('core/User.php');

if($_POST['login'] != 'admin' || $_POST['password'] != 'admin')
{
    $failData = [];

    if($_POST['login'] != 'admin')
    {
        $failData[] = 'login';
    }

    if($_POST['password'] != 'admin')
    {
        $failData[] = 'password';
    }

    echo json_encode([
        'status' => 'false',
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
        'redirectTo' => '/admin'
    ]
]);
