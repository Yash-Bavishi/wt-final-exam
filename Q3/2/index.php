<?php

$d = (int)date("H");

if ($d >= 4 && $d < 12) {
  echo "Good Morning";
} elseif ($d >= 12 && $d < 16) {
  echo "Good Afternoon";
} elseif ($d >= 16 && $d < 22) {
  echo "Good Evening";
} elseif ($d >= 22 && $d < 4) {
  echo "Good Night";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h1>hello world</h1>
</body>
</html>
