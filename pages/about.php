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

.page-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 24px;
}

.page-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 2.5rem 0 1rem;
}

.page-content p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.75;
    color: var(--text-dark, #172033);
    margin-bottom: 1.5rem;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.feature-card {
    background: white;
    border: 1px solid #e7dfc9;
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px -22px rgba(21, 56, 38, 0.35);
}

.feature-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 0 0 0.75rem;
}

.feature-card p {
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

    .page-content {
        padding: 40px 20px;
    }
}
</style>

<section class="page-hero">
    <p style="font-family: 'Poppins', sans-serif; font-size: 0.875rem; font-weight: 600; color: var(--indigo, #4F46E5); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">About Us</p>
    <h1>About <?php echo SITE_NAME; ?></h1>
    <p>A premier educational institution committed to excellence in education and holistic student development.</p>
</section>

<div class="page-content">
    <p class="text-lg leading-relaxed">
        <?php echo SITE_NAME; ?> is a premier educational institution committed to providing
        excellence in education. Located in <?php echo SITE_ADDRESS; ?>, our school follows the
        CBSE curriculum and focuses on holistic development of students.
    </p>

    <h2>Our Vision</h2>
    <p>
        To be a leading institution that nurtures young minds, fosters creativity, and prepares
        students to become responsible global citizens.
    </p>

    <h2>Our Mission</h2>
    <p>
        To provide quality education that develops intellectual, social, and emotional skills
        while maintaining strong ethical values and cultural heritage.
    </p>

    <div class="feature-grid">
        <div class="feature-card">
            <h3>Academic Excellence</h3>
            <p>Focus on strong foundation in all subjects with modern teaching methods.</p>
        </div>
        <div class="feature-card">
            <h3>Character Building</h3>
            <p>Emphasis on moral values, discipline, and personal development.</p>
        </div>
        <div class="feature-card">
            <h3>Modern Infrastructure</h3>
            <p>State-of-the-art facilities for comprehensive learning experience.</p>
        </div>
        <div class="feature-card">
            <h3>Experienced Faculty</h3>
            <p>Qualified and dedicated teachers committed to student success.</p>
        </div>
    </div>
</div>
</div>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>