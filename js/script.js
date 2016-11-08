/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    mex = new Mexican();
    mex.initialize({x: 10, y: 10}, './Img/Mexicain.png');
    mex.draw($('canvas'));
    /*
    $('#information').text(mex.toString());
    $('#lose').on('click', function() {
        mex.setLife(mex.getLife() - 1);
        $('#information').text(mex.toString());
    });
    
    $('#health').on('click', function() {
        mex.takeBeer();
        $('#information').text(mex.toString());
    });*/
});

