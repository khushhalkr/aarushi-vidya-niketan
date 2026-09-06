<?php
require_once 'config.php';

header('Content-Type: application/json');
$conn = requireDatabaseConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Extract form fields
    $name = isset($data['name']) ? trim($data['name']) : '';
    $phone = isset($data['phone']) ? trim($data['phone']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $student_name = isset($data['student_name']) ? trim($data['student_name']) : '';
    $class = isset($data['class']) ? trim($data['class']) : '';
    $enquiry_type = isset($data['enquiry_type']) ? trim($data['enquiry_type']) : '';
    $message = isset($data['message']) ? trim($data['message']) : '';

    if ($class === '' && $enquiry_type !== '') {
        $class = $enquiry_type;
    }
    
    // Validate required fields
    $required_fields = ['name', 'phone'];
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            echo json_encode(['success' => false, 'message' => ucfirst(str_replace('_', ' ', $field)) . ' is required']);
            exit;
        }
    }
    
    // Validate email format if provided
    if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email format']);
        exit;
    }
    
    // Validate phone number
    if (!preg_match('/^[0-9]{10}$/', $phone)) {
        echo json_encode(['success' => false, 'message' => 'Invalid phone number (must be 10 digits)']);
        exit;
    }
    
    // Prepare statement to insert enquiry
    $stmt = $conn->prepare("INSERT INTO enquiries (name, phone, email, student_name, class, message, enquiry_date, status) VALUES (?, ?, ?, ?, ?, ?, NOW(), 'pending')");
    
    $stmt->bind_param("ssssss", 
        $name, 
        $phone, 
        $email, 
        $student_name, 
        $class, 
        $message
    );
    
    if ($stmt->execute()) {
        $enquiry_id = $conn->insert_id;
        echo json_encode([
            'success' => true,
            'message' => 'Enquiry submitted successfully! We will contact you soon.',
            'enquiry_id' => $enquiry_id
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error submitting enquiry: ' . $stmt->error]);
    }
    
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?>
