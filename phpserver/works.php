<?php

require ('config/bootstrap.php');

echo $pug->render('../source/template/pages/works.pug', array(
    'title' => 'Hello World'
));
