<?php
require_once 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Extract form fields
    $student_name = isset($data['student_name']) ? trim($data['student_name']) : '';
    $father_name = isset($data['father_name']) ? trim($data['father_name']) : '';
    $mother_name = isset($data['mother_name']) ? trim($data['mother_name']) : '';
    $dob = isset($data['dob']) ? trim($data['dob']) : '';
    $gender = isset($data['gender']) ? trim($data['gender']) : '';
    $class_admission = isset($data['class_admission']) ? trim($data['class_admission']) : '';
    $academic_year = isset($data['academic_year']) ? trim($data['academic_year']) : '';
    $address = isset($data['address']) ? trim($data['address']) : '';
    $phone = isset($data['phone']) ? trim($data['phone']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $previous_school = isset($data['previous_school']) ? trim($data['previous_school']) : '';
    
    // Validate required fields
    $required_fields = ['student_name', 'father_name', 'dob', 'gender', 'class_admission', 'address', 'phone'];
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
    
    // Prepare statement to insert application
    $stmt = $conn->prepare("INSERT INTO applications (student_name, father_name, mother_name, dob, gender, class_admission, academic_year, address, phone, email, previous_school, application_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), 'pending')");
    
    $stmt->bind_param("sssssssssss", 
        $student_name, 
        $father_name, 
        $mother_name, 
        $dob, 
        $gender, 
        $class_admission, 
        $academic_year, 
        $address, 
        $phone, 
        $email, 
        $previous_school
    );
    
    if ($stmt->execute()) {
        $application_id = $conn->insert_id;
        echo json_encode([
            'success' => true,
            'message' => 'Application submitted successfully',
            'application_id' => $application_id
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error submitting application: ' . $stmt->error]);
    }
    
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?>
