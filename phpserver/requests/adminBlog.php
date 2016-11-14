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
        case 'title':
        case 'content':
        case 'date':
            if( empty($value) )
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

if( !addBlog($_POST))
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
function addBlog($data)
{
    $query = DB::Query("INSERT INTO `articles` SET ".prepareQuery($data));

    return false === $query || 0 == mysqli_affected_rows(DB::$link) ? false : true;
}


/**
 * Convert associative array into insert query string
 * @param $data - associative array
 * @return string - prepared query
 */
function prepareQuery($data)
{
    $result = '';

    foreach ($data as $key=>$value)
    {
        $result .= "`$key` = '$value', ";
    }

    return empty($result) ? '' : substr($result, 0, -2);
}
