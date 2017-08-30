
// start game when page loads
if(window.attachEvent) {
    window.attachEvent('onload', start);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            start(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = start;
    }
}




function start() {

    var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
    document.body.appendChild(app.view);

    // create a new Sprite from an image path
    var player = PIXI.Sprite.from('https://vignette2.wikia.nocookie.net/finalfantasy/images/a/a1/FFI_PSP_Black_Mage_Map.png/revision/latest?cb=20110503112135');

    // scale player sprite
    player.height = 25;
    player.width = 25;

    // center the sprite's anchor point
    player.anchor.set(0.5);

    // move the sprite to the center of the screen
    player.x = app.renderer.width / 2;
    player.y = app.renderer.height / 2;

    app.stage.addChild(player);

    // Listen for animate update
    //app.ticker.add(function(delta) {
        // just for fun, let's rotate mr rabbit a little
        // delta is 1 if running at 100% performance
        // creates frame-independent tranformation
    //    bunny.rotation += 0.1 * delta;
    //});

    // Add the 'keydown' event listener to our document
    document.addEventListener('keydown', onKeyDown);

    function onKeyDown(key) {
        // W Key is 87
        // Up arrow is 87
        if (key.keyCode === 87 || key.keyCode === 38) {
            // If the W key or the Up arrow is pressed, move the player up.
            if (player.position.y != 0 + player.height) {
            // Don't move up if the player is at the top of the stage
            player.position.y -= player.height;
            }
        }

        // S Key is 83
        // Down arrow is 40
        if (key.keyCode === 83 || key.keyCode === 40) {
            // If the S key or the Down arrow is pressed, move the player down.
            if (player.position.y != app.renderer.height - player.height) {
            // Don't move down if the player is at the bottom of the stage
            player.position.y += player.height;
            }
        }

        // A Key is 65
        // Left arrow is 37
        if (key.keyCode === 65 || key.keyCode === 37) {
            // If the A key or the Left arrow is pressed, move the player to the left.
            if (player.position.x != 0 + player.width) {
            // Don't move to the left if the player is at the left side of the stage
            player.position.x -= player.width;
            }
        }

        // D Key is 68
        // Right arrow is 39
        if (key.keyCode === 68 || key.keyCode === 39) {
            // If the D key or the Right arrow is pressed, move the player to the right.
            if (player.position.x != app.renderer.width - player.width) {
            // Don't move to the right if the player is at the right side of the stage
            player.position.x += player.width;
            }
        }
        
        // Spacebar Key is 32
        if (key.keyCode === 32) {
            var player1 = PIXI.Sprite.from('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOuE7VEPOChgo2jX91wFHnKjXocZDqU-akuKko85d8yVW4u9s');
            //https://s-media-cache-ak0.pinimg.com/236x/c6/47/98/c64798b89b43bbcb68c5f871964e4f6b--texture-painting-low-poly.jpg')

            // scale player sprite
            player1.height = 25;
            player1.width = 25;

            // center the sprite's anchor point
            player1.anchor.set(0.5);

            // move the sprite to the center of the screen
            player1.x = player.x + player.height;
            player1.y = player.y;

            app.stage.addChild(player1);
        }
    
    }
    
}