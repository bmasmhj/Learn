<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'conn.php';

$course_id = $_GET['course_id'];
$fe = "SELECT  * FROM courses WHERE course_id = '$course_id' ";
      $result = $con->query($fe);
      $data = [];
      if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($data , $row);
        }
    }
    echo json_encode($data);
?>
