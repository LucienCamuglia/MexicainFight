<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
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

        <title>Mexican shooter</title>
    </head>
    <body>
        <div class="center">
            <h1>Mexican shooter</h1>
            <h2>Welcome</h2>
            <p>Which mexican are you ?</p>
            <form action="./Game.php" method="post">
                <input type="submit" value="El Chapo" name="player1">
                <input type="submit" value="El Guero" name="player2">
            </form>
        </div>
    </body>
</html>
