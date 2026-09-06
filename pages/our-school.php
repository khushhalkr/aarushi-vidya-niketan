<?php
$page_title = 'Our School';
$page_subtitle = 'About Us';
$page_content = '
<div class="space-y-6">
    <p class="text-lg leading-relaxed">
        ' . SITE_NAME . ' is a premier educational institution committed to providing excellence in education. 
        Located in ' . SITE_ADDRESS . ', our school follows the CBSE curriculum and focuses on holistic development of students.
    </p>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">Our History</h2>
    <p class="leading-relaxed">
        Founded with a vision to provide quality education to the children of Semara Ramnagar and surrounding areas, 
        ' . SITE_NAME . ' has grown from a small institution to a full-fledged school offering education from Nursery to Class 10.
    </p>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">Our Campus</h2>
    <p class="leading-relaxed">
        Our school campus is equipped with modern facilities including smart classrooms, well-equipped laboratories, 
        a library, sports facilities, and activity rooms to support the overall development of our students.
    </p>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">Our Values</h2>
    <ul class="list-disc pl-6 space-y-2">
        <li>Academic Excellence</li>
        <li>Moral Integrity</li>
        <li>Social Responsibility</li>
        <li>Cultural Heritage</li>
        <li>Innovation and Creativity</li>
    </ul>
</div>
';

require_once __DIR__ . '/template.php';
?>