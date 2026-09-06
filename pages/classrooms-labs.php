<?php
$page_title = 'Classrooms & Labs';
$page_subtitle = 'Gallery';
$page_content = '
<div class="space-y-6">
    <p class="text-lg leading-relaxed">
        View our modern classrooms and well-equipped laboratories.
    </p>
    
    <div class="gallery-grid mt-8">
        <div class="gallery-item">
            <img src="/images/WhatsApp Image 2026-08-19 at 10.56.23 AM (1).jpeg" alt="Smart Class" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Smart Class</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/physics lab.jpeg" alt="Physics Lab" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Physics Lab</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/chemistry lab.jpeg" alt="Chemistry Lab" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Chemistry Lab</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/computer lab.jpeg" alt="Computer Lab" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Computer Lab</h4>
            </div>
        </div>
    </div>
</div>
';

require_once __DIR__ . '/template.php';
?>