<?php
$page_title = 'Fee Structure';
$page_subtitle = 'Admission';
$page_content = '
<div class="space-y-6">
    <p class="text-lg leading-relaxed">
        Our fee structure is designed to be reasonable and transparent. Please contact the school 
        office for detailed fee information.
    </p>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">Fee Components</h2>
    <ul class="list-disc pl-6 space-y-2">
        <li>Admission Fee (one-time)</li>
        <li>Tuition Fee (annual/quarterly)</li>
        <li>Development Fee</li>
        <li>Lab Fee (for science and computer labs)</li>
        <li>Library Fee</li>
        <li>Sports Fee</li>
        <li>Transportation Fee (optional)</li>
    </ul>
    
    <h2 class="text-2xl font-bold text-green-deep mt-8">Payment Modes</h2>
    <p class="leading-relaxed">
        Fees can be paid in cash, cheque, or through online payment methods. EMI options may be 
        available for certain fee components.
    </p>
    
    <div class="mt-8 p-6 bg-green-gradient rounded-lg text-white">
        <h3 class="text-xl font-bold mb-2">For Detailed Fee Information</h3>
        <p class="mb-4">Please contact our school office or call us at ' . SITE_PHONE . '</p>
        <a href="tel:' . SITE_PHONE . '" class="bg-gold px-6 py-2 rounded font-bold hover:opacity-90 inline-block">
            Call Us
        </a>
    </div>
</div>
';

require_once __DIR__ . '/template.php';
?>