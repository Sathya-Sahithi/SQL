<?php
$host = 'localhost';
$db = 'data_visualization';
$user = 'your_username';
$pass = 'your_password';

$dsn = "pgsql:host=$host;port=5432;dbname=$db;";
try {
    $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>
