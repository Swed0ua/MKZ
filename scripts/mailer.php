<?php
$to      = 'shmagala@gmail.com';
$subject = $_POST['title'];
$message = 'hello';
$headers = $_POST['resultText']

mail($to, $subject, $message, $headers);
?>
