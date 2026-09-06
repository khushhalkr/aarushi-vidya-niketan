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

.admission-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 24px;
}

.admission-content p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    line-height: 1.75;
    color: var(--text-dark, #172033);
    margin-bottom: 2rem;
}

.admission-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 2.5rem 0 1.5rem;
}

.process-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.process-list li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e7dfc9;
}

.process-list li:last-child {
    border-bottom: none;
}

.process-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--indigo, #4F46E5) 0%, var(--magenta, #C026D3) 100%);
    color: white;
    border-radius: 50%;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    flex-shrink: 0;
}

.process-list li p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-dark, #172033);
    margin: 0;
}

.documents-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.documents-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: var(--text-dark, #172033);
}

.documents-list li::before {
    content: '•';
    color: var(--indigo, #4F46E5);
    font-size: 1.5rem;
    line-height: 1;
}

.cta-card {
    margin-top: 3rem;
    padding: 2.5rem;
    background: linear-gradient(135deg, var(--navy-dark, #172554) 0%, var(--indigo, #4F46E5) 100%);
    border-radius: 20px;
    color: white;
    text-align: center;
}

.cta-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem;
}

.cta-card p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 1.5rem;
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 2rem;
    background: var(--gold, #F5C451);
    color: var(--navy-dark, #172554);
    border: none;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(245, 196, 81, 0.4);
}

@media (max-width: 768px) {
    .page-hero {
        padding: 80px 0 60px;
    }

    .admission-content {
        padding: 40px 20px;
    }

    .cta-card {
        padding: 2rem 1.5rem;
    }
}
</style>

<section class="page-hero">
    <p style="font-family: 'Poppins', sans-serif; font-size: 0.875rem; font-weight: 600; color: var(--indigo, #4F46E5); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">Admission</p>
    <h1>Admission Process</h1>
    <p>Join our community of learners and begin your journey to excellence</p>
</section>

<div class="admission-content">
    <p>We welcome students who are eager to learn and grow. Our admission process is designed to be transparent and fair to all applicants.</p>

    <h2>Admission Process</h2>
    <ol class="process-list">
        <li>
            <span class="process-number">1</span>
            <p>Fill out the application form (available online or at school office)</p>
        </li>
        <li>
            <span class="process-number">2</span>
            <p>Submit required documents</p>
        </li>
        <li>
            <span class="process-number">3</span>
            <p>Attend interaction session (for certain grades)</p>
        </li>
        <li>
            <span class="process-number">4</span>
            <p>Admission confirmation and fee payment</p>
        </li>
    </ol>

    <h2>Required Documents</h2>
    <ul class="documents-list">
        <li>Birth Certificate</li>
        <li>Transfer Certificate (from previous school)</li>
        <li>Academic records/Report cards</li>
        <li>Passport size photographs</li>
        <li>Aadhar Card (student and parents)</li>
        <li>Address proof</li>
    </ul>

    <div class="cta-card">
        <h3>Ready to Apply?</h3>
        <p>Click the button below to start your application process.</p>
        <button onclick="openApplyModal()" class="cta-btn">Apply Now</button>
    </div>
</div>
</div>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>