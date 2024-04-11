<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === '/server.php/register_events') {


    $json_data = file_get_contents('php://input');

    $data = json_decode($json_data, true);

    $name = $data['name'];
    $contactNumber = $data['contactNumber'];
    $email = $data['email'];

    $message = "Form submitted:\nName: {$name}\nContact Number: {$contactNumber}\nEmail: {$email}\n\nThank you for submitting the form! We will contact you soon!";

    echo json_encode(array('message' => $message));
    exit;
}

http_response_code(404);
echo json_encode(array('error' => 'Endpoint not found'));
