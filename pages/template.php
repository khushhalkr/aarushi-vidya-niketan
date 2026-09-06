<?php
session_start();
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/header.php';

// Page variables (set these in each page)
$page_title = $page_title ?? 'Page Title';
$page_subtitle = $page_subtitle ?? 'Page Subtitle';
$page_content = $page_content ?? '<p>Page content goes here.</p>';
?>

<main class="section page-shell">
    <div class="container mx-auto max-w-4xl px-4 page-container">
        <header class="inner-page-hero">
            <p class="section-subtitle"><?php echo $page_subtitle; ?></p>
            <h1 class="section-title mt-4"><?php echo $page_title; ?></h1>
            <span class="inner-page-rule" aria-hidden="true"></span>
        </header>
        
        <div class="page-content mt-8 text-muted-foreground">
            <?php echo $page_content; ?>
        </div>
    </div>
</main>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>