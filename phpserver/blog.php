<?php
session_start();
require ('config/bootstrap.php');
require ('core/db.php');

echo $pug->render('../source/template/pages/blog.pug', array(
    'title' => 'Блог',
    'articles' => getArticles()
));

function getArticles()
{
    return convertResult(DB::Query("SELECT * FROM `articles` ORDER BY `date` DESC"));
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