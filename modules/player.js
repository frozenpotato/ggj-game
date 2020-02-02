const SPRITE_ATTRIBS = { frameWidth: 94, frameHeight: 94 }

class Player {
    constructor(phaserObj) {
        this.phaser = phaserObj;
        this.phaser.load.spritesheet('player_down', '../assets/player_down.png', SPRITE_ATTRIBS);
        this.phaser.load.spritesheet('player_up', '../assets/player_up.png', SPRITE_ATTRIBS);
        this.phaser.load.spritesheet('player_left', '../assets/player_left.png', SPRITE_ATTRIBS);
        this.phaser.load.spritesheet('player_right', '../assets/player_right.png', SPRITE_ATTRIBS);
        this.phaser.load.spritesheet('player_q1', '../assets/player_q1.png', SPRITE_ATTRIBS);
        this.phaser.load.spritesheet('player_q2', '../assets/player_q2.png', SPRITE_ATTRIBS);
        this.phaser.load.spritesheet('player_q3', '../assets/player_q3.png', SPRITE_ATTRIBS);
        this.phaser.load.spritesheet('player_q4', '../assets/player_q4.png', SPRITE_ATTRIBS);
        this.cursors = this.phaser.input.keyboard.createCursorKeys();
    }
    
    initialize () {
        this.initAnimations();
        this.initPlayer();
    }
    
    initAnimations() {
        this.phaser.anims.create({
            key: 'left',
            frames: this.phaser.anims.generateFrameNumbers('player_left', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.phaser.anims.create({
            key: 'right',
            frames: this.phaser.anims.generateFrameNumbers('player_right', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.phaser.anims.create({
            key: 'down',
            frames: this.phaser.anims.generateFrameNumbers('player_down', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.phaser.anims.create({
            key: 'up',
            frames: this.phaser.anims.generateFrameNumbers('player_up', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.phaser.anims.create({
            key: 'q1',
            frames: this.phaser.anims.generateFrameNumbers('player_q1', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.phaser.anims.create({
            key: 'q2',
            frames: this.phaser.anims.generateFrameNumbers('player_q2', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.phaser.anims.create({
            key: 'q3',
            frames: this.phaser.anims.generateFrameNumbers('player_q3', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.phaser.anims.create({
            key: 'q4',
            frames: this.phaser.anims.generateFrameNumbers('player_q4', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    }

    initPlayer() {
        this.player = this.phaser.physics.add.sprite(200, 200, 'bird', 4).setOrigin(0, 0.15);
        this.player.setCollideWorldBounds(true);
        this.player.setMaxVelocity(150); //150 if with no item. 50 with item.
        this.player.setFriction(2000, 100);
        this.player.body.accelGround = 100;
    }

    movePlayer () {
        const accel = 100;
        if (this.cursors.up.isDown && this.cursors.right.isDown) {
            this.player.setAccelerationX(accel);
            this.player.setAccelerationY(-accel);
            this.player.anims.play('q1', true);
        }
        else if (this.cursors.down.isDown && this.cursors.right.isDown) {
            this.player.setAccelerationX(accel);
            this.player.setAccelerationY(accel);
            this.player.anims.play('q2', true);
        }
        else if (this.cursors.down.isDown && this.cursors.left.isDown) {
            this.player.setAccelerationX(-accel);
            this.player.setAccelerationY(accel);
            this.player.anims.play('q3', true);
        }
        else if (this.cursors.up.isDown && this.cursors.left.isDown){
            this.player.setAccelerationX(-accel);
            this.player.setAccelerationY(-accel);
            this.player.anims.play('q4', true);
        }
        else if (this.cursors.left.isDown) {
            this.player.setAccelerationX(-accel);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setAccelerationX(accel);
            this.player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown) {
            this.player.setAccelerationY(-accel);
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.setAccelerationY(accel);
            this.player.anims.play('down', true);
        }
        else {
            this.player.setAccelerationX(0);
            this.player.setAccelerationY(0);
        }
    }
}