<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE,OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$routes = array(
    '/server.php' => 'home',
    '/server.php/news' => 'getNews',
    '/server.php/register_events' => 'registerEvents',
    '/server.php/collaborations'=>"collaboration"
);

$request_uri = $_SERVER['REQUEST_URI'];
$action = $routes[$request_uri] ?? 'notFound';

switch ($action) {
    case "getNews": {
            include "news.php";
            break;
        }
    case "registerEvents":{
        include "eventRegister.php";
        break;
    }
    case "collaboration":{
        include "collaboration.php";
        break;
    }
}
