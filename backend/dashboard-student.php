<?php
session_start();
require_once 'config.php';

// Check if user is logged in and is student
if (!isset($_SESSION['user_id']) || $_SESSION['user_role'] !== 'student') {
    header("Location: views/login.blade.php");
    exit;
}

$user_name = $_SESSION['user_name'] ?? 'Student';
$user_email = $_SESSION['user_email'] ?? '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard - AARUSHI VIDYA NIKETAN</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .dashboard-container {
            min-height: 100vh;
            background: var(--light-bg);
            display: flex;
        }
        .sidebar {
            width: 280px;
            background: linear-gradient(135deg, var(--deep-navy) 0%, var(--royal-navy) 100%);
            padding: 30px;
            color: var(--white);
        }
        .sidebar-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .sidebar-header h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            margin-bottom: 5px;
        }
        .sidebar-header p {
            font-size: 0.8rem;
            opacity: 0.7;
        }
        .nav-menu {
            list-style: none;
        }
        .nav-menu li {
            margin-bottom: 10px;
        }
        .nav-menu a {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 15px;
            color: var(--white);
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        .nav-menu a:hover, .nav-menu a.active {
            background: rgba(212, 167, 44, 0.2);
            color: var(--gold);
        }
        .main-content {
            flex: 1;
            padding: 40px;
        }
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        .dashboard-header h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            color: var(--deep-navy);
        }
        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .user-avatar {
            width: 45px;
            height: 45px;
            background: var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--deep-navy);
            font-weight: 700;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }
        .stat-card {
            background: var(--white);
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border-left: 4px solid var(--gold);
        }
        .stat-card h3 {
            font-size: 0.9rem;
            color: var(--gray-500);
            margin-bottom: 10px;
        }
        .stat-card .value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--deep-navy);
        }
        .logout-btn {
            padding: 10px 20px;
            background: var(--deep-navy);
            color: var(--white);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .logout-btn:hover {
            background: var(--royal-navy);
        }
    </style>
</head>
<body>
    <div class="dashboard-container">
        <aside class="sidebar">
            <div class="sidebar-header">
                <h2>AARUSHI VIDYA NIKETAN</h2>
                <p>Student Portal</p>
            </div>
            <ul class="nav-menu">
                <li><a href="#" class="active"><i class="fas fa-home"></i> Dashboard</a></li>
                <li><a href="#"><i class="fas fa-book"></i> My Subjects</a></li>
                <li><a href="#"><i class="fas fa-tasks"></i> Assignments</a></li>
                <li><a href="#"><i class="fas fa-calendar-check"></i> Attendance</a></li>
                <li><a href="#"><i class="fas fa-chart-bar"></i> Results</a></li>
                <li><a href="#"><i class="fas fa-bell"></i> Notices</a></li>
                <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
            </ul>
        </aside>
        <main class="main-content">
            <div class="dashboard-header">
                <h1>Student Dashboard</h1>
                <div class="user-info">
                    <div class="user-avatar"><?php echo strtoupper(substr($user_name, 0, 2)); ?></div>
                    <div>
                        <p style="font-weight: 600; color: var(--deep-navy);"><?php echo htmlspecialchars($user_name); ?></p>
                        <p style="font-size: 0.85rem; color: var(--gray-500);">Student</p>
                    </div>
                    <form method="POST" action="logout.php">
                        <button type="submit" class="logout-btn">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </form>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>My Subjects</h3>
                    <div class="value">6</div>
                </div>
                <div class="stat-card">
                    <h3>Pending Assignments</h3>
                    <div class="value">3</div>
                </div>
                <div class="stat-card">
                    <h3>Attendance</h3>
                    <div class="value">95%</div>
                </div>
                <div class="stat-card">
                    <h3>Overall Grade</h3>
                    <div class="value">A+</div>
                </div>
            </div>
            
            <div style="background: var(--white); padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <h2 style="font-family: 'Poppins', sans-serif; color: var(--deep-navy); margin-bottom: 20px;">Welcome, <?php echo htmlspecialchars($user_name); ?>!</h2>
                <p style="color: var(--gray-600); line-height: 1.6;">
                    This is your student dashboard. You can view your subjects, assignments, attendance, results, and school notices here.
                    Use the navigation menu on the left to access different modules.
                </p>
            </div>
        </main>
    </div>
</body>
</html>
