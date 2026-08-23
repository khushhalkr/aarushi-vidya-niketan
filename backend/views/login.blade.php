<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - AARUSHI VIDYA NIKETAN</title>
    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="login-container">
        <!-- Left Branding Section -->
        <div class="branding-section">
            <div class="particle-background" id="particles"></div>
            <div class="logo-glow"></div>
            
            <!-- Gold Atom/Orbit Effect -->
            <div class="orbit-container">
                <div class="orbit orbit-1">
                    <div class="orbit-particle"></div>
                </div>
                <div class="orbit orbit-2">
                    <div class="orbit-particle"></div>
                </div>
                <div class="orbit orbit-3">
                    <div class="orbit-particle"></div>
                </div>
            </div>
            
            <div class="branding-content">
                <div class="logo-container">
                    <div class="logo-ring"></div>
                    <img src="../images/logo.png" alt="School Logo" class="school-logo">
                </div>
                
                <h1 class="school-name">AARUSHI VIDYA NIKETAN</h1>
                <p class="school-tagline">LEARN • GROW • SUCCEED</p>
                <p class="school-motto">"Empowering Minds, Inspiring Futures"</p>
            </div>
        </div>

        <!-- Right Login Section -->
        <div class="login-section">
            <div class="login-card">
                <div class="login-header">
                    <h2 class="welcome-text">Welcome Back!</h2>
                    <p class="login-subtitle">Login to continue to your school portal</p>
                </div>

                <!-- Role Selection -->
                <div class="role-selection">
                    <button type="button" class="role-btn active" data-role="admin" onclick="selectRole('admin')">
                        <i class="fas fa-shield-alt"></i>
                        <span>Admin</span>
                    </button>
                    <button type="button" class="role-btn" data-role="teacher" onclick="selectRole('teacher')">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <span>Teacher</span>
                    </button>
                    <button type="button" class="role-btn" data-role="student" onclick="selectRole('student')">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Student</span>
                    </button>
                </div>

                <!-- Login Form -->
                <form method="POST" action="../login.php" class="login-form" id="loginForm">
                    <input type="hidden" name="role" id="selectedRole" value="admin">
                    
                    <div class="form-header">
                        <h3 id="roleTitle">Admin Login</h3>
                        <p id="roleSubtitle">Access administrative dashboard and controls</p>
                    </div>

                    <?php if (isset($_GET['error'])): ?>
                        <div class="alert alert-danger">
                            <i class="fas fa-exclamation-circle"></i>
                            <span><?php echo htmlspecialchars($_GET['error']); ?></span>
                        </div>
                    <?php endif; ?>

                    <div class="form-group">
                        <label for="email">Email / Username</label>
                        <div class="input-wrapper">
                            <i class="fas fa-envelope input-icon"></i>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Enter your email or username"
                                required
                                autocomplete="email"
                            >
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-wrapper">
                            <i class="fas fa-lock input-icon"></i>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Enter your password"
                                required
                                autocomplete="current-password"
                            >
                            <button type="button" class="toggle-password" onclick="togglePassword()">
                                <i class="fas fa-eye" id="eyeIcon"></i>
                            </button>
                        </div>
                    </div>

                    <div class="form-options">
                        <label class="remember-me">
                            <input type="checkbox" name="remember" id="remember">
                            <span>Remember Me</span>
                        </label>
                        <a href="#" class="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" class="login-btn">
                        <span>Sign In</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </form>

                <!-- Footer -->
                <div class="login-footer">
                    <p class="copyright">© <?php echo date('Y'); ?> AARUSHI VIDYA NIKETAN. All Rights Reserved.</p>
                    <p class="secure-text">Secure School Management Portal</p>
                </div>
            </div>
        </div>
    </div>

    <script src="../js/login.js"></script>
</body>
</html>
