<?php
// Site Configuration
define('SITE_NAME', 'AARUSHI VIDYA NIKETAN');
define('SITE_TAGLINE', 'Inspire to Dream... Learn to Lead with Excellence');
define('SITE_PHONE', '9625126057');
define('SITE_WHATSAPP', '919625126057');
define('SITE_EMAIL', 'asa082994@gmail.com');
define('SITE_ADDRESS', 'Mujara, Ramnagar, West Champaran, Bihar, 845106');
define('SITE_UDISE', '10011210002');
define('SITE_REGNO', '20310142021107130432');

// Image paths
define('IMAGES', [
    'logo' => '/images/logo.png',
    'hero' => '/images/campus.jpeg',
    'principal' => '/images/principal.jpeg',
    'chairman' => '/images/director.jpeg',
    'director' => '/images/director.jpeg',
    'hygiene' => '/images/campus garden.jpeg',
]);

// Hero slider images
define('HERO_SLIDER', [
    '/images/buildig.jpeg',
    '/images/campus.jpeg',
    '/images/chool campus.jpeg',
    '/images/campus garden.jpeg',
]);

// Navigation structure
define('NAVIGATION', [
    ['label' => 'Home', 'href' => '/index.php'],
    [
        'label' => 'About Us',
        'href' => '/pages/about.php',
        'children' => [
            ['label' => 'Our School', 'href' => '/pages/our-school.php'],
            ['label' => 'Principal\'s Message', 'href' => '/pages/principal.php'],
            ['label' => 'Chairman\'s Message', 'href' => '/pages/chairman.php'],
            ['label' => 'Director\'s Message', 'href' => '/pages/director.php'],
            ['label' => 'Our Aim', 'href' => '/pages/our-aim.php'],
        ]
    ],
    [
        'label' => 'Academics',
        'href' => '/pages/academics.php',
        'children' => [
            ['label' => 'Smart Classes', 'href' => '/pages/smart-classes.php'],
            ['label' => 'Science Labs', 'href' => '/pages/science-labs.php'],
            ['label' => 'Computer Lab', 'href' => '/pages/computer-lab.php'],
            ['label' => 'Library', 'href' => '/pages/library.php'],
            ['label' => 'Mathematics Lab', 'href' => '/pages/mathematics-lab.php'],
        ]
    ],
    [
        'label' => 'Admission',
        'href' => '/pages/admission.php',
        'children' => [
            ['label' => 'Admission Process', 'href' => '/pages/admission-process.php'],
            ['label' => 'Fee Structure', 'href' => '/pages/fee-structure.php'],
            ['label' => 'Prospectus', 'href' => '/pages/prospectus.php'],
        ]
    ],
    [
        'label' => 'Facilities',
        'href' => '/pages/facilities.php',
        'children' => [
            ['label' => 'Transportation', 'href' => '/pages/transportation.php'],
            ['label' => 'Sports & Playground', 'href' => '/pages/sports.php'],
            ['label' => 'Music & Dance', 'href' => '/pages/music-dance.php'],
            ['label' => 'Art & Craft', 'href' => '/pages/art-craft.php'],
            ['label' => 'Safety & Care', 'href' => '/pages/safety-care.php'],
        ]
    ],
    [
        'label' => 'Gallery',
        'href' => '/pages/gallery.php',
        'children' => [
            ['label' => 'Campus', 'href' => '/pages/campus.php'],
            ['label' => 'Classrooms & Labs', 'href' => '/pages/classrooms-labs.php'],
            ['label' => 'Activities', 'href' => '/pages/activities.php'],
        ]
    ],
    [
        'label' => 'Extra Curriculum',
        'href' => '/pages/extra-curriculum.php',
        'children' => [
            ['label' => 'Events & Activities', 'href' => '/pages/events-activities.php'],
            ['label' => 'Music Room', 'href' => '/pages/music-room.php'],
            ['label' => 'Dance / Activity Room', 'href' => '/pages/dance-activity-room.php'],
            ['label' => 'Play Room', 'href' => '/pages/play-room.php'],
        ]
    ],
    ['label' => 'Mandatory Details', 'href' => '/pages/mandatory-details.php'],
    ['label' => 'Contact Us', 'href' => '/pages/contact.php'],
]);

// Current page helper
function getCurrentPage() {
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    return trim($path, '/');
}

// Check if current page matches
function isCurrentPage($href) {
    $current = getCurrentPage();
    $href = trim($href, '/');
    return $current === $href || ($current === '' && $href === '');
}
?>