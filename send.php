<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$form_name = $_POST['form_name'];
switch ($form_name) {
    case 'newsletter':
        $email = $_POST['email'];
        $title = "Подписка на новости";
        $body = "
        <h2>Новый запрос на подписку</h2>
        <b>Email:</b> $email
        ";
        break;
    case 'contact':
        $theme = $_POST['theme'];
        $message = $_POST['message'];
        $email = $_POST['email'];
        $checkbox = $_POST['checkbox'];
        $title = "Новое обращение на портал Universal";
        $body = "
        <h2>Новое обращение</h2>
        <b>Тема:</b> $theme<br>
        <b>Текст сообщения:</b><br>$message<br>
        <b>Email:</b> $email<br>
        <b>Согласие на обработку данных:</b> $checkbox
        ";
        break;
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'ea.knvn@gmail.com'; // Логин на почте
    $mail->Password   = 'Fyayaw098'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ea.knvn@gmail.com', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ea.knvn@gmail.com'); 

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thank-you.html');
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);