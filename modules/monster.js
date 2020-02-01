class Monsters {
    constructor(phaserObj) {
        this.__phaser = phaserObj;
        this.__phaser.load.image('dude', '../assets/dude.png')
    }
    
    initMonsters () {
        this.__phaser.add.image(50, 50, 'dude');
    }
}