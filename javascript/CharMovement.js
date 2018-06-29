function CharMovement(player) {
    player.body.setZeroVelocity();
    var moveVel = 150;
    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        player.body.moveLeft(moveVel);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        player.body.moveRight(moveVel);
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        player.body.moveUp(moveVel);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        player.body.moveDown(moveVel);
    }
}

// function CharMovement_mouse(player) { 

// }