<?php
session_start();
require_once __DIR__ . '/config.php';

$roles = [
    'student' => ['label' => 'Student', 'hint' => 'Username / Admission No.', 'icon' => 'cap'],
    'teacher' => ['label' => 'Teacher', 'hint' => 'Employee ID / Email', 'icon' => 'teacher'],
    'admin' => ['label' => 'Admin', 'hint' => 'Admin ID / Email', 'icon' => 'shield'],
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');

    if (!$conn) {
        http_response_code(503);
        echo json_encode(['success' => false, 'message' => 'Database is unavailable. Start MySQL and import database.sql.']);
        exit;
    }

    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');
    $role = trim($_POST['role'] ?? 'student');

    if ($email === '' || $password === '') {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'Email and password are required.']);
        exit;
    }

    if (!isset($roles[$role])) {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'Select a valid login role.']);
        exit;
    }

    $stmt = $conn->prepare('SELECT id, name, email, password, role FROM users WHERE email = ? AND role = ? LIMIT 1');
    $stmt->bind_param('ss', $email, $role);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if (!$user || !password_verify($password, $user['password'])) {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'Invalid email, password, or role.']);
        exit;
    }

    unset($user['password']);
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_email'] = $user['email'];
    $_SESSION['user_name'] = $user['name'];
    $_SESSION['user_role'] = $user['role'];

    $redirect = $role === 'admin' ? '/dashboard-admin.php' : ($role === 'teacher' ? '/dashboard-teacher.php' : '/dashboard-student.php');
    echo json_encode(['success' => true, 'message' => 'Login successful.', 'redirect' => $redirect, 'user' => $user]);
    exit;
}

$error = $_GET['error'] ?? '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - AARUSHI VIDYA NIKETAN</title>
    <link rel="stylesheet" href="/css/login.css">
</head>
<body class="auth-page">
    <main class="login-container">
        <section class="branding-section" aria-labelledby="school-name">
            <div class="particle-background" id="particles" aria-hidden="true"></div>
            <div class="branding-content">
                <div class="logo-orbit" aria-hidden="true">
                    <div class="orbit orbit-one"><span>✦</span></div>
                    <div class="orbit orbit-two"><span>✧</span></div>
                    <div class="orbit orbit-three"><span>•</span></div>
                    <div class="logo-glow"></div>
                    <img class="school-logo" src="/images/logo.png" alt="AARUSHI VIDYA NIKETAN logo">
                </div>
                <h1 id="school-name" class="school-name">AARUSHI VIDYA NIKETAN</h1>
                <p class="school-tagline">BUILD FUTURE</p>
                <p class="school-motto">तमसो मा ज्योतिर्गमय</p>
                <div class="feature-cards" aria-label="School values">
                    <article><strong>Student</strong><span>Learn · Explore · Grow</span></article>
                    <article><strong>Teacher</strong><span>Teach · Guide · Inspire</span></article>
                    <article><strong>Admin</strong><span>Manage · Monitor · Excel</span></article>
                </div>
            </div>
        </section>

        <section class="login-section" aria-labelledby="welcome-title">
            <div class="login-card">
                <div class="login-header">
                    <p class="eyebrow">AARUSHI VIDYA NIKETAN</p>
                    <h2 id="welcome-title" class="welcome-text">Welcome Back!</h2>
                    <p class="login-subtitle">Sign in to your school account</p>
                </div>

                <?php if ($error): ?>
                    <div class="alert alert-danger" role="alert"><?php echo htmlspecialchars($error, ENT_QUOTES, 'UTF-8'); ?></div>
                <?php endif; ?>
                <div class="alert alert-danger hidden" id="login-error" role="alert"></div>

                <div class="role-selection" role="tablist" aria-label="Choose login role">
                    <?php foreach ($roles as $key => $role_data): ?>
                        <button type="button" class="role-btn<?php echo $key === 'student' ? ' active' : ''; ?>" data-role="<?php echo $key; ?>" role="tab" aria-selected="<?php echo $key === 'student' ? 'true' : 'false'; ?>">
                            <span class="role-icon" aria-hidden="true"><?php echo $role_data['icon'] === 'cap' ? '⌂' : ($role_data['icon'] === 'teacher' ? '♙' : '⚙'); ?></span>
                            <span><?php echo $role_data['label']; ?></span>
                        </button>
                    <?php endforeach; ?>
                </div>

                <form id="loginForm" class="login-form" method="post" action="/login.php">
                    <input type="hidden" name="role" id="selectedRole" value="student">
                    <div class="form-header" id="formHeader">
                        <h3 id="roleTitle">Student Login</h3>
                        <p id="roleSubtitle">Access classes, attendance and your learning portal.</p>
                    </div>
                    <div class="form-group">
                        <label for="email">Username / Admission No.</label>
                        <div class="input-wrapper">
                            <span class="input-icon" aria-hidden="true">@</span>
                            <input id="email" type="text" name="email" placeholder="Username / Admission No." autocomplete="username" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-wrapper">
                            <span class="input-icon" aria-hidden="true">●</span>
                            <input id="password" type="password" name="password" placeholder="Enter your password" autocomplete="current-password" required>
                            <button type="button" class="toggle-password" id="togglePassword" aria-label="Show password">Show</button>
                        </div>
                    </div>
                    <div class="form-options">
                        <label class="remember-me"><input type="checkbox" name="remember" value="1"> Remember me</label>
                        <a href="mailto:asa082994@gmail.com?subject=Password%20help" class="forgot-password">Forgot password?</a>
                    </div>
                    <button class="login-btn" type="submit">Login <span aria-hidden="true">→</span></button>
                </form>
                <p class="login-quote">“Small steps, big dreams.”</p>
                <a href="/" class="back-home">← Back to school website</a>
            </div>
            <div class="mobile-benefits" aria-label="School benefits">
                <img src="/images/campus.jpeg" alt="AARUSHI VIDYA NIKETAN campus" loading="lazy">
                <div class="mobile-benefit-list">
                    <span>▣<b>Quality Education</b></span>
                    <span>♟<b>Holistic Development</b></span>
                    <span>♥<b>Safe &amp; Supportive</b></span>
                    <span>◎<b>Future Ready</b></span>
                </div>
            </div>
        </section>
    </main>
    <script src="/js/login.js"></script>
</body>
</html>