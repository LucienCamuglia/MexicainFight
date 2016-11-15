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
    mex = new Mexican();
    mex.initialize({x: 10, y: 100}, './Img/Mexicain.png');
    lifeUpTaking = false;
}

/**
 * Draw all element of the game
 */
function draw() {
    $('canvas').clearCanvas();
    mex.draw($('canvas'));
}

/**
 * Update the game
 */
function update() {
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
