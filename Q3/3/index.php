<?php

$myfile = fopen('file.txt', 'w');
$txt = "Hi, I am Yash, Roll no A003 from batch B1 & currently pursuing MCA from MPSTME";
fwrite($myfile, $txt);
fclose($myfile);
echo "Check your file explorer current directory"

?> 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h1>Heloo wold</h1>
</body>
</html>
