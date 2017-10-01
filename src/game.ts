class Game {
    
    public static main() {
        
        var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
        let gameView = document.getElementById('gameView')!;
        gameView.appendChild(app.view);
    
        // create a new Sprite from an image path
        var player = PIXI.Sprite.fromImage('required/assets/characters/BlackMage.png');

        // scale player sprite
        player.height = 25;
        player.width = 25;
    
        // center the sprite's anchor point
        player.anchor.set(0.5);
    
        // move the sprite to the center of the screen
        player.x = app.renderer.width / 2;
        player.y = app.renderer.height / 2;
    
        app.stage.addChild(player);
    
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
                var wall = PIXI.Sprite.from('required/assets/dungeon/walls/wall_vines0.png');
    
                // scale player sprite
                wall.height = 25;
                wall.width = 25;
    
                // center the sprite's anchor point
                wall.anchor.set(0.5);
    
                // move the sprite to the center of the screen
                wall.x = player.x + player.height;
                wall.y = player.y;
    
                app.stage.addChild(wall);
            }
        
        }
            
    }
}