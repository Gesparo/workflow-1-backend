<?php

require ('config/bootstrap.php');

echo $pug->render('../source/template/pages/index.pug', array(
    'title' => 'Hello World'
));
