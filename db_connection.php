<?php

// WARNING: NEVER DO THIS IN PRODUCTION
$servername = "37.10.113.3";
$username = "Project5";
$password = "Project5123";
$database = "news";

$conn = new mysqli($servername, $username, $password, $database);

echo $conn->connect_error;
// check the connection
if ($conn->connect_error) {
    // exit and kill this process
    echo "Failed to connect to database!";
    die("Connection failed: ");
}

?>