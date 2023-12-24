<?php 
	$conn = new mysqli("sql207.infinityfree.com", "if0_35668535", "xgtRPp7wEGP", "if0_35668535_laba6");
	if ($conn->connect_error)
    	die("Connection failed: " . $conn->connect_error);

	$sql="SELECT text_id, text, margin, duration, colour FROM text_parameters text_id;";

	$result = $conn->query($sql);
	$conn->close();

	if($result) {
		$data = array();
		while ($row = $result->fetch_assoc()) {
		    $data[] = $row;
		}
	} else
		die("Selection error");

	header('Content-Type: application/json');
	echo json_encode($data);
?>