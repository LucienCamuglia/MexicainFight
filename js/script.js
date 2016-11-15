/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Global variable*/
var mex;
var mex2;

$(function() {

    initialize();

    /* Main gameloop */
    setInterval(function() {
        update();
        draw();
    }, 1);
});

/**
 * Initialize all element in the game
 */
function initialize() {
    $.ajax({
        url: './php/GetPlayerOptions.php',
        type: 'GET',
        data: {playersReady: "yes"},
        success: function(data)
        {
            if (data) {

                data = JSON.parse(data);//TIDO
                mex = new Mexican();
    mex2 = new Mexican();
    
    lifeUpTaking = false;
                mex2 = new Mexican();
                mex2.initialize({x: data[1][0]["x"], y: data[1][0]["y"]}, './Img/Mexicain.png');

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
    $.ajax({url: "../php/displayInformation.php",
        method: "POST",
        data : {drink: mexican.getLifeUp(), tacos : mexican.getLife(), bullet: mexican.getBullet()},
        success: function(result) {
            zone.html(result);
        }});
}

/*
 * Keydown evenement
 */
$(document).keydown(function(k) {
    mex.keydownEvent(k);

    if ((k.which | k.KeyCode) === 32)
    {
        mex.shoot();
    }
});

/*
 * Keyup evenement
 */
$(document).keyup(function(k) {
    mex.keyupEvent(k);
});
