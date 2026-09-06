// Role Selection
const roleData = {
    admin: {
        title: 'Admin Login',
        subtitle: 'Manage and control the school system',
        hint: 'Admin ID / Email'
    },
    teacher: {
        title: 'Teacher Login',
        subtitle: 'Access your teaching and academic portal',
        hint: 'Employee ID / Email'
    },
    student: {
        title: 'Student Login',
        subtitle: 'Access your classes, attendance and academic portal',
        hint: 'Username / Admission No.'
    }
};

function selectRole(role) {
    // Update hidden input
    document.getElementById('selectedRole').value = role;
    
    // Update button states
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-role="${role}"]`).classList.add('active');
    
    // Update form header with animation
    const formHeader = document.querySelector('.form-header');
    formHeader.style.opacity = '0';
    formHeader.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        document.getElementById('roleTitle').textContent = roleData[role].title;
        document.getElementById('roleSubtitle').textContent = roleData[role].subtitle;
        document.querySelector('label[for="email"]').textContent = roleData[role].hint;
        document.getElementById('email').placeholder = roleData[role].hint;
        formHeader.style.opacity = '1';
        formHeader.style.transform = 'translateY(0)';
    }, 200);
}

// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        if (eyeIcon) {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        }
        document.getElementById('togglePassword').textContent = 'Hide';
        document.getElementById('togglePassword').setAttribute('aria-label', 'Hide password');
    } else {
        passwordInput.type = 'password';
        if (eyeIcon) {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
        document.getElementById('togglePassword').textContent = 'Show';
        document.getElementById('togglePassword').setAttribute('aria-label', 'Show password');
    }
}

// Particle Effect
function createParticles() {
    const particleContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random type
    const types = ['gold', 'navy', 'white'];
    const type = types[Math.floor(Math.random() * types.length)];
    particle.classList.add(type);
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration
    const duration = Math.random() * 15 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Random animation delay
    const delay = Math.random() * 10;
    particle.style.animationDelay = `${delay}s`;
    
    container.appendChild(particle);
    
    // Recreate particle after animation
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, (duration + delay) * 1000);
}

// Form Validation
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return false;
    }
    
    return true;
}

function submitLoginForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const error = document.getElementById('login-error');
    const button = form.querySelector('.login-btn');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    error.classList.add('hidden');
    button.disabled = true;
    button.classList.add('is-loading');

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
    })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                throw new Error(data.message || 'Unable to sign in.');
            }
            window.location.href = data.redirect;
        })
        .catch(loginError => {
            error.textContent = loginError.name === 'AbortError'
                ? 'The login service is taking too long. Please start MySQL and try again.'
                : loginError.message;
            error.classList.remove('hidden');
        })
        .finally(() => {
            clearTimeout(timeout);
            button.disabled = false;
            button.classList.remove('is-loading');
        });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();
    
    // Add form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', submitLoginForm);
    }

    document.querySelectorAll('.role-btn').forEach(button => {
        button.addEventListener('click', () => selectRole(button.dataset.role));
    });

    const passwordToggle = document.getElementById('togglePassword');
    if (passwordToggle) {
        passwordToggle.addEventListener('click', togglePassword);
    }
    
    // Add input animations
    const inputs = document.querySelectorAll('.form-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

// Smooth scroll for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
