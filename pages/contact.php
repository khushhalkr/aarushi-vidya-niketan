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

.contact-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 24px;
}

.contact-info h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 0 0 1.5rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-item svg {
    width: 24px;
    height: 24px;
    color: var(--indigo, #4F46E5);
    flex-shrink: 0;
}

.contact-item h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 0 0 0.25rem;
}

.contact-item p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--text-muted, #64748B);
    margin: 0;
}

.school-details {
    margin-top: 2rem;
    padding: 1.5rem;
    background: rgba(79, 70, 229, 0.05);
    border-radius: 12px;
}

.school-details h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 0 0 1rem;
}

.school-details ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.school-details li {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
    color: var(--text-dark, #172033);
    margin-bottom: 0.5rem;
}

.contact-form-card {
    background: white;
    border: 1px solid #e7dfc9;
    border-radius: 16px;
    padding: 2rem;
}

.contact-form-card h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--navy-dark, #172554);
    margin: 0 0 1.5rem;
}

.form-group {
    margin-bottom: 1.25rem;
}

.form-group label {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-dark, #172033);
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
    border: 1px solid #e7dfc9;
    border-radius: 8px;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--indigo, #4F46E5);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, var(--indigo, #4F46E5) 0%, var(--magenta, #C026D3) 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
}

.success-message {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 8px;
    color: #16a34a;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
}

.error-message {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 8px;
    color: #dc2626;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
}

@media (max-width: 900px) {
    .contact-layout {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}

@media (max-width: 768px) {
    .page-hero {
        padding: 80px 0 60px;
    }

    .contact-layout {
        padding: 40px 20px;
    }
}
</style>

<section class="page-hero">
    <p style="font-family: 'Poppins', sans-serif; font-size: 0.875rem; font-weight: 600; color: var(--indigo, #4F46E5); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">Contact Us</p>
    <h1>Get in Touch</h1>
    <p>We'd love to hear from you. Reach out with any questions or inquiries.</p>
</section>

<div class="contact-layout">
    <div class="contact-info">
        <h2>Contact Information</h2>
        
        <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
                <h3>Address</h3>
                <p><?php echo SITE_ADDRESS; ?></p>
            </div>
        </div>
        
        <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div>
                <h3>Phone</h3>
                <p><?php echo SITE_PHONE; ?></p>
            </div>
        </div>
        
        <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <div>
                <h3>Email</h3>
                <p><?php echo SITE_EMAIL; ?></p>
            </div>
        </div>
        
        <div class="school-details">
            <h3>School Details</h3>
            <ul>
                <li><strong>UDISE Code:</strong> <?php echo SITE_UDISE; ?></li>
                <li><strong>Registration No:</strong> <?php echo SITE_REGNO; ?></li>
                <li><strong>Board:</strong> CBSE</li>
            </ul>
        </div>
    </div>
    
    <div class="contact-form-card">
        <h2>Send us a Message</h2>
        <form id="contact-form" onsubmit="submitContactForm(event)">
            <div class="form-group">
                <label>Your Name *</label>
                <input type="text" name="name" placeholder="Enter your name" required>
            </div>
            
            <div class="form-group">
                <label>Email *</label>
                <input type="email" name="email" placeholder="Enter your email" required>
            </div>
            
            <div class="form-group">
                <label>Phone *</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required>
            </div>
            
            <div class="form-group">
                <label>Subject *</label>
                <input type="text" name="subject" placeholder="Enter subject" required>
            </div>
            
            <div class="form-group">
                <label>Message *</label>
                <textarea name="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>
            
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
        
        <div id="contact-success" class="success-message hidden">
            Message sent successfully! We will contact you soon.
        </div>
        
        <div id="contact-error" class="error-message hidden">
            <span id="contact-error-message"></span>
        </div>
    </div>
</div>
</div>

<script>
async function submitContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const successDiv = document.getElementById('contact-success');
    const errorDiv = document.getElementById('contact-error');
    const errorMessage = document.getElementById('contact-error-message');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    successDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
        setTimeout(() => {
            successDiv.classList.remove('hidden');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }, 1000);
    } catch (error) {
        errorMessage.textContent = 'Failed to send message. Please try again.';
        errorDiv.classList.remove('hidden');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
}
</script>

<?php require_once __DIR__ . '/../includes/footer.php'; ?>
<?php require_once __DIR__ . '/../includes/modals.php'; ?>

</body>
</html>