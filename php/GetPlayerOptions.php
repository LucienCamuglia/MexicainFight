<?php

if (isset($_GET["playersReady"])) {
    if (file_exists("../GameFiles/player1.xml") && (file_exists("../GameFiles/player2.xml"))) {
        $ready = true;
    } else {
        $ready = false;
    }
    echo $ready;
}

if (isset($_GET["playersOption"])){
           
}

