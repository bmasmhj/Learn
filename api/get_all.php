<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'conn.php';
$of = $_GET['offset'];
$fe = "SELECT  * FROM videos LIMIT 20  OFFSET $of";
      $result = $con->query($fe);
      $data = [];
      if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($data , $row);
        }
    }
    echo json_encode($data);
?>
