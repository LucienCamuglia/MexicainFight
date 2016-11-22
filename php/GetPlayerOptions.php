<?php

if (isset($_GET["playersReady"])) {
    $ready = FALSE;
    if (file_exists("../GameFiles/player1.json") && (file_exists("../GameFiles/player2.json"))) {
        $ready = true;
    } else {
        $ready = false;
    }
    echo $ready;
}

if (isset($_GET["playersOption"])){
    $jsonFile = file_get_contents("../GameFiles/player1.json");
    $data[0] = json_decode($jsonFile);
    $jsonFile = file_get_contents("../GameFiles/player1.json");
    $data[1] = json_decode($jsonFile);
   // print_r($data);
    echo json_encode($data);
}

?>