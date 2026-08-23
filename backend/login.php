<?php
session_start();
require_once 'config.php';

// Handle form submission from Blade template
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';
    $role = isset($_POST['role']) ? trim($_POST['role']) : 'student';
    $remember = isset($_POST['remember']);

    // Validate input
    if (empty($email) || empty($password)) {
        header("Location: views/login.blade.php?error=" . urlencode("Email and password are required"));
        exit;
    }

    // Prepare statement to prevent SQL injection with role check
    $stmt = $conn->prepare("SELECT id, name, email, password, role FROM users WHERE email = ? AND role = ?");
    $stmt->bind_param("ss", $email, $role);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Password is correct
            unset($user['password']); // Remove password from session
            
            // Set session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_email'] = $user['email'];
            $_SESSION['user_name'] = $user['name'];
            $_SESSION['user_role'] = $user['role'];
            
            // Handle remember me
            if ($remember) {
                $cookie_name = 'remember_me_' . $user['id'];
                $cookie_value = base64_encode($user['id'] . ':' . $user['email']);
                setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 30 days
            }
            
            // Redirect based on role
            switch ($user['role']) {
                case 'admin':
                    header("Location: dashboard-admin.php");
                    break;
                case 'teacher':
                    header("Location: dashboard-teacher.php");
                    break;
                case 'student':
                    header("Location: dashboard-student.php");
                    break;
                default:
                    header("Location: dashboard-student.php");
            }
            exit;
        } else {
            header("Location: views/login.blade.php?error=" . urlencode("Invalid email or password"));
            exit;
        }
    } else {
        header("Location: views/login.blade.php?error=" . urlencode("Invalid email or password"));
        exit;
    }
    
    $stmt->close();
} else {
    // Handle JSON API requests (for React frontend)
    header('Content-Type: application/json');
    
    $data = json_decode(file_get_contents('php://input'), true);
    
    $email = isset($data['email']) ? trim($data['email']) : '';
    $password = isset($data['password']) ? trim($data['password']) : '';
    $role = isset($data['role']) ? trim($data['role']) : 'parent';

    // Validate input
    if (empty($email) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Email and password are required']);
        exit;
    }

    // Prepare statement to prevent SQL injection with role check
    $stmt = $conn->prepare("SELECT id, name, email, password, role FROM users WHERE email = ? AND role = ?");
    $stmt->bind_param("ss", $email, $role);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            unset($user['password']);
            
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_email'] = $user['email'];
            $_SESSION['user_name'] = $user['name'];
            $_SESSION['user_role'] = $user['role'];
            
            echo json_encode([
                'success' => true,
                'message' => 'Login successful',
                'user' => $user
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
    }
    
    $stmt->close();
}

$conn->close();
?>
