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

.message-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 24px;
}

.message-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 0 0 1.5rem;
}

.message-content p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.75;
    color: var(--text-dark, #172033);
    margin-bottom: 1.5rem;
}

.message-content .signature {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--indigo, #4F46E5);
    margin-top: 2rem;
}

.message-image {
    position: relative;
}

.message-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 18px 40px -22px rgba(21, 56, 38, 0.35);
}

.message-image::before {
    content: '';
    position: absolute;
    inset: -10px -10px auto auto;
    width: 70px;
    height: 70px;
    border-top: 4px solid var(--gold, #F5C451);
    border-right: 4px solid var(--gold, #F5C451);
    border-radius: 0 20px 0 0;
}

@media (max-width: 900px) {
    .message-layout {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .message-image {
        order: -1;
    }
}

@media (max-width: 768px) {
    .page-hero {
        padding: 80px 0 60px;
    }

    .message-layout {
        padding: 40px 20px;
    }
}
</style>

<section class="page-hero">
    <p style="font-family: 'Poppins', sans-serif; font-size: 0.875rem; font-weight: 600; color: var(--indigo, #4F46E5); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">About Us</p>
    <h1>Director's Message</h1>
    <p>Innovation in Education, Excellence in Life</p>
</section>

<div class="message-layout">
    <div class="message-content">
        <h2>Director's Message</h2>
        <p>Dear Parents, Students, and Well-wishers,</p>
        <p>In today's rapidly changing world, education must evolve to meet new challenges. Our school embraces innovative teaching methods while maintaining strong traditional values.</p>
        <p>We focus on developing critical thinking, creativity, and problem-solving skills that prepare students for success in the 21st century.</p>
        <p>Our commitment is to provide a safe, nurturing, and stimulating environment where every child can thrive academically, socially, and emotionally.</p>
        <p class="signature">Director<br><?php echo SITE_NAME; ?></p>
    </div>
    <div class="message-image">
        <img src="<?php echo IMAGES['director']; ?>" alt="Director">
    </div>
</div>
</div>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>