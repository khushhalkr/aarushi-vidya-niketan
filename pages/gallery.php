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

.gallery-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 24px;
}

.gallery-content p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    line-height: 1.75;
    color: var(--text-dark, #172033);
    margin-bottom: 2rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}

.gallery-item {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 4/3;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.02);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
}

.gallery-item:hover img {
    filter: brightness(1.05);
}

.gallery-caption {
    position: absolute;
    inset: auto 0 0 0;
    padding: 1.5rem;
    background: linear-gradient(to top, rgba(23, 37, 84, 0.9), transparent);
    color: white;
    transform: translateY(8px);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-caption {
    transform: translateY(0);
}

.gallery-caption h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
}

.gallery-caption p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    opacity: 0.9;
    margin: 0;
}

@media (max-width: 768px) {
    .page-hero {
        padding: 80px 0 60px;
    }

    .gallery-content {
        padding: 40px 20px;
    }

    .gallery-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
}
</style>

<section class="page-hero">
    <p style="font-family: 'Poppins', sans-serif; font-size: 0.875rem; font-weight: 600; color: var(--indigo, #4F46E5); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">Gallery</p>
    <h1>Photo Gallery</h1>
    <p>Explore our campus and activities through our photo gallery</p>
</section>

<div class="gallery-content">
    <p>Explore our campus and activities through our photo gallery.</p>

    <div class="gallery-grid">
        <div class="gallery-item">
            <img src="/images/buildig.jpeg" alt="School Building" loading="lazy">
            <div class="gallery-caption">
                <h4>School Building</h4>
                <p>Campus</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/campus garden.jpeg" alt="Green Campus" loading="lazy">
            <div class="gallery-caption">
                <h4>Green Campus</h4>
                <p>Campus</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/computer lab.jpeg" alt="Computer Lab" loading="lazy">
            <div class="gallery-caption">
                <h4>Computer Lab</h4>
                <p>Classrooms</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src="/images/library.jpeg" alt="Library" loading="lazy">
            <div class="gallery-caption">
                <h4>Library</h4>
                <p>Classrooms</p>
            </div>
        </div>
    </div>
</div>
</div>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>