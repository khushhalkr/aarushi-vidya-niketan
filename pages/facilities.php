<?php
session_start();
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/header.php';
?>

<div class="avn">
<style>
.page-hero {
    position: relative;
    padding: 120px 0 80px;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(192, 38, 211, 0.05) 100%);
    text-align: center;
}

.page-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: var(--navy-dark, #172554);
    margin: 0 0 1rem;
}

.page-hero p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    color: var(--text-muted, #64748B);
    max-width: 600px;
    margin: 0 auto;
}

.facilities-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 24px;
}

.facilities-content p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    line-height: 1.75;
    color: var(--text-dark, #172033);
    margin-bottom: 2rem;
}

.facilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}

.facility-card {
    background: white;
    border: 1px solid #e7dfc9;
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
}

.facility-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px -22px rgba(21, 56, 38, 0.35);
}

.facility-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 0 0 0.75rem;
}

.facility-card p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--text-muted, #64748B);
    margin: 0;
}

@media (max-width: 768px) {
    .page-hero {
        padding: 80px 0 60px;
    }

    .facilities-content {
        padding: 40px 20px;
    }

    .facilities-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<section class="page-hero">
    <p style="font-family: 'Poppins', sans-serif; font-size: 0.875rem; font-weight: 600; color: var(--indigo, #4F46E5); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">Facilities</p>
    <h1>School Facilities</h1>
    <p>World-class infrastructure for comprehensive learning experience</p>
</section>

<div class="facilities-content">
    <p><?php echo SITE_NAME; ?> provides world-class facilities to support the holistic development of students.</p>

    <div class="facilities-grid">
        <div class="facility-card">
            <h3>Smart Classrooms</h3>
            <p>Digital boards and multimedia tools for interactive learning</p>
        </div>
        <div class="facility-card">
            <h3>Science Labs</h3>
            <p>Well-equipped physics, chemistry, and biology laboratories</p>
        </div>
        <div class="facility-card">
            <h3>Computer Lab</h3>
            <p>Modern computers with internet and educational software</p>
        </div>
        <div class="facility-card">
            <h3>Library</h3>
            <p>Extensive collection of books and digital resources</p>
        </div>
        <div class="facility-card">
            <h3>Sports Facilities</h3>
            <p>Playground and equipment for various sports</p>
        </div>
        <div class="facility-card">
            <h3>Transportation</h3>
            <p>Safe and reliable school bus service</p>
        </div>
    </div>
</div>
</div>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>