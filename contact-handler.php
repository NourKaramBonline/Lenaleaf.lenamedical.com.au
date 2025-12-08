<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$topic = trim($_POST['topic'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address']);
    exit;
}

// SMTP configuration (hardcoded for production)
$mailHost = 'mail.bonlineco.com';
$mailPort = 465;
$mailUsername = 'info@bonlineco.com';
$mailPassword = '4Nb?ttEZa1^JT+i(';
$mailEncryption = 'ssl';
$fromAddress = 'info@bonlineco.com';
$fromName = 'LENA Leaf';

// Create email
$to = 'info@lenamedical.com.au';
$subject = 'New Contact Form Submission from LENA Leaf';

// Topic labels
$topicLabels = [
    'eligibility' => 'Eligibility',
    'appointments' => 'Appointments',
    'treatment' => 'Treatment questions',
    'other' => 'Other'
];
$topicLabel = $topicLabels[$topic] ?? 'General enquiry';

// Email body
$emailBody = "
You have received a new contact form submission from the LENA Leaf website.

CONTACT DETAILS:
================
Name: $name
Email: $email
Phone: " . ($phone ? $phone : 'Not provided') . "
Topic: $topicLabel

MESSAGE:
=======
$message

---
This message was sent from the LENA Leaf contact form at " . date('Y-m-d H:i:s') . "
";

// Email headers
$headers = [
    'From: ' . $fromName . ' <' . $fromAddress . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
];

// Send email using PHP mail function first
$success = false;
$error = '';

try {
    $success = mail($to, $subject, $emailBody, implode("\r\n", $headers));
    if (!$success) {
        $error = error_get_last()['message'] ?? 'Unknown mail error';
    }
} catch (Exception $e) {
    $error = $e->getMessage();
}

// If mail() fails, try using SMTP directly with fsockopen
if (!$success && function_exists('fsockopen')) {
    try {
        $success = sendSMTPMail($to, $subject, $emailBody, $headers, $mailHost, $mailPort, $mailUsername, $mailPassword, $mailEncryption);
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}

if ($success) {
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you for your message! We will get back to you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send message. Please try again later.',
        'error' => $error
    ]);
}

// SMTP fallback function
function sendSMTPMail($to, $subject, $body, $headers, $host, $port, $username, $password, $encryption) {
    $protocol = $encryption === 'ssl' ? 'ssl' : 'tcp';
    $context = stream_context_create();
    
    $socket = @stream_socket_client(
        $protocol . '://' . $host . ':' . $port,
        $errno,
        $errstr,
        30,
        STREAM_CLIENT_CONNECT,
        $context
    );
    
    if (!$socket) {
        throw new Exception("Failed to connect to SMTP server: $errstr");
    }
    
    // Read greeting
    fgets($socket, 512);
    
    // Send EHLO
    fwrite($socket, "EHLO " . $_SERVER['HTTP_HOST'] . "\r\n");
    fgets($socket, 512);
    
    // Start TLS if needed
    if ($encryption === 'tls') {
        fwrite($socket, "STARTTLS\r\n");
        fgets($socket, 512);
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        fwrite($socket, "EHLO " . $_SERVER['HTTP_HOST'] . "\r\n");
        fgets($socket, 512);
    }
    
    // Authentication
    fwrite($socket, "AUTH LOGIN\r\n");
    fgets($socket, 512);
    fwrite($socket, base64_encode($username) . "\r\n");
    fgets($socket, 512);
    fwrite($socket, base64_encode($password) . "\r\n");
    fgets($socket, 512);
    
    // Set sender
    fwrite($socket, "MAIL FROM: <" . $username . ">\r\n");
    fgets($socket, 512);
    
    // Set recipient
    fwrite($socket, "RCPT TO: <" . $to . ">\r\n");
    fgets($socket, 512);
    
    // Start data
    fwrite($socket, "DATA\r\n");
    fgets($socket, 512);
    
    // Build email
    $email = "Subject: $subject\r\n";
    foreach ($headers as $header) {
        $email .= $header . "\r\n";
    }
    $email .= "\r\n" . $body . "\r\n.\r\n";
    
    fwrite($socket, $email);
    fgets($socket, 512);
    
    // Close connection
    fwrite($socket, "QUIT\r\n");
    fclose($socket);
    
    return true;
}
?>
