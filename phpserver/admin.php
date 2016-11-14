<?php

require ('config/bootstrap.php');

echo $pug->render('../source/template/pages/admin.pug', array(
    'title' => 'Hello World'
));
