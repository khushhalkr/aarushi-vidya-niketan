<?php
$page_title = 'Transportation';
$page_subtitle = 'Facilities';
$page_content = '
<div class="space-y-6">
    <p class="text-lg leading-relaxed">
        We provide safe and reliable transportation services for students covering major routes 
        in and around Ramnagar.
    </p>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">Transportation Features</h2>
    <ul class="list-disc pl-6 space-y-2">
        <li>GPS-enabled school buses</li>
        <li>Trained and experienced drivers</li>
        <li>Bus attendants for student safety</li>
        <li>Comfortable seating</li>
        <li>Regular maintenance of vehicles</li>
        <li>Multiple route coverage</li>
    </ul>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">Safety Measures</h2>
    <p class="leading-relaxed">
        All our buses comply with safety regulations. Drivers and attendants are trained in 
        safety protocols and emergency procedures.
    </p>
    
    <div class="mt-8 p-6 bg-green-gradient rounded-lg text-white">
        <h3 class="text-xl font-bold mb-2">For Transportation Enquiries</h3>
        <p class="mb-4">Contact our school office for route details and fee information.</p>
        <a href="tel:' . SITE_PHONE . '" class="bg-gold px-6 py-2 rounded font-bold hover:opacity-90 inline-block">
            Call Us
        </a>
    </div>
</div>
';

require_once __DIR__ . '/template.php';
?>