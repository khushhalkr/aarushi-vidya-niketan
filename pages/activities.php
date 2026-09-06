<?php
$page_title = 'Activities Gallery';
$page_subtitle = 'Gallery';
$page_content = '
<div class="space-y-6">
    <p class="text-lg leading-relaxed">
        Explore the various activities and events at our school.
    </p>
    
    <div class="gallery-grid mt-8">
        <div class="gallery-item">
            <img src="/images/WhatsApp Image 2026-08-19 at 10.56.25 AM (1).jpeg" alt="Dance Activity" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Dance Activity</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/WhatsApp Image 2026-08-19 at 10.56.25 AM.jpeg" alt="Music Room" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Music Room</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/WhatsApp Image 2026-08-19 at 10.56.26 AM.jpeg" alt="Art & Craft" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Art & Craft</h4>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/WhatsApp Image 2026-08-19 at 10.56.23 AM (1).jpeg" alt="Play Room" loading="lazy">
            <div class="gallery-caption">
                <h4 class="font-bold">Play Room</h4>
            </div>
        </div>
    </div>
</div>
';

require_once __DIR__ . '/template.php';
?>