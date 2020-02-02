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
let __monsters;
let __parts;
let __meteors;

//load assets here
function preload() {
    this.load.image('bg', 'assets/bg.png');

    __monsters = new Monsters(this);
    __parts = new Parts(this);
    __meteors = new Meteors(this);
    player = new Player(this);
}

function create() {
    this.add.image(600, 450, 'bg');
    player.initialize();
    __monsters.initialize();
    __parts.initParts();
    __meteors.initialize();
}

function update(time, delta) {
    player.movePlayer();
    __monsters.moveHarpeeLeft();
    __monsters.moveMushroomLeft();

    __monsters.movePinkmanRight();
    __monsters.moveGreenPeasesRight();

    __meteors.checkMeteorPosition();

}