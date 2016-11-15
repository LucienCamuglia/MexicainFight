/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Global variable*/
var mex;

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
                mex.initialize({x: data[0][0]["x"], y: data[0][0]["y"]}, './Img/Mexicain.png');
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
}

/*
 * Keydown evenement
 */
$(document).keydown(function(k) {
    mex.keydownEvent(k);
});

/*
 * Keyup evenement
 */
$(document).keyup(function(k) {
    mex.keyupEvent(k);
});
