<?php
session_start();
require ('../core/User.php');
require ('../core/db.php');

$user = new User();

if( !$user->get_access() )
{
    echo json_encode([
        'status' => 'error',
        'error' => 1,
        'error_msg' => 'You are not authorize'
    ]);

    exit();
}

$invalidInputs = [];

// validate
foreach ($_POST as $key=>$value )
{
    switch ($key)
    {
        case 'html':
        case 'css':
        case 'javascript':
        case 'git':
        case 'gulp':
        case 'bower':
        case 'php':
        case 'nodejs':
        case 'mongodb':
            if( !validateInput($value) )
            {
                $invalidInputs[] = $key;
            }
            break;
        default:
            // remove unused values
            unset($_POST[$key]);
            break;
    }
}

if( !empty($invalidInputs) )
{
    echo json_encode([
        'status' => 'error',
        'error' => 1,
        'error_inputs' => $invalidInputs
    ]);

    exit();
}

if( !updateSkills($_POST))
{
    echo json_encode([
        'status' => 'error',
        'error' => 1,
        'error_msg' => 'Something goes wrong'
    ]);
}
else
{
    echo json_encode([
        'status' => 'success',
        'error' => 0,
        'result' => [
            'msg' => 'Данные успешно созхранены'
        ]
    ]);
}

/**
 * @param $data [column => value]
 * @return bool
 */
function updateSkills($data)
{
    $result = true;

    foreach ($data as $key=>$value)
    {
        $query = DB::Query("UPDATE `skills` SET `value` = '$value' WHERE `name` = '$key' LIMIT 1");

        $result = (false === $result || false === $query) ? false : true;
    }

    return $result;
}

function validateInput($value)
{
    return !empty($value) && is_numeric($value) && $value >= 0 && $value <= 100;
}