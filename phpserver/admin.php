<?php
session_start();
require ('core/User.php');
require ('config/bootstrap.php');
require ('core/db.php');

$user = new User();

if(!$user->get_access())
{
    header("Location: index.php");
}

echo $pug->render('../source/template/pages/admin.pug', array(
    'title' => 'Welcome',
    'skills' => getAllSkills()
));


function getAllSkills()
{
    return convertResult( DB::Query("SELECT * FROM `skills`") );
}

function convertResult($data)
{
    $result = [];

    while ($row = mysqli_fetch_assoc($data))
    {
        $result[] = $row;
    }

    return $result;
}