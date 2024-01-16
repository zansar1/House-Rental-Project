<?php
$host = 'localhost';
$db   = 'project4';
$user = 'postgres';
$pass = 'admin';

$dsn = "pgsql:host=$host;dbname=$db";
try {
    $pdo = new PDO($dsn, $user, $pass);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>
