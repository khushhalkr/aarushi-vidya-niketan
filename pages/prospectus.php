<?php
$page_title = 'Prospectus';
$page_subtitle = 'Admission';
$page_content = '
<div class="space-y-6">
    <p class="text-lg leading-relaxed">
        Our school prospectus contains detailed information about our institution, curriculum, 
        facilities, and admission process.
    </p>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">Prospectus Contents</h2>
    <ul class="list-disc pl-6 space-y-2">
        <li>School history and vision</li>
        <li>Academic programs and curriculum</li>
        <li>Facilities and infrastructure</li>
        <li>Faculty information</li>
        <li>Admission process and requirements</li>
        <li>Fee structure</li>
        <li>School rules and regulations</li>
        <li>Contact information</li>
    </ul>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">How to Obtain Prospectus</h2>
    <p class="leading-relaxed">
        Prospectus can be obtained from the school office during working hours or downloaded from 
        our website (coming soon).
    </p>
    
    <div class="mt-8 p-6 bg-green-gradient rounded-lg text-white">
        <h3 class="text-xl font-bold mb-2">Get Your Prospectus</h3>
        <p class="mb-4">Visit our school office or contact us to receive the complete prospectus.</p>
        <a href="/pages/contact.php" class="bg-gold px-6 py-2 rounded font-bold hover:opacity-90 inline-block">
            Contact Us
        </a>
    </div>
</div>
';

require_once __DIR__ . '/template.php';
?>