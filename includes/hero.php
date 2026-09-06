<?php
require_once __DIR__ . '/config.php';
?>

<section class="hero-section">
    <?php foreach (HERO_SLIDER as $index => $img): ?>
        <img
            src="<?php echo $img; ?>"
            alt="AARUSHI VIDYA NIKETAN Campus <?php echo $index + 1; ?>"
            class="hero-slide <?php echo $index === 0 ? 'opacity-100' : 'opacity-0'; ?>"
            data-slide="<?php echo $index; ?>"
            loading="<?php echo $index === 0 ? 'eager' : 'lazy'; ?>"
        >
    <?php endforeach; ?>

    <div class="hero-overlay"></div>
    <div class="hero-particles"></div>

    <div class="hero-content container mx-auto">
        <div class="hero-content-wrapper">
            <p class="hero-eyebrow">
                <span class="hero-eyebrow-line"></span>
                Excellence in Education
            </p>

            <h2 class="hero-title">
                Shaping Young Minds
                <span class="hero-title-highlight">Building Bright Futures.</span>
            </h2>

            <p class="hero-school-name"><?php echo SITE_NAME; ?></p>
            <p class="hero-school-address"><?php echo SITE_ADDRESS; ?></p>

            <p class="hero-description">
                We provide a nurturing and modern learning environment where students grow with
                knowledge, confidence, discipline and creativity.
            </p>

            <div class="hero-actions">
                <a href="/pages/admission.php" class="btn btn-primary btn-lg hero-btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    <span>View Admissions</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </a>
                <a href="/pages/about.php" class="btn btn-secondary btn-lg hero-btn-secondary">
                    <span>Download Prospectus</span>
                </a>
            </div>

            <ul class="hero-features">
                <li class="hero-feature">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Academic Excellence</span>
                </li>
                <li class="hero-feature">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Experienced Faculty</span>
                </li>
                <li class="hero-feature">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Holistic Development</span>
                </li>
            </ul>
        </div>
    </div>

    <!-- Slider Indicators -->
    <div class="hero-indicators">
        <?php foreach (HERO_SLIDER as $index => $img): ?>
            <button type="button" class="hero-indicator <?php echo $index === 0 ? 'is-active' : ''; ?>" data-slide="<?php echo $index; ?>" aria-label="Slide <?php echo $index + 1; ?>"></button>
        <?php endforeach; ?>
    </div>
</section>

<script>
    // Hero slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('opacity-0');
                slide.classList.add('opacity-100');
            } else {
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');
            }
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('is-active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    // Auto-advance slides every 5 seconds
    const slideInterval = setInterval(nextSlide, 5000);

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideInterval);
            goToSlide(index);
        });
    });

    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSection.addEventListener('mouseleave', () => {
        setInterval(nextSlide, 5000);
    });
</script>