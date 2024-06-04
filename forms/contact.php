<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }
   
    $to = "soberclubrw@gmail.com";
   
    $subject = "Contact Form Submission";
    
    
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: $message\n";
    
    
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    
if (mail($to, $subject, $email_message, $headers)) {
    
    echo "Message sent successfully.";
} else {
    echo "Failed to send message. Please try again later.";
}

} else {
   
    echo "Invalid request method.";
}
?>
