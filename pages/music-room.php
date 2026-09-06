<?php
$page_title = 'Music Room';
$page_subtitle = 'Extra Curriculum';
$page_content = '
<div class="activity-page activity-page--music">
    <div class="activity-lead">
        <div class="activity-lead__copy">
            <span class="activity-eyebrow">Find your rhythm</span>
            <p class="activity-lead__text">A warm, focused space where students listen closely, practise bravely and discover the confidence that comes from making something beautiful.</p>
            <div class="activity-stats">
                <div><strong>05</strong><span>Core facilities</span></div>
                <div><strong>04</strong><span>Instrument paths</span></div>
                <div><strong>∞</strong><span>Ways to express</span></div>
            </div>
        </div>
        <div class="activity-lead__visual">
            <img src="/images/library.jpeg" alt="Creative learning space at school" loading="lazy">
            <span class="activity-lead__label">Listen deeply</span>
        </div>
    </div>
    <div class="activity-grid">
        <section class="activity-panel">
            <span class="activity-panel__number">01</span>
            <h2>Inside the room</h2>
            <div class="activity-list">
                <div><b>Instrument collection</b><span>Tabla, harmonium, keyboard and guitar.</span></div>
                <div><b>Sound system</b><span>Clear playback for practice and performance.</span></div>
                <div><b>Practice corners</b><span>Room to focus, repeat and improve.</span></div>
                <div><b>Sheet music library</b><span>Ideas and inspiration at every level.</span></div>
                <div><b>Trained guidance</b><span>Patient teachers who help talent grow.</span></div>
            </div>
        </section>
        <section class="activity-panel activity-panel--dark">
            <span class="activity-panel__number">02</span>
            <h2>Training with purpose</h2>
            <p>Students explore vocal training, instrumental music and music theory through regular practice, guided sessions and joyful performances.</p>
            <blockquote>“Practice gives talent a voice.”</blockquote>
            <a class="activity-text-link" href="/pages/music-dance.php">See music &amp; dance <span>&rarr;</span></a>
        </section>
    </div>
</div>
';

require_once __DIR__ . '/template.php';
?>