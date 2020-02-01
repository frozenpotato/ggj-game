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
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
};

var game = new Phaser.Game(config);
let player;

//load assets here
function preload() {
    this.load.image('box', 'assets/bird.png');
    this.load.image('bg', 'assets/bg.png');
}

//sequence of added images is important. they overlap.
function create() {
    this.add.image(530, 450, 'bg');
    this.physics.add.sprite(400, 300, 'box')
}

function update() {
}