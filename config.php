<?php
// Database configuration for the backend endpoints.
define('DB_HOST', getenv('DB_HOST') ?: '127.0.0.1');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');
define('DB_NAME', getenv('DB_NAME') ?: 'aarushividyaniketan');

$conn = null;

if (extension_loaded('mysqli')) {
    mysqli_report(MYSQLI_REPORT_OFF);
    $connection = @new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if (!$connection->connect_errno) {
        $connection->set_charset('utf8mb4');
        $conn = $connection;
    }
}

function requireDatabaseConnection(): mysqli
{
    global $conn;

    if (!$conn) {
        http_response_code(503);
        echo json_encode([
            'success' => false,
            'message' => 'Database is unavailable. Start MySQL and import database.sql.'
        ]);
        exit;
    }

    return $conn;
}