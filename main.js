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
    this.load.image('bg', 'assets/bg.png');

    __monsters = new Monsters(this);
}

//sequence of added images is important. they overlap.
function create() {
    this.add.image(600, 450, 'bg');
    this.impact.world.setBounds();

    player = this.impact.add.sprite(200, 200, 'bird', 4).setOrigin(0, 0.15);
    player.setActiveCollision();
    player.setMaxVelocity(500);
    player.setFriction(1000, 100);
    player.body.accelGround = 1200;
    player.body.accelAir = 600;
    player.body.jumpSpeed = 500;

    cursors = this.input.keyboard.createCursorKeys();

    __monsters.initMonsters();
}

function update(time, delta) {
    var accel = player.body.standing ? player.body.accelGround : player.body.accelAir;

    if (cursors.left.isDown) {
        player.setAccelerationX(-accel);
    }
    else if (cursors.right.isDown) {
        player.setAccelerationX(accel);
    }
    else if (cursors.up.isDown) {
        player.setAccelerationY(-accel);
    }
    else if (cursors.down.isDown) {
        player.setAccelerationY(accel);
    }
    else {
        player.setAccelerationX(0);
    }

    if (player.vel.x === 0) {
        player.anims.play('turn');
    }
}