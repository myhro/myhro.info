<?php

header('Content-Type: text/plain; charset="UTF-8"');

if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER))
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
else
    $ip = $_SERVER['REMOTE_ADDR'];

echo $_SERVER['HTTP_USER_AGENT'] . PHP_EOL . PHP_EOL;
echo $ip . PHP_EOL;
