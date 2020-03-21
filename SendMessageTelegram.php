<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$token = '1027824174:AAH3zfI3g2StZoB-QbG-3CTzPhWMNhNJHA8';
$chat_id = '-467670112';


$arr = array(
    "Имя пользователя: " => $name,
    "Контактная информация: " => $phone,
    "Сообщение: " => $text,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

// if ($sendToTelegram) {
//     header("Location: http://anton-ph.com/");
//     return true;
// } else {
//     header("Location: http://anton-ph.com/contact");
// }