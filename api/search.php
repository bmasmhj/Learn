<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'conn.php';
$q = $_GET['q'];
      $data = [];

if($q!==''){
$fe = "SELECT * 
FROM videos 
JOIN courses ON videos.course_id = courses.course_id
WHERE videos.title LIKE '%$q%' OR videos.video_id LIKE '%$q%' OR courses.name LIKE '%$q%'
  ";
      $result = $con->query($fe);
      if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($data , $row);
        }
    }
}
    echo json_encode($data);

?>
