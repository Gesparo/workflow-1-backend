<?php
session_start();
require ('core/User.php');
require ('config/bootstrap.php');

$user = new User();

if(!$user->get_access())
{
    header("Location: index.php");
}

echo $pug->render('../source/template/pages/admin.pug', array(
    'title' => 'Hello World'
));
