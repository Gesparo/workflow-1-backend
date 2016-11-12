<?php

if(empty($_GET['q']))
{
    respond(false, 1, ['error_msg' => 'Incorrect query']);
    exit();
}

switch($_GET['q'])
{
    case 'auth':
        include '../phpserver/authorization.php';
        exit();
        break;
    default:
        respond(false, 1, ['error_msg' => 'Incorrect query']);
        exit();
        break;
}

function respond($status, $code, $data)
{
    echo json_encode([
        'status' => empty($status) ? 'error' : 'success',
        'error' => $code,
        $data
    ]);
}