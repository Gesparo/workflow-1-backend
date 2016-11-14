<?php

require ('config/bootstrap.php');

echo $pug->render('../source/template/pages/about.pug', array(
    'title' => 'Hello World'
));
