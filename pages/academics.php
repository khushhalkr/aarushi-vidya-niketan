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

.academics-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 24px;
}

.academics-content p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    line-height: 1.75;
    color: var(--text-dark, #172033);
    margin-bottom: 2rem;
}

.academics-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 2.5rem 0 1.5rem;
}

.programs-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.programs-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: var(--text-dark, #172033);
}

.programs-list li::before {
    content: '•';
    color: var(--indigo, #4F46E5);
    font-size: 1.5rem;
    line-height: 1;
}

.subjects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
}

.subject-item {
    padding: 1rem;
    background: rgba(79, 70, 229, 0.05);
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
    color: var(--text-dark, #172033);
    text-align: center;
    font-weight: 500;
}

@media (max-width: 768px) {
    .page-hero {
        padding: 80px 0 60px;
    }

    .academics-content {
        padding: 40px 20px;
    }

    .subjects-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
}
</style>

<section class="page-hero">
    <p style="font-family: 'Poppins', sans-serif; font-size: 0.875rem; font-weight: 600; color: var(--indigo, #4F46E5); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">Academics</p>
    <h1>Academic Programs</h1>
    <p>Comprehensive CBSE curriculum for holistic development</p>
</section>

<div class="academics-content">
    <p>At <?php echo SITE_NAME; ?>, we follow the CBSE curriculum designed to provide comprehensive education that meets national standards while preparing students for competitive examinations.</p>

    <h2>Academic Programs</h2>
    <ul class="programs-list">
        <li>Pre-Primary: Nursery, LKG, UKG</li>
        <li>Primary: Class 1-5</li>
        <li>Middle School: Class 6-8</li>
        <li>Secondary: Class 9-10</li>
    </ul>

    <h2>Teaching Methodology</h2>
    <p>We use a blend of traditional and modern teaching methods including smart classrooms, hands-on learning, project-based education, and regular assessments to ensure comprehensive understanding.</p>

    <h2>Subjects Offered</h2>
    <div class="subjects-grid">
        <div class="subject-item">English</div>
        <div class="subject-item">Hindi</div>
        <div class="subject-item">Mathematics</div>
        <div class="subject-item">Science</div>
        <div class="subject-item">Social Science</div>
        <div class="subject-item">Computer Science</div>
        <div class="subject-item">General Knowledge</div>
        <div class="subject-item">Art & Craft</div>
        <div class="subject-item">Music</div>
        <div class="subject-item">Physical Education</div>
        <div class="subject-item">Moral Science</div>
    </div>
</div>
</div>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>