<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "you@example.com"; // Replace with your email
  $subject = "New Contact Form Submission";
  $message = "First Name: " . $_POST['firstname'] . "\n";
  $message .= "Last Name: " . $_POST['lastname'] . "\n";
  $message .= "Subject: " . $_POST['subject'] . "\n";
  
  // Send email
  mail($to, $subject, $message);
  
  echo "Form submission sent!";
}
?>
