<!DOCTYPE html>
<?php
if (isset($_POST["player1"])) {
    $currentPlayer = "player1";    
} elseif (isset($_POST["player2"])) {
    $currentPlayer = "player2";
} else {
    header("location: index.php");
}
$tequila = 3;
$tacos = 4;
$bullet = 5;
$player1x=10;
$sh = shmop_open($player1x, "w", 0777, 250);
shmop_write($sh, $player1x, 0);


if ($sh = shmop_open($player1x, "a", 0, 0) != FALSE){
    shmop_read($sh, $player1x, 24);
}
?>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="./css/style.css" rel="stylesheet" />

        <!-- game component -->
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="./js/jcanvas.js" type="text/javascript"></script>
        <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">        
        <script src="./js/mexican.js" type="text/javascript"></script>
        <script src="./js/bullet.js" type="text/javascript"></script>
        <script src="./js/script.js" type="text/javascript"></script>
        <script>
            function init() {
                var player1x = <?php echo $player1x; ?>;
                player1 = new Mexican();
                player1.initialize({x: player1x, y: 10}, './Img/Mexicain.png');
                player1.draw($('canvas'));
                
                player2 = new Mexican();
                player2.initialize({x: 290, y: 10}, './Img/Mexicain2.png');
                player2.draw($('canvas'));
            }
        </script>
        <title>Mexican shooter</title>
    </head>
    <body id="game" onload="init()">
        <h1 class="center">Mexican shooter</h1>
        <div class="InfoZone">
            <div class="LifeUpZone">
                <?php
                echo '<ul>';
                for ($i = 0; $i < $tequila; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/tequila.png" alt="LifeUp"/>';
                    echo '</li>';
                }
                echo '</ul>';
                ?>
            </div>

            <div class="tacosZone">
                <?php
                echo '<ul>';
                for ($i = 0; $i < $tacos; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/tacos.png" alt="Life"/>';
                    echo '</li>';
                }
                echo '</ul>';
                ?>
            </div>

            <div class="bulletZone">
                <?php
                echo '<ul>';
                for ($i = 0; $i < $bullet; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/bulletReload.png" alt="shots"/>';
                    echo '</li>';
                }
                echo '</ul>';
                ?>
            </div>
        </div>

        <canvas id="gameBoard"></canvas>

        <div class="InfoZone">
            <div class="LifeUpZone">
                <?php
                echo '<ul>';
                for ($i = 0; $i < $tequila; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/tequila.png" alt="LifeUp"/>';
                    echo '</li>';
                }
                echo '</ul>';
                ?>
            </div>

            <div class="tacosZone">
                <?php
                echo '<ul>';
                for ($i = 0; $i < $tacos; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/tacos.png" alt="Life"/>';
                    echo '</li>';
                }
                echo '</ul>';
                ?>
            </div>

            <div class="bulletZone">
                <?php
                echo '<ul>';
                for ($i = 0; $i < $bullet; $i++) {
                    echo '<li>';
                    echo '<img src="./Img/bulletReload.png" alt="shots"/>';
                    echo '</li>';
                }
                echo '</ul>';
                ?>
            </div>
        </div>
    </body>
</html>
