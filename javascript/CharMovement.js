function setAnimation(CharSheetImg){
    anim.create({
        key: 'down', 
        frames: generateFrameNumbers(charSheetImg, { start: 2, end: 5}), 
        frameRate: 20,
        repeat: -1
    })
    anim.create({
        key: 'down-right', 
        frames: generateFrameNumbers(charSheetImg, { start: 9, end: 12}), 
        frameRate: 20,
        repeat: -1
    })
    anim.create({
        key: 'right', 
        frames: generateFrameNumbers(charSheetImg, { start: 16, end: 19}), 
        frameRate: 20,
        repeat: -1
    })
    anim.create({
        key: 'top-right', 
        frames: generateFrameNumbers(charSheetImg, { start: 23, end: 26}), 
        frameRate: 20,
        repeat: -1
    })
    anim.create({
        key: 'top', 
        frames: generateFrameNumbers(charSheetImg, { start: 30, end: 33}), 
        frameRate: 20,
        repeat: -1
    })
    anim.create({
        key: 'top-left', 
        frames: generateFrameNumbers(charSheetImg, { start: 37, end: 40}), 
        frameRate: 20,
        repeat: -1
    })
    anim.create({
        key: 'left', 
        frames: generateFrameNumbers(charSheetImg, { start: 44, end: 47}), 
        frameRate: 20,
        repeat: -1
    })
    anim.create({
        key: 'down-left', 
        frames: generateFrameNumbers(charSheetImg, { start: 51, end: 54}), 
        frameRate: 20,
        repeat: -1
    })
    anim.create({
        key: 'stand-down', 
        frames: [ { key: charSheetImg, frame: 1 } ], 
        frameRate: 20
    })
}

function CharMovement(player) {
    player.body.setZeroVelocity();
    var moveVel = 150;
    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        player.body.moveLeft(moveVel);
        player.anim.play('left');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        player.body.moveRight(moveVel);
        player.anim.play('right');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        player.body.moveUp(moveVel);
        player.anim.play('top');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        player.body.moveDown(moveVel);
        player.anim.play('down');
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.S) && game.input.keyboard.isDown(Phaser.Keyboard.A)){
        player.body.moveDown(moveVel);
        player.body.moveLeft(moveVel);
        player.anim.play('down-left');
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.S) && game.input.keyboard.isDown(Phaser.Keyboard.D)){
        player.body.moveDown(moveVel);
        player.body.moveRight(moveVel);
        player.anim.play('down-right');
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.W) && game.input.keyboard.isDown(Phaser.Keyboard.A)){
        player.body.moveUp(moveVel);
        player.body.moveLeft(moveVel);
        player.anim.play('top-left');
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.W) && game.input.keyboard.isDown(Phaser.Keyboard.D)){
        player.body.moveUp(moveVel);
        player.body.moveRight(moveVel);
        player.anim.play('top-right');
    }
    else{
        player.anim.play('stand-down');
    }
}

// function CharMovement_mouse(player) { 

// }