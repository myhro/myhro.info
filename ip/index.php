<?php

header('Content-Type: text/plain; charset="UTF-8"');

if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER)) {
    $x_forwarded_for = $_SERVER['HTTP_X_FORWARDED_FOR'];
    $ips_list = explode(',', $x_forwarded_for);
    $ip = array_shift($ips_list);
}
else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

echo $_SERVER['HTTP_USER_AGENT'] . PHP_EOL . PHP_EOL;
echo $ip . PHP_EOL;
