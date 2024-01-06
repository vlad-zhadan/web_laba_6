<?php 
	require_once 'config.php';
	$conn = new mysqli(HOST_NAME, USER_NAME, PASSWORD, DATABASE);
	if ($conn->connect_error)
    	die("Connection failed: " . $conn->connect_error);
    				
    $text = mysqli_real_escape_string($conn, $_POST['text']);
    $margin = mysqli_real_escape_string($conn, $_POST['margin']);
    $duration = mysqli_real_escape_string($conn, $_POST['duration']);
    $colour = mysqli_real_escape_string($conn, $_POST['colour']);


	$sql="INSERT INTO text_parameters( text, margin, duration, colour) VALUES('$text', '$margin', '$duration', '$colour');";
	if($conn->query($sql))
		echo "Data saved";
	else
		echo "Saving error";
	$conn->close();
?>