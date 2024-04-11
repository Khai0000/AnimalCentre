<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === '/server.php/feedbacks') {


    $json_data = file_get_contents('php://input');

    $data = json_decode($json_data, true);

    $feedbackMessage = $data['message'];
    $rating = $data['rating'];

    $returnMessage= "Form submitted:\nFeedback: {$feedbackMessage}, \nRating: {$rating}";


    echo json_encode(array('message' => $returnMessage));
    exit;
}

http_response_code(404);
echo json_encode(array('error' => 'Endpoint not found'));
