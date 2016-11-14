<?php

use Pug\Pug;

require ('../vendor/autoload.php');

$pug = new Pug(array(
    'prettyprint' => true,
    'extension' => '.pug',
    'basedir' => '../source/template/pages',
    'cache' => 'cache'
));