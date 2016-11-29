/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Global variable*/
var mex;
var mex2;
var gameStarted;
var bullets = [];

$(function() {
    gameStarted = false;
    initialize();

    /* Main gameloop */
    setInterval(function() {
        if (gameStarted) {
            update();
            draw();
        }
    }, 1);
});

/**
 * Initialize all element in the game
 */
function initialize() {
    mex = new Mexican();
    mex2 = new Mexican();
    $.ajax({
        url: './php/GetPlayerOptions.php',
        type: 'GET',
        data: {playersReady: "yes"},
        success: function(data)
        {
            if (data) {
                $.ajax({
                    url: './php/GetPlayerOptions.php',
                    type: 'GET',
                    data: {playersOption: "yes"},
                    success: function(data)
                    {
                        data = JSON.parse(data);//TIDO
                        mex = new Mexican();
                        mex.initialize({x: data[0]["Mexican"]["position"]["x"], y: data[0]["Mexican"]["position"]["y"]}, './Img/Mexicain.png');


                        lifeUpTaking = false;
                        mex2 = new Mexican();
                        mex2.initialize({x: 290, y: data[1]["Mexican"]["position"]["y"]}, './Img/Mexicain2.png');

                        gameStarted = true;
                    }
                });
            }
        }
    });

}

/**
 * Draw all element of the game
 */
function draw() {
    $('canvas').clearCanvas();
    if (mex != null)
        mex.draw($('canvas'));
   drawMex2();

    bullets.forEach(function(b) {
        b.draw($('canvas'));
    });
}

function drawMex2(){
     if (mex2 != null) {
        $.ajax({
            url: './php/GetPlayerOptions.php',
            type: 'GET',
            data: {Player2: "yes"},
            success: function(data)
            {
                data = JSON.parse(data);
                data = JSON.parse(data);
                mex2.position.y = data["Mexican"]["position"]["y"];

            }
        })
        mex2.draw($('canvas'));
    }
}
/**
 * Update the game
 */
function update() {
    if (mex != null)
        mex.move($('canvas'));

    updateDisplay(mex, $(".InfoZone"));
    updateDisplay(mex2, $(".InfoZoneEnemy"));

}

/**
 * Update information display
 * @param {Mexican} mexican Mexican which refreshed
 * @param {Object} zone Zone where display is done
 */
function updateDisplay(mexican, zone) {
    $.ajax({url: "./php/displayInformation.php",
        method: "POST",
        data: {drink: mexican.getLifeUp(), tacos: mexican.getLife(), bullet: mexican.getBullet()},
        success: function(result) {
            zone.html(result);
        }});
}

/*
 * Keydown evenement
 */
$(document).keydown(function(k) {
    mex.keydownEvent(k);

    if (((k.which | k.KeyCode) === 32)&&(mex.bullet > 0))
    {
        tmpBullet = new Bullet();
        pos = {x: mex.getPosition().x, y: mex.getPosition().y};
        tmpBullet.initialize(pos, "./Img/bullet.png", {x: 1, y: 0}, 1, 1);
        bullets.push(tmpBullet);
        mex.shoot();
    }
});

/*
 * Keyup evenement
 */
$(document).keyup(function(k) {
    mex.keyupEvent(k);
});
