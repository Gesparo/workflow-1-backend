<?php
session_start();
require ('config/bootstrap.php');
require ('core/db.php');

$works = getWorks();

echo $pug->render('../source/template/pages/works.pug', array(
    'title' => 'Мои работы',
    'works' => $works,
    'lengthOfWorks' => count($works)
));

function getWorks()
{
    return convertResult(DB::Query("SELECT * FROM `works`"));
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