<?php

// WARNING: NEVER DO THIS IN PRODUCTION
$servername = "localhost";
$username = "root";
$password = "";
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