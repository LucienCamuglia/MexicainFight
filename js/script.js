/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    mex = new Mexican();
    mex.initialize({x: 10, y: 100}, './Img/Mexicain.png');
    
    
    setInterval(function() {
        $('canvas').clearCanvas();
        mex.draw($('canvas'));
    }, 1);
    
  //  mex.initialize({x: 10, y: 10}, './Img/Mexicain.png');
 //   mex.draw($('canvas'));
    
    $(document).keypress(function(k) {
        var pressedKey = k.which || k.keyCode;
        moving = {x: 0, y: 0};

        if (pressedKey === 119) {
            //mex.setPosition({x: mex.getPosition().x, y: mex.getPosition().y - 1});
            moving.y = -1;
        } else if (pressedKey === 115) {
            moving.y = 1;
            //mex.setPosition({x: mex.getPosition().x, y: mex.getPosition().y + 1});
        } else {
            alert(pressedKey.toString());
        }
        
        
        
        mex.move($('canvas'), moving);
    });
});

