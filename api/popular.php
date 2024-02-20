<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'conn.php';
$fe = "SELECT  * FROM courses ORDER BY rand() LIMIT 4 ";
      $result = $con->query($fe);
      $data = [];
      if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($data , $row);
        }
    }
    echo json_encode($data);
?>
