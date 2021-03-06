<!DOCTYPE html>
<?php
if (isset($_POST["player1"])) {
    $currentPlayer = "player1";
} elseif (isset($_POST["player2"])) {
    $currentPlayer = "player2";
} else {
    header("location: index.php");
}
/*$tequila = 3;
$tacos = 4;
$bullet = 5;
$player1x = 10;*/

if (!file_exists("./GameFiles/$currentPlayer.json")) {
    copy("./GameFiles/DefaultMexican.json", "./GameFiles/$currentPlayer.json");
}

if (file_exists("./GameFiles/player1.json") && (file_exists("./GameFiles/player2.json"))) {
   $ready = true;      
} else {
    $ready = false;

}
?>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="./css/style.css" rel="stylesheet" />

        <!-- game component -->
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="./js/jcanvas.js" type="text/javascript"></script>
        <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">        
        <script src="./js/mexican.js" type="text/javascript"></script>
        <script src="./js/bullet.js" type="text/javascript"></script>
        <script src="./js/script.js" type="text/javascript"></script>
        <script>

        </script>
        <title>Mexican shooter</title>
    </head>
    <body id="game" >
        <div class="modal-popup">
            <p>Waiting for other player, please wait</p>
        </div>
        <h1 class="center">Mexican shooter</h1>
        <div class="InfoZone">
            <!--<div class="LifeUpZone">
                <?php
                /*echo '<ul>';
                for ($i = 0; $i < $tequila; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/tequila.png" alt="LifeUp"/>';
                    echo '</li>';
                }
                echo '</ul>';*/
                ?>
            </div>

            <div class="tacosZone">
                <?php
                /*echo '<ul>';
                for ($i = 0; $i < $tacos; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/tacos.png" alt="Life"/>';
                    echo '</li>';
                }
                echo '</ul>';*/
                ?>
            </div>

            <div class="bulletZone">
                <?php
                /*echo '<ul>';
                for ($i = 0; $i < $bullet; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/bulletReload.png" alt="shots"/>';
                    echo '</li>';
                }
                echo '</ul>';*/
                ?>
            </div>-->
        </div>

        <canvas id="gameBoard"></canvas>

        <div class="InfoZoneEnemy">
            <!-- <div class="LifeUpZone">
                <?php
                /*echo '<ul>';
                for ($i = 0; $i < $tequila; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/tequila.png" alt="LifeUp"/>';
                    echo '</li>';
                }
                echo '</ul>';*/
                ?>
            </div>

            <div class="tacosZone">
                <?php
                /*echo '<ul>';
                for ($i = 0; $i < $tacos; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/tacos.png" alt="Life"/>';
                    echo '</li>';
                }
                echo '</ul>';*/
                ?>
            </div>

            <div class="bulletZone">
                <?php
                /*echo '<ul>';
                for ($i = 0; $i < $bullet; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/bulletReload.png" alt="shots"/>';
                    echo '</li>';
                }
                echo '</ul>';*/
                ?>
            </div>-->
        </div>
    </body>
</html>
