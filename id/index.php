<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!--
// Web Browser Identifier
// Written by Marcin Krol <hawk@limanowa.net>
// License: GPL
-->

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Web Browser Identifier</title>
  <style type="text/css">
    body {
      font-family: Arial, Verdana, Helvetica, sans-serif;
      color: #000000;
      background-color: #DDD99F;
      text-align: center;
      }
    input[type="text"] {
      background-color: #E5E5E5;
      color: #000000;
      padding: 2px;
      border: 1px dotted #808080;
      }
    input[type="button"], input[type="submit"] {
      background-color: #E5E5E5;
      color: #000000;
      padding: 2px;
      border-top: 1px solid #C0C0C0;
      border-left: 1px solid #C0C0C0;
      border-right: 1px solid #808080;
      border-bottom: 1px solid #808080;
    }
  </style>
</head>

<body>
<h3>Web Browser Identifier</h3>

<?php
require "client_info.inc";
$client_data = parse_user_agent($_GET['uagent'] ? $_GET['uagent'] : $_SERVER['HTTP_USER_AGENT']);
if(!$client_data['browser'])
  { $client_data['browser'] = "unknown browser"; }
if(!$client_data['system'])
  { $client_data['system'] = "unknown system"; }
?>

<p>
  Detection result:
</p>
<table align="center" border="0" cellspacing="3" cellpadding="5" width="350">
  <tr>
    <td>
      <i><?php print $client_data['browser']; ?></i>
    </td>
    <td>
      <i><?php print $client_data['system']; ?></i>
    </td>
  </tr>
  <tr>
    <td>
      <img border="0" src="images/large/icon_<?php print $client_data['browser_icon']; ?>.png" align="top" alt="browser_icon">
    </td>
    <td>
      <img border="0" src="images/large/icon_<?php print $client_data['system_icon']; ?>.png" align="top" alt="system_icon">
    </td>
  </tr>
</table>
</p>
<form action="<?php print $script_name;  ?>" method="get">
<input name="uagent" type="text" size="75" maxlength="250" value="<?php print ($_GET['uagent'] ? $_GET['uagent'] : $_SERVER['HTTP_USER_AGENT']); ?>">
<br><br><input type="submit" value="Identify">
</form>
</body>
</html>
