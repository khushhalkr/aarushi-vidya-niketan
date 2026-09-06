<?php
require_once __DIR__ . '/config.php';
?>

<footer class="avn-footer">

    <div class="avn-footer__inner">

        <div class="avn-footer__grid">

            <!-- ============ BRAND / ABOUT ============ -->
            <div class="avn-col avn-col--brand">
                <div class="avn-brand">
                    <img src="<?php echo IMAGES['logo']; ?>" alt="Aarushi Vidya Niketan logo" class="avn-brand__logo">
                    <div class="avn-brand__text">
                        <h3 class="avn-brand__name"><?php echo SITE_NAME; ?></h3>
                        <p class="avn-brand__tagline">Build Future</p>
                        <p class="avn-brand__motto"><?php echo SITE_TAGLINE; ?></p>
                    </div>
                </div>

                <p class="avn-brand__desc">
                    A CBSE curriculum school nurturing knowledge, confidence, discipline and creativity in every learner.
                </p>

                <div class="avn-badges">
                    <div class="avn-badge">
                        <span class="avn-badge__icon">
                            <svg viewBox="0 0 24 24"><path d="M12 4.5C9.5 3 6.5 2.5 4 3v14c2.5-.5 5.5 0 8 1.5 2.5-1.5 5.5-2 8-1.5V3c-2.5-.5-5.5 0-8 1.5Z"/><path d="M12 4.5v15"/></svg>
                        </span>
                        <span>Quality Education</span>
                    </div>
                    <div class="avn-badge">
                        <span class="avn-badge__icon">
                            <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6"/><circle cx="17" cy="9" r="2.3"/><path d="M15.5 13.2c2.6.3 4.5 2.3 4.5 4.8"/></svg>
                        </span>
                        <span>Holistic Development</span>
                    </div>
                    <div class="avn-badge">
                        <span class="avn-badge__icon">
                            <svg viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 4.6 3.4 8.5 8 9 4.6-.5 8-4.4 8-9V6l-8-3Z"/><path d="M9 12l2 2 4-4"/></svg>
                        </span>
                        <span>Safe &amp; Supportive</span>
                    </div>
                    <div class="avn-badge">
                        <span class="avn-badge__icon">
                            <svg viewBox="0 0 24 24"><path d="M4 20V10"/><path d="M10 20V6"/><path d="M16 20v-9"/><path d="M22 20V3"/></svg>
                        </span>
                        <span>Future Ready</span>
                    </div>
                </div>

                <p class="avn-brand__pull">Better Students, Brighter Futures</p>
            </div>

            <!-- ============ QUICK LINKS ============ -->
            <div class="avn-col">
                <h4 class="avn-col__title">Quick Links</h4>
                <ul class="avn-links">
                    <li><a href="/index.php">Home</a></li>
                    <li><a href="/pages/academics.php">Academics</a></li>
                    <li><a href="/pages/facilities.php">Facilities</a></li>
                    <li><a href="/pages/extra-curriculum.php">Extra Curriculum</a></li>
                    <li><a href="/pages/contact.php">Contact Us</a></li>
                </ul>
            </div>

            <!-- ============ USEFUL LINKS ============ -->
            <div class="avn-col">
                <h4 class="avn-col__title">Useful Links</h4>
                <ul class="avn-links">
                    <li><a href="/pages/about.php">About Us</a></li>
                    <li><a href="/pages/admission.php">Admission</a></li>
                    <li><a href="/pages/gallery.php">Gallery</a></li>
                    <li><a href="/pages/mandatory-details.php">Mandatory Details</a></li>
                </ul>
            </div>

            <!-- ============ CONTACT US ============ -->
            <div class="avn-col">
                <h4 class="avn-col__title">Contact Us</h4>
                <ul class="avn-contact">
                    <li>
                        <span class="avn-contact__icon">
                            <svg viewBox="0 0 24 24"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.3"/></svg>
                        </span>
                        <span><?php echo SITE_ADDRESS; ?></span>
                    </li>
                    <li>
                        <span class="avn-contact__icon">
                            <svg viewBox="0 0 24 24"><path d="M4 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 1-2Z"/></svg>
                        </span>
                        <a href="tel:+91<?php echo SITE_WHATSAPP; ?>"><?php echo SITE_PHONE; ?></a>
                    </li>
                    <li>
                        <span class="avn-contact__icon">
                            <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 6 8 7 8-7"/></svg>
                        </span>
                        <a href="mailto:<?php echo SITE_EMAIL; ?>"><?php echo SITE_EMAIL; ?></a>
                    </li>
                    <li>
                        <span class="avn-contact__icon">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                        </span>
                        <span>Mon&nbsp;-&nbsp;Sat: 8:00&nbsp;AM&nbsp;-&nbsp;4:00&nbsp;PM</span>
                    </li>
                </ul>

                <h4 class="avn-col__title avn-col__title--sm">Follow Us</h4>
                <div class="avn-social">
                    <a href="#" class="avn-social__link avn-social__link--fb" aria-label="Facebook">
                        <svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9c0-.4.3-1 1-1Z"/></svg>
                    </a>
                    <a href="#" class="avn-social__link avn-social__link--ig" aria-label="Instagram">
                        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="1"/></svg>
                    </a>
                    <a href="#" class="avn-social__link avn-social__link--yt" aria-label="YouTube">
                        <svg viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="12" rx="3"/><path d="M10.5 9.5v5l4.5-2.5Z" fill="#fff"/></svg>
                    </a>
                    <a href="#" class="avn-social__link avn-social__link--li" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8.5" r="1.4" fill="#fff"/><path d="M6.8 11h2.4v7H6.8Zm4.5 0h2.3v1c.5-.8 1.4-1.2 2.4-1.2 1.9 0 2.9 1.2 2.9 3.5V18h-2.4v-3.2c0-.9-.4-1.5-1.2-1.5-.7 0-1.2.5-1.2 1.5V18h-2.4Z" fill="#fff"/></svg>
                    </a>
                    <a href="https://wa.me/<?php echo SITE_WHATSAPP; ?>" class="avn-social__link avn-social__link--wa" aria-label="WhatsApp">
                        <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"/><path d="M8.8 8.2c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7.1.1.1.3 0 .4-.1.2-.2.3-.3.4l-.4.5c-.1.1-.2.3-.1.5.2.4.8 1.2 1.6 1.9.9.8 1.6 1 1.9 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.3.1.4-.1 1.2-.5 1.6-.5.6-1.6.9-2.6.6-1.5-.4-3.2-1.4-4.5-2.8-1.1-1.2-1.8-2.4-2.1-3.6-.2-.9 0-1.7.5-2.3Z" fill="#fff"/></svg>
                    </a>
                </div>
            </div>

            <!-- ============ OUR LOCATION ============ -->
            <div class="avn-col avn-col--map">
                <h4 class="avn-col__title">Our Location</h4>
                <div class="avn-map">
                    <iframe
                        src="https://www.google.com/maps?q=Aarushi+Vidya+Niketan,+Mujara,+Ramnagar,+West+Champaran,+Bihar+845106&output=embed"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Aarushi Vidya Niketan location map">
                    </iframe>
                </div>
                <a class="avn-directions" href="https://www.google.com/maps/dir/?api=1&destination=Aarushi+Vidya+Niketan,+Mujara,+Ramnagar,+West+Champaran,+Bihar+845106" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24"><path d="M3 11 20 4l-7 17-2.5-6.5L3 11Z"/></svg>
                    Get Directions
                    <span class="avn-directions__arrow">&rarr;</span>
                </a>
            </div>

        </div>

        <!-- ============ BOTTOM BAR ============ -->
        <div class="avn-footer__bottom">
            <p class="avn-copy">&copy; <?php echo date('Y'); ?> <?php echo SITE_NAME; ?>. All rights reserved.</p>

            <p class="avn-dev">Developed by <a href="https://www.ranjantechnovate.com" target="_blank" rel="noopener">Ranjan Technovate</a></p>

            <ul class="avn-pillars">
                <li>Discipline</li>
                <li>Knowledge</li>
                <li>Character</li>
                <li>Success</li>
            </ul>

            <button type="button" class="avn-totop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Back to top">
                <svg viewBox="0 0 24 24"><path d="M12 19V5"/><path d="m6 11 6-6 6 6"/></svg>
                <span>Back to Top</span>
            </button>
        </div>

    </div>

    <!-- Bottom Wave Divider -->
    <div class="avn-footer__wave avn-footer__wave--bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path d="M0,50 C240,0 480,90 720,65 C960,40 1200,80 1440,45 L1440,90 L0,90 Z"></path>
        </svg>
    </div>

</footer>

<!-- Premium Floating Action Buttons -->
<div class="avn-floating-actions">
    <!-- WhatsApp Button -->
    <a href="https://wa.me/<?php echo SITE_WHATSAPP; ?>"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Contact us on WhatsApp"
       class="avn-fab avn-fab--whatsapp">
        <div class="avn-fab__pulse"></div>
        <svg viewBox="0 0 24 24" fill="currentColor" class="avn-fab__icon">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/>
            <path d="M16.8 14.6C16.5 14.3 15.2 13.6 14.9 13.5C14.6 13.4 14.4 13.3 14.2 13.6C14 13.9 13.4 14.5 13.2 14.7C13 14.9 12.8 14.9 12.5 14.7C12.2 14.5 11.3 14.2 10.2 13.2C9.3 12.4 8.7 11.4 8.5 11.1C8.3 10.8 8.4 10.6 8.6 10.4C8.7 10.3 8.9 10.1 9.1 9.9C9.3 9.7 9.4 9.5 9.5 9.3C9.6 9.1 9.5 8.9 9.4 8.7C9.3 8.5 8.8 7.2 8.6 6.7C8.4 6.2 8.2 6.3 8.1 6.3H7.6C7.4 6.3 7.1 6.4 6.8 6.7C6.5 7 5.7 7.7 5.7 9.2C5.7 10.7 6.8 12.2 7 12.4C7.2 12.6 9.5 16 13 17.4C13.6 17.7 14 17.8 14.4 17.9C14.8 18 15.1 18 15.4 17.9C15.8 17.8 16.9 17.2 17.1 16.5C17.3 15.8 17.3 15.2 17.2 15.1C17.1 15 16.9 14.9 16.8 14.6Z" fill="#fff"/>
        </svg>
        <span class="avn-fab__tooltip">Chat with us</span>
    </a>

    <!-- Back to Top Button -->
    <button type="button"
            onclick="window.scrollTo({top:0,behavior:'smooth'})"
            aria-label="Back to top"
            class="avn-fab avn-fab--totop">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 19V5"/>
            <path d="m6 11 6-6 6 6"/>
        </svg>
        <span class="avn-fab__tooltip">Back to top</span>
    </button>
</div>

<script>
// Footer scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.avn-footer');
    const footerCols = document.querySelectorAll('.avn-col');
    const backToTop = document.querySelector('.avn-fab--totop');
    
    // Scroll reveal using IntersectionObserver
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('footer-visible');
                
                // Animate columns with stagger delay
                footerCols.forEach((col, index) => {
                    setTimeout(() => {
                        col.classList.add('footer-col-visible');
                    }, index * 100);
                });
                
                footerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (footer) {
        footerObserver.observe(footer);
    }
    
    // Back to Top button
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('avn-fab--visible');
            } else {
                backToTop.classList.remove('avn-fab--visible');
            }
        });
    }
});
</script>