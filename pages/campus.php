<?php
$page_title = 'Campus Gallery';
$page_subtitle = 'Gallery';
$page_content = '
<div class="space-y-6">
    <p class="text-lg leading-relaxed">
        Explore our beautiful campus through these photographs.
    </p>
    
    <div class="gallery-grid mt-8">
        <div class="gallery-item">
            <img src="/images/buildig.jpeg" alt="School Building" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">School Building</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/campus.jpeg" alt="School Campus" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">School Campus</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/campus garden.jpeg" alt="Green Campus" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Green Campus</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/chool campus.jpeg" alt="Campus View" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Campus View</h4>
            </div>
        </div>
    </div>
</div>
';

require_once __DIR__ . '/template.php';
?>