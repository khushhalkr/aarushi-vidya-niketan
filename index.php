<?php
session_start();
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/header.php';
?>

<main>
    <?php require_once __DIR__ . '/includes/hero.php'; ?>
    <?php require_once __DIR__ . '/includes/sections.php'; ?>
</main>

<?php require_once __DIR__ . '/includes/footer.php'; ?>

<!-- Include modals at the end of body -->
<?php require_once __DIR__ . '/includes/modals.php'; ?>

</body>
</html>