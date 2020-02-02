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
        default: 'arcade',
        impact: {
            gravity: 0,
            debug: false
        },
        arcade: {
            gravity: 0,
            debug: false
        }
    },
};

var game = new Phaser.Game(config);
let player;
let cursors;
let __spaceship;
let __monsters;
let __parts;
let __meteors;

//load assets here
function preload() {
    this.load.image('bg', 'assets/bg.png');
    this.load.image('spaceship', 'assets/spaceship.png');

    __monsters = new Monsters(game, this);
    __parts = new Parts(this);
    __meteors = new Meteors(this);
    player = new Player(this);
}

function create() {
    this.add.image(600, 450, 'bg');
    // this.add.image(600, 115, 'spaceship');
    this.__spaceship = this.physics.add.sprite(600, 115, 'spaceship', 4);
    this.__spaceship.setCollideWorldBounds(true);

    player.initialize();
    __monsters.initialize();
    __parts.initParts();
    __meteors.initialize();
}

function update(time, delta) {
    player.movePlayer();

    __monsters.updateMonsters(time);
    __meteors.checkMeteorPosition();

}