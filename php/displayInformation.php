<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if (isset($_POST["drink"]) && isset($_POST["tacos"]) && isset($_POST["bullet"])) {
    $tequila = filter_input(INPUT_POST, "drink");
    $tacos = filter_input(INPUT_POST, "tacos");
    $bullet = filter_input(INPUT_POST, "bullet");

    $lifezone = "";
    $lifezone .= '<div class="LifeUpZone">';
    $lifezone .= '<ul>';

    for ($i = 0; $i < $tequila; $i++) {
        $lifezone .= '<li>';
        $lifezone .= '<img src="./Img/tequila.png" alt="LifeUp"/>';
        $lifezone .= '</li>';
    }

    $lifezone .= '</ul>';
    $lifezone .= '</div>';

    $tacoszone = '';
    $tacoszone .= '<div class="tacosZone">';
    $tacoszone .= '<ul>';
    for ($i = 0; $i < $tacos; $i++) {
        $tacoszone .= '<li>';
        $tacoszone .= '<img src="./Img/tacos.png" alt="Life"/>';
        $tacoszone .= '</li>';
    }
    $tacoszone .= '</ul>';
    $tacoszone .= '</div>';


    $bulletzone = '<div class = "bulletZone">';
    $bulletzone .= '<ul>';
    for ($i = 0; $i < $bullet; $i++) {
        $bulletzone .= '<li>';
        $bulletzone .= '<img src="./Img/bulletReload.png" alt="shots"/>';
        $bulletzone .= '</li>';
    }
    $bulletzone .= '</ul>';
    $bulletzone .= '</div>';

    echo $lifezone . $tacoszone . $bulletzone;
}


