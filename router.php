<?php
// Simple PHP Router to handle page routing

// Get the current path
$requestUri = $_SERVER['REQUEST_URI'];
$path = parse_url($requestUri, PHP_URL_PATH);
$path = urldecode($path);

// Remove leading/trailing slashes and query string
$path = trim($path, '/');
$path = explode('?', $path)[0];

// Let PHP's built-in server serve existing files such as CSS, images, and APIs.
if ($path !== '' && is_file(__DIR__ . '/' . $path)) {
    return false;
}

// Define routes
$routes = [
    '' => 'index.php',
    'home' => 'index.php',
    'about' => 'pages/about.php',
    'our-school' => 'pages/our-school.php',
    'principal' => 'pages/principal.php',
    'chairman' => 'pages/chairman.php',
    'director' => 'pages/director.php',
    'our-aim' => 'pages/our-aim.php',
    'academics' => 'pages/academics.php',
    'smart-classes' => 'pages/smart-classes.php',
    'science-labs' => 'pages/science-labs.php',
    'computer-lab' => 'pages/computer-lab.php',
    'library' => 'pages/library.php',
    'mathematics-lab' => 'pages/mathematics-lab.php',
    'admission' => 'pages/admission.php',
    'admission-process' => 'pages/admission-process.php',
    'fee-structure' => 'pages/fee-structure.php',
    'prospectus' => 'pages/prospectus.php',
    'facilities' => 'pages/facilities.php',
    'transportation' => 'pages/transportation.php',
    'sports' => 'pages/sports.php',
    'music-dance' => 'pages/music-dance.php',
    'art-craft' => 'pages/art-craft.php',
    'safety-care' => 'pages/safety-care.php',
    'gallery' => 'pages/gallery.php',
    'campus' => 'pages/campus.php',
    'classrooms-labs' => 'pages/classrooms-labs.php',
    'activities' => 'pages/activities.php',
    'extra-curriculum' => 'pages/extra-curriculum.php',
    'events-activities' => 'pages/events-activities.php',
    'music-room' => 'pages/music-room.php',
    'dance-activity-room' => 'pages/dance-activity-room.php',
    'play-room' => 'pages/play-room.php',
    'mandatory-details' => 'pages/mandatory-details.php',
    'contact' => 'pages/contact.php',
];

// Route the request
if (array_key_exists($path, $routes)) {
    $file = $routes[$path];
    $filePath = __DIR__ . '/' . $file;
    if (file_exists($filePath)) {
        include $filePath;
    } else {
        // If file doesn't exist, try to create it from the route
        include __DIR__ . '/index.php';
    }
} else {
    // 404 - Page not found
    http_response_code(404);
    include __DIR__ . '/pages/404.php';
}
?>