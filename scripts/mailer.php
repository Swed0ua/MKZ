
<?php
$to      = 'mebli.biz@gmail.com';
$subject = 'Опитувальник';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$mes = file_get_contents('php://input') ;

mail($to, $subject, $mes, $headers);
?>
