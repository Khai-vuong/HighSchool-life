<?php
	$dbServername = "localhost";
	$dbUsername = "root";
	$dbPassword = "";
	$dbName = "highschool_life";

	$mysqli = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);

	if ($mysqli->connect_errno)
	{
		echo "Connect database không được bạn eyy: error description: " . $mysqli->connect_error;
		exit();
	}

	$query = $mysqli->query("SELECT * FROM " . $_POST['feature']);

	$result = $query->fetch_all(MYSQLI_ASSOC);

?>