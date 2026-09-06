<?php
require_once __DIR__ . '/config.php';

// Get current user from session
$user = isset($_SESSION['user_id']) ? [
    'id' => $_SESSION['user_id'],
    'name' => $_SESSION['user_name'] ?? '',
    'email' => $_SESSION['user_email'] ?? '',
    'role' => $_SESSION['user_role'] ?? ''
] : null;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo SITE_NAME; ?> - <?php echo SITE_TAGLINE; ?></title>
    <meta name="description" content="CBSE school in Ramnagar, West Champaran offering academic excellence, experienced faculty, smart classrooms and holistic development.">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="icon" href="/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="modern-header">
        <!-- Top Information Bar -->
        <div class="top-bar-new">
            <div class="container mx-auto px-4">
                <div class="top-bar-content">
                    <div class="top-bar-left">
                        <a href="tel:<?php echo SITE_PHONE; ?>" class="top-bar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span><?php echo SITE_PHONE; ?></span>
                        </a>
                        <div class="top-bar-separator"></div>
                        <a href="mailto:<?php echo SITE_EMAIL; ?>" class="top-bar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <span><?php echo SITE_EMAIL; ?></span>
                        </a>
                        <div class="top-bar-separator"></div>
                        <a href="/pages/contact.php" class="top-bar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Our Campus</span>
                        </a>
                    </div>
                    <div class="top-bar-right">
                        <a href="#" class="top-bar-social" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" class="top-bar-social" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" class="top-bar-social" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                            </svg>
                        </a>
                        <div class="top-bar-separator"></div>
                        <a href="/login.php" class="top-bar-link">Student Login</a>
                        <a href="/login.php" class="top-bar-link">Staff Login</a>
                        <button onclick="openApplyModal()" class="btn-apply-new">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                            </svg>
                            <span>APPLY NOW</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Branding Area -->
        <div class="branding-section">
            <div class="branding-bg"></div>
            <div class="container mx-auto px-4">
                <div class="branding-content">
                    <div class="branding-left">
                        <img src="<?php echo IMAGES['logo']; ?>" alt="<?php echo SITE_NAME; ?> logo" class="branding-logo">
                    </div>
                    <div class="branding-center">
                        <h1 class="branding-name">
                            <span class="branding-name-dark">AARUSHI</span>
                            <span class="branding-name-gradient">VIDYA NIKETAN</span>
                        </h1>
                        <p class="branding-tagline">
                            <span class="tagline-line"></span>
                            INSPIRE TO DREAM... LEARN TO LEAD WITH EXCELLENCE
                            <span class="tagline-line"></span>
                        </p>
                    </div>
                    <div class="branding-right">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>
                            <span>Quality Education</span>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <span>Holistic Development</span>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                    <path d="M4 22h16"></path>
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                </svg>
                            </div>
                            <span>Brighter Future</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Navigation Bar -->
        <div class="nav-container">
            <nav class="floating-nav">
                <div class="nav-wrapper">
                    <ul class="nav-menu">
                        <li>
                            <a href="/index.php" class="nav-link<?php echo isCurrentPage('/index.php') ? ' nav-link-active' : ''; ?>">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>HOME</span>
                            </a>
                        </li>
                        <?php 
                        foreach (NAVIGATION as $item): 
                            if ($item['label'] !== 'Home'): 
                        ?>
                            <li class="nav-item-dropdown">
                                <a href="<?php echo $item['href']; ?>" class="nav-link<?php echo isCurrentPage($item['href']) ? ' nav-link-active' : ''; ?>">
                                    <?php echo $item['label']; ?>
                                    <?php if (isset($item['children'])): ?>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    <?php endif; ?>
                                </a>
                                <?php if (isset($item['children'])): ?>
                                    <ul class="dropdown-menu">
                                        <?php foreach ($item['children'] as $child): ?>
                                            <li>
                                                <a href="<?php echo $child['href']; ?>" class="dropdown-link<?php echo isCurrentPage($child['href']) ? ' nav-link-active' : ''; ?>">
                                                    <?php echo $child['label']; ?>
                                                </a>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            </li>
                        <?php 
                            endif; 
                        endforeach; 
                        ?>
                    </ul>
                    <button type="button" class="mobile-toggle" onclick="toggleMobileMenu()" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </nav>
        </div>

        <!-- Mobile Menu Backdrop -->
        <div id="mobile-menu-backdrop" class="mobile-menu-backdrop" onclick="toggleMobileMenu()"></div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu-new">
            <div class="mobile-menu-header">
                <img src="<?php echo IMAGES['logo']; ?>" alt="<?php echo SITE_NAME; ?>" class="mobile-logo">
                <button type="button" onclick="toggleMobileMenu()" class="mobile-close" aria-label="Close menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" x2="6" y1="6" y2="18"></line>
                        <line x1="6" x2="18" y1="18" y2="6"></line>
                    </svg>
                </button>
            </div>
            <ul class="mobile-nav-list">
                <li class="mobile-nav-item">
                    <a href="/index.php" onclick="toggleMobileMenu()" class="mobile-nav-link<?php echo isCurrentPage('/index.php') ? ' mobile-nav-link-active' : ''; ?>">HOME</a>
                </li>
                <?php foreach (NAVIGATION as $item): ?>
                    <?php if ($item['label'] !== 'Home'): ?>
                        <li class="mobile-nav-item">
                            <?php if (isset($item['children'])): ?>
                                <?php $menu_key = preg_replace('/[^a-z0-9]+/i', '-', strtolower($item['label'])); ?>
                                <button type="button" onclick="toggleMobileSubmenu('<?php echo $menu_key; ?>')" class="mobile-nav-link mobile-nav-dropdown<?php echo isCurrentPage($item['href']) ? ' mobile-nav-link-active' : ''; ?>">
                                    <?php echo $item['label']; ?>
                                    <svg id="mobile-chevron-<?php echo $menu_key; ?>" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                </button>
                                <ul id="mobile-submenu-<?php echo $menu_key; ?>" class="mobile-submenu">
                                    <?php foreach ($item['children'] as $child): ?>
                                        <li>
                                            <a href="<?php echo $child['href']; ?>" onclick="toggleMobileMenu()" class="mobile-submenu-link<?php echo isCurrentPage($child['href']) ? ' mobile-nav-link-active' : ''; ?>">
                                                <?php echo $child['label']; ?>
                                            </a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php else: ?>
                                <a href="<?php echo $item['href']; ?>" onclick="toggleMobileMenu()" class="mobile-nav-link<?php echo isCurrentPage($item['href']) ? ' mobile-nav-link-active' : ''; ?>">
                                    <?php echo $item['label']; ?>
                                </a>
                            <?php endif; ?>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
                <?php if (!$user): ?>
                    <li class="mobile-nav-item">
                        <a href="/login.php" onclick="toggleMobileMenu()" class="mobile-nav-link mobile-login-link">Login</a>
                    </li>
                <?php endif; ?>
            </ul>
            <div class="mobile-menu-footer">
                <button onclick="openApplyModal(); toggleMobileMenu();" class="btn-apply-mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    <span>APPLY NOW</span>
                </button>
            </div>
        </div>

    </header>

    <script>
        let mobileMenuOpen = false;

        function toggleMobileMenu() {
            mobileMenuOpen = !mobileMenuOpen;
            const menu = document.getElementById('mobile-menu');
            const backdrop = document.getElementById('mobile-menu-backdrop');
            const body = document.body;

            if (mobileMenuOpen) {
                menu.classList.add('is-open');
                backdrop.classList.add('is-open');
                body.style.overflow = 'hidden';
            } else {
                menu.classList.remove('is-open');
                backdrop.classList.remove('is-open');
                body.style.overflow = '';
                
                // Close all submenus
                document.querySelectorAll('.mobile-submenu.is-open').forEach(submenu => {
                    submenu.classList.remove('is-open');
                });
                document.querySelectorAll('.mobile-nav-dropdown.is-open').forEach(dropdown => {
                    dropdown.classList.remove('is-open');
                });
            }
        }

        function toggleMobileSubmenu(key) {
            const submenu = document.getElementById('mobile-submenu-' + key);
            const dropdown = document.querySelector(`button[onclick="toggleMobileSubmenu('${key}')"]`);

            if (submenu.classList.contains('is-open')) {
                submenu.classList.remove('is-open');
                dropdown.classList.remove('is-open');
            } else {
                submenu.classList.add('is-open');
                dropdown.classList.add('is-open');
            }
        }

        function openApplyModal() {
            document.getElementById('apply-modal').classList.add('active');
        }

        function closeApplyModal() {
            document.getElementById('apply-modal').classList.remove('active');
        }

        function openEnquiryModal() {
            document.getElementById('enquiry-modal').classList.add('active');
        }

        function closeEnquiryModal() {
            document.getElementById('enquiry-modal').classList.remove('active');
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            const dropdowns = document.querySelectorAll('.nav-item-dropdown');
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('is-open');
                }
            });
        });

        // Dropdown hover functionality
        document.querySelectorAll('.nav-item-dropdown').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.classList.add('is-open');
            });

            item.addEventListener('mouseleave', function() {
                this.classList.remove('is-open');
            });
        });

    </script>