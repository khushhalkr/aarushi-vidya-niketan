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

.details-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 24px;
}

.details-content p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    line-height: 1.75;
    color: var(--text-dark, #172033);
    margin-bottom: 2rem;
}

.details-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 2.5rem 0 1.5rem;
}

.details-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.details-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid #e7dfc9;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: var(--text-dark, #172033);
}

.details-list li:last-child {
    border-bottom: none;
}

.details-list strong {
    font-weight: 600;
    color: var(--navy-dark, #172554);
    min-width: 180px;
}

@media (max-width: 768px) {
    .page-hero {
        padding: 80px 0 60px;
    }

    .details-content {
        padding: 40px 20px;
    }

    .details-list li {
        flex-direction: column;
        gap: 0.25rem;
    }

    .details-list strong {
        min-width: auto;
    }
}
</style>

<section class="page-hero">
    <p style="font-family: 'Poppins', sans-serif; font-size: 0.875rem; font-weight: 600; color: var(--indigo, #4F46E5); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">Information</p>
    <h1>Mandatory Details</h1>
    <p>CBSE mandatory public disclosure information</p>
</section>

<div class="details-content">
    <p>As per CBSE requirements, we provide the following mandatory public disclosure information.</p>

    <h2>School Information</h2>
    <ul class="details-list">
        <li><strong>School Name:</strong> <?php echo SITE_NAME; ?></li>
        <li><strong>Address:</strong> <?php echo SITE_ADDRESS; ?></li>
        <li><strong>Phone:</strong> <?php echo SITE_PHONE; ?></li>
        <li><strong>Email:</strong> <?php echo SITE_EMAIL; ?></li>
        <li><strong>UDISE Code:</strong> <?php echo SITE_UDISE; ?></li>
        <li><strong>Registration No:</strong> <?php echo SITE_REGNO; ?></li>
        <li><strong>Board:</strong> CBSE</li>
        <li><strong>School Type:</strong> Co-educational</li>
    </ul>

    <h2>Academic Information</h2>
    <ul class="details-list">
        <li><strong>Classes Offered:</strong> Nursery to Class 10</li>
        <li><strong>Medium of Instruction:</strong> English</li>
        <li><strong>Academic Session:</strong> April to March</li>
        <li><strong>Working Days:</strong> Monday to Saturday</li>
        <li><strong>School Timings:</strong> 8:00 AM to 2:00 PM</li>
    </ul>

    <h2>Management Information</h2>
    <ul class="details-list">
        <li><strong>Principal:</strong> Available at school office</li>
        <li><strong>Management Committee:</strong> Constituted as per norms</li>
        <li><strong>Teaching Staff:</strong> Qualified and experienced</li>
        <li><strong>Non-Teaching Staff:</strong> Adequate support staff</li>
    </ul>
</div>
</div>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>