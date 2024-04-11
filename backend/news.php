<?php

$news_api_url = 'https://newsapi.org/v2/everything?q=%22plastic%20pollution%22&language=en&sortBy=popularity&apiKey=f56be75d496143a2b2aad7815515c305';
$news_data = file_get_contents("https://newsapi.org/v2/everything?q=%22plastic%20pollution%22&language=en&sortBy=popularity&apiKey=f56be75d496143a2b2aad7815515c305");

if ($news_data === false) {
    http_response_code(500); 
    echo json_encode(array('error' => 'Failed to fetch news data'));
} else {
    echo $news_data;
}

?>
