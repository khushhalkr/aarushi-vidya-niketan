<?php
$page_title = 'Events & Activities';
$page_subtitle = 'Extra Curriculum';
$page_content = '
<div class="activity-page activity-page--events">
    <div class="activity-lead">
        <div class="activity-lead__copy">
            <span class="activity-eyebrow">A year in motion</span>
            <p class="activity-lead__text">Every term brings a new reason to gather, perform, explore and celebrate. Our calendar turns school life into memories students carry with them.</p>
            <div class="activity-stats">
                <div><strong>05</strong><span>Signature events</span></div>
                <div><strong>12</strong><span>Months of discovery</span></div>
                <div><strong>01</strong><span>School community</span></div>
            </div>
        </div>
        <div class="activity-lead__visual">
            <img src="/images/campus.jpeg" alt="Students and school campus" loading="lazy">
            <span class="activity-lead__label">Learn together</span>
        </div>
    </div>
    <div class="activity-grid">
        <section class="activity-panel">
            <span class="activity-panel__number">01</span>
            <h2>Annual highlights</h2>
            <div class="activity-list">
                <div><b>Annual Sports Meet</b><span>Energy, teamwork and house spirit.</span></div>
                <div><b>Cultural Function</b><span>A stage for every voice and tradition.</span></div>
                <div><b>Science Exhibition</b><span>Curiosity brought to life.</span></div>
                <div><b>Art &amp; Craft Exhibition</b><span>Imagination made visible.</span></div>
                <div><b>Annual Day Celebration</b><span>A proud finish to the school year.</span></div>
            </div>
        </section>
        <section class="activity-panel activity-panel--dark">
            <span class="activity-panel__number">02</span>
            <h2>Everyday moments</h2>
            <p>Weekly assemblies, house competitions, festivals, educational trips and guest lectures keep learning social, active and full of surprise.</p>
            <blockquote>“The best lessons often happen when the whole school comes together.”</blockquote>
            <a class="activity-text-link" href="/pages/gallery.php">Explore the gallery <span>&rarr;</span></a>
        </section>
    </div>
</div>
';

require_once __DIR__ . '/template.php';
?>