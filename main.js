var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 900,
    scene: {
        preload,
        create,
        update
    },
    physics: {
        default: 'impact',
        impact: {
            gravity: 0,
            debug: false
        }
    },
};

var game = new Phaser.Game(config);
let player;
let cursors;
let __monsters;

//load assets here
function preload() {
    this.load.image('box', 'assets/bird.png');
    this.load.spritesheet('player_down', 'assets/player_down.png', { frameWidth: 94, frameHeight:94 });
    this.load.spritesheet('player_up', 'assets/player_up.png', { frameWidth: 94, frameHeight: 94 });
    this.load.spritesheet('player_left', 'assets/player_left.png', { frameWidth: 94, frameHeight: 94 });
    this.load.spritesheet('player_right', 'assets/player_right.png', { frameWidth: 94, frameHeight: 94 });
    this.load.image('bg', 'assets/bg.png');

    __monsters = new Monsters(this);
}

//sequence of added images is important. they overlap.
function create() {
    this.add.image(600, 450, 'bg');
    // this.add.sprite(1200 + 130, 270, 'player_down'); base position
    this.impact.world.setBounds();


    //animations
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player_left', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player_right', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('player_down', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('player_up', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });


    player = this.impact.add.sprite(200, 200, 'bird', 4).setOrigin(0, 0.15);
    player.setActiveCollision();
    player.setMaxVelocity(150); //150 if with no item. 50 with item.
    player.setFriction(2000, 100);
    player.body.accelGround = 100;

    cursors = this.input.keyboard.createCursorKeys();

    __monsters.initMonsters();
}

function update(time, delta) {
    var accel = player.body.accelGround;

    if (cursors.left.isDown) {
        player.setAccelerationX(-accel);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setAccelerationX(accel);
        player.anims.play('right', true);
    }
    else if (cursors.up.isDown) {
        player.setAccelerationY(-accel);
        player.anims.play('up', true);
    }
    else if (cursors.down.isDown) {
        player.setAccelerationY(accel);
        player.anims.play('down', true);
    }
    else {
        player.setAccelerationX(0);
        player.setAccelerationY(0);
    }
}