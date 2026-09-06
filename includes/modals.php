<?php
// Apply Modal
?>
<div id="apply-modal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title">Apply for Admission</h2>
            <button onclick="closeApplyModal()" class="modal-close">×</button>
        </div>

        <div id="apply-error" class="mb-4 hidden rounded-sm bg-red-50 p-3 text-red-600">
            <span class="text-sm" id="apply-error-message"></span>
        </div>

        <div id="apply-success" class="mb-4 hidden rounded-sm bg-green-50 p-3 text-green-600">
            <span class="text-sm font-semibold" id="apply-success-message"></span>
        </div>

        <form id="apply-form" onsubmit="submitApplyForm(event)" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label class="form-label">Student Name *</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input type="text" name="student_name" class="form-input" style="padding-left: 2.5rem;" placeholder="Enter student name" required>
                    </div>
                </div>

                <div>
                    <label class="form-label">Father's Name *</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input type="text" name="father_name" class="form-input" style="padding-left: 2.5rem;" placeholder="Enter father's name" required>
                    </div>
                </div>

                <div>
                    <label class="form-label">Mother's Name</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input type="text" name="mother_name" class="form-input" style="padding-left: 2.5rem;" placeholder="Enter mother's name">
                    </div>
                </div>

                <div>
                    <label class="form-label">Date of Birth *</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                            <line x1="16" x2="16" y1="2" y2="6"></line>
                            <line x1="8" x2="8" y1="2" y2="6"></line>
                            <line x1="3" x2="21" y1="10" y2="10"></line>
                        </svg>
                        <input type="date" name="dob" class="form-input" style="padding-left: 2.5rem;" required>
                    </div>
                </div>

                <div>
                    <label class="form-label">Gender *</label>
                    <select name="gender" class="form-select" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label class="form-label">Class for Admission *</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                        </svg>
                        <select name="class_admission" class="form-select" style="padding-left: 2.5rem;" required>
                            <option value="">Select Class</option>
                            <option value="Nursery">Nursery</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="Class 1">Class 1</option>
                            <option value="Class 2">Class 2</option>
                            <option value="Class 3">Class 3</option>
                            <option value="Class 4">Class 4</option>
                            <option value="Class 5">Class 5</option>
                            <option value="Class 6">Class 6</option>
                            <option value="Class 7">Class 7</option>
                            <option value="Class 8">Class 8</option>
                            <option value="Class 9">Class 9</option>
                            <option value="Class 10">Class 10</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="form-label">Academic Year</label>
                    <input type="text" name="academic_year" class="form-input" placeholder="e.g., 2024-25">
                </div>

                <div>
                    <label class="form-label">Phone Number *</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <input type="tel" name="phone" class="form-input" style="padding-left: 2.5rem;" placeholder="10 digit number" pattern="[0-9]{10}" required>
                    </div>
                </div>

                <div>
                    <label class="form-label">Email</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <input type="email" name="email" class="form-input" style="padding-left: 2.5rem;" placeholder="Enter email address">
                    </div>
                </div>

                <div>
                    <label class="form-label">Previous School</label>
                    <input type="text" name="previous_school" class="form-input" placeholder="Enter previous school name">
                </div>
            </div>

            <div>
                <label class="form-label">Address *</label>
                <div class="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-3 h-4 w-4 text-gray-400">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <textarea name="address" rows="3" class="form-textarea" style="padding-left: 2.5rem;" placeholder="Enter complete address" required></textarea>
                </div>
            </div>

            <button type="submit" id="apply-submit-btn" class="btn btn-primary w-full">
                Submit Application
            </button>
        </form>
    </div>
</div>

<!-- Enquiry Modal -->
<div id="legacy-enquiry-modal" class="modal legacy-enquiry-modal">
    <div class="modal-content">
        <div class="modal-header">
            <div>
                <h2 class="modal-title">Quick Enquiry</h2>
                <p class="mt-1 text-sm text-gray-600">Have questions? We're here to help!</p>
            </div>
            <button onclick="closeEnquiryModal()" class="modal-close">×</button>
        </div>

        <div id="legacy-enquiry-error" class="mb-4 hidden rounded-lg bg-red-50 p-3 text-red-600">
            <span class="text-sm" id="enquiry-error-message"></span>
        </div>

        <div id="legacy-enquiry-success" class="mb-4 hidden rounded-lg bg-green-50 p-3 text-green-600">
            <span class="text-sm font-semibold" id="enquiry-success-message"></span>
        </div>

        <form id="legacy-enquiry-form" onsubmit="submitEnquiryForm(event)" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label class="form-label">Your Name *</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input type="text" name="name" class="form-input" style="padding-left: 2.5rem;" placeholder="Enter your name" required>
                    </div>
                </div>

                <div>
                    <label class="form-label">Phone Number *</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <input type="tel" name="phone" class="form-input" style="padding-left: 2.5rem;" placeholder="10 digit number" pattern="[0-9]{10}" required>
                    </div>
                </div>

                <div>
                    <label class="form-label">Email</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <input type="email" name="email" class="form-input" style="padding-left: 2.5rem;" placeholder="Enter email address">
                    </div>
                </div>

                <div>
                    <label class="form-label">Student Name</label>
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input type="text" name="student_name" class="form-input" style="padding-left: 2.5rem;" placeholder="Student's name">
                    </div>
                </div>

                <div>
                    <label class="form-label">Class</label>
                    <select name="class" class="form-select">
                        <option value="">Select Class</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        <option value="Class 5">Class 5</option>
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="form-label">Message</label>
                <div class="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-3 h-4 w-4 text-gray-400">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <textarea name="message" rows="3" class="form-textarea" style="padding-left: 2.5rem;" placeholder="Your enquiry or message"></textarea>
                </div>
            </div>

            <button type="submit" id="enquiry-submit-btn" class="btn btn-primary w-full">
                Submit Enquiry
            </button>
        </form>

        <p class="mt-4 text-center text-xs text-gray-400">
            Powered by Ranjan Tecnovate Pvt. Ltd.
        </p>
    </div>
</div>

<!-- Premium Enquiry Popup -->
<div id="enquiry-modal" class="modal enquiry-popup" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" aria-hidden="true">
    <div class="enquiry-popup-shell" data-enquiry-panel>
        <button type="button" class="enquiry-close" onclick="closeEnquiryModal()" aria-label="Close enquiry form">×</button>
        <section class="enquiry-branding" aria-label="Aarushi Vidya Niketan information">
            <div class="enquiry-orb enquiry-orb-one"></div>
            <div class="enquiry-orb enquiry-orb-two"></div>
            <div class="enquiry-brand-content">
                <img src="<?php echo IMAGES['logo']; ?>" alt="<?php echo SITE_NAME; ?> logo" class="enquiry-logo">
                <p class="enquiry-brand-name"><?php echo SITE_NAME; ?></p>
                <p class="enquiry-brand-tagline">BUILD FUTURE</p>
                <p class="enquiry-brand-message">Let's build<br>a brighter future<br>together.</p>
                <div class="enquiry-values"><span>DISCIPLINE</span><span>KNOWLEDGE</span><span>CHARACTER</span><span>SUCCESS</span></div>
            </div>
        </section>
        <section class="enquiry-form-panel">
            <div class="enquiry-heading">
                <span class="enquiry-plane" aria-hidden="true">➤</span>
                <p class="enquiry-kicker">A conversation can begin a journey</p>
                <h2 id="enquiry-title">Send us an <strong>Enquiry</strong></h2>
                <p>We'd love to hear from you!</p>
                <small>Fill out the form and our team will get back to you soon.</small>
            </div>
            <div id="enquiry-error" class="enquiry-message enquiry-message-error" role="alert" hidden></div>
            <div id="enquiry-success" class="enquiry-success" role="status" hidden>
                <span class="enquiry-success-icon">✓</span>
                <h3>Enquiry Submitted Successfully!</h3>
                <p>Thank you for contacting AARUSHI VIDYA NIKETAN. Our team will contact you shortly.</p>
                <button type="button" class="enquiry-secondary-btn" onclick="closeEnquiryModal()">Close</button>
            </div>
            <form id="enquiry-form" onsubmit="submitEnquiryForm(event)" class="enquiry-form">
                <div class="enquiry-field-row">
                    <label class="enquiry-field"><span>Full Name</span><input type="text" name="name" placeholder="Your Name *" required autocomplete="name"></label>
                    <label class="enquiry-field"><span>Mobile Number</span><input type="tel" name="phone" placeholder="Phone Number *" pattern="[0-9]{10}" required autocomplete="tel"></label>
                </div>
                <label class="enquiry-field"><span>Email</span><input type="email" name="email" placeholder="Your Email *" required autocomplete="email"></label>
                <label class="enquiry-field"><span>Enquiry Type</span><select name="enquiry_type" required><option value="">Select Enquiry Type *</option><option>Admission</option><option>Course Information</option><option>Fee Structure</option><option>School Visit</option><option>General Enquiry</option><option>Other</option></select></label>
                <label class="enquiry-field"><span>Message</span><textarea name="message" rows="3" placeholder="Your Message *" required maxlength="1000"></textarea></label>
                <button type="submit" id="enquiry-submit-btn" class="enquiry-submit-btn"><span>Send Enquiry</span><b>→</b></button>
            </form>
            <p class="enquiry-safe">🔒 Your information is safe with us.</p>
            <div class="enquiry-trust"><span>⚡<b>Quick Response</b></span><span>✦<b>Expert Guidance</b></span><span>◆<b>Admission Support</b></span><span>♥<b>Your Dreams, Our Priority</b></span></div>
        </section>
    </div>
</div>

<script>
    function closeApplyModal() {
        document.getElementById('apply-modal').classList.remove('active');
    }

    function closeEnquiryModal() {
        document.getElementById('enquiry-modal').classList.remove('active');
    }

    async function submitApplyForm(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const errorDiv = document.getElementById('apply-error');
        const successDiv = document.getElementById('apply-success');
        const errorMessage = document.getElementById('apply-error-message');
        const successMessage = document.getElementById('apply-success-message');
        const submitBtn = document.getElementById('apply-submit-btn');
        
        errorDiv.classList.add('hidden');
        successDiv.classList.add('hidden');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
        
        try {
            const response = await fetch('/apply.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                successMessage.textContent = result.message || 'Application submitted successfully! We will contact you soon.';
                successDiv.classList.remove('hidden');
                form.reset();
                setTimeout(closeApplyModal, 2000);
            } else {
                errorMessage.textContent = result.message || 'Application failed';
                errorDiv.classList.remove('hidden');
            }
        } catch (error) {
            errorMessage.textContent = 'Network error. Please try again.';
            errorDiv.classList.remove('hidden');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Application';
        }
    }

    let enquiryTrigger = null;
    const ENQUIRY_DELAY = 1500;
    const ENQUIRY_SHOW_AGAIN_AFTER = 24 * 60 * 60 * 1000;
    const ENQUIRY_SUCCESS_COOLDOWN = 7 * 24 * 60 * 60 * 1000;

    function openEnquiryModal() {
        const modal = document.getElementById('enquiry-modal');
        enquiryTrigger = document.activeElement;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        setTimeout(() => modal.querySelector('input')?.focus(), 180);
    }

    function closeEnquiryModal() {
        const modal = document.getElementById('enquiry-modal');
        localStorage.setItem('enquiryClosedAt', String(Date.now()));
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        enquiryTrigger?.focus?.();
    }

    async function submitEnquiryForm(event) {
        event.preventDefault();
        const form = event.target;
        const errorDiv = document.getElementById('enquiry-error');
        const successDiv = document.getElementById('enquiry-success');
        const submitBtn = document.getElementById('enquiry-submit-btn');
        errorDiv.hidden = true;
        successDiv.hidden = true;
        submitBtn.disabled = true;
        submitBtn.classList.add('is-loading');
        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const response = await fetch('/enquiry.php', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
            const result = await response.json();
            if (!result.success) throw new Error(result.message || 'Enquiry failed.');
            localStorage.setItem('enquirySubmittedAt', String(Date.now()));
            form.hidden = true;
            document.querySelector('.enquiry-safe').hidden = true;
            document.querySelector('.enquiry-trust').hidden = true;
            successDiv.hidden = false;
        } catch (error) {
            errorDiv.textContent = error.message || 'Network error. Please try again.';
            errorDiv.hidden = false;
        } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove('is-loading');
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('enquiry-modal');
        const lastClosed = Number(localStorage.getItem('enquiryClosedAt') || 0);
        const lastSubmitted = Number(localStorage.getItem('enquirySubmittedAt') || 0);
        if (Date.now() - lastSubmitted > ENQUIRY_SUCCESS_COOLDOWN && Date.now() - lastClosed > ENQUIRY_SHOW_AGAIN_AFTER) {
            setTimeout(openEnquiryModal, ENQUIRY_DELAY);
        }
        modal.addEventListener('click', event => { if (event.target === modal) { localStorage.setItem('enquiryClosedAt', String(Date.now())); closeEnquiryModal(); } });
        document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('active')) closeEnquiryModal(); });
    });
</script>