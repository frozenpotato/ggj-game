class Meteors {
    __meteors = [];

    constructor(phaser) {
        this.__phaser = phaser;
        this.__phaser.load.spritesheet('meteor', '../assets/meteor.png', { frameWidth: 90, frameHeight: 90 });
    }

    initialize () {
        this.generateMeteor(-100, -500);
        this.generateMeteor(-500, -100);
        this.generateMeteor(0, 0);

        this.randomMeteor();
    }

    randomMeteor () {
        const self = this;
        setInterval(() => {
            const x = self.generateRandomX();
            const y = self.generateRandomY();
            self.generateMeteor(x, y);
        }, 2000)
    }

    generateRandomX () {
        const min = 0;
        const max = 200;

        const randomX = Math.floor(Math.random() * (max - min)) + min;

        return randomX * -1;
    }

    generateRandomY () {
        const min = 0;
        const max = 500;

        const randomY = Math.floor(Math.random() * (max - min)) + min;

        return randomY * -1;
    }
    
    generateMeteor (x, y) {
        let meteor = this.__phaser.physics.add.sprite(x, y, 'meteor');
        meteor.setCollideWorldBounds(false);
        meteor.body.setGravity(300);

        this.__phaser.anims.create({
            key: 'meteor_drop',
            frames: this.__phaser.anims.generateFrameNumbers('meteor', { start: 0, end: 0 }),
            frameRate: 15,
            repeat: -1
        });

        this.__meteors.push(meteor);
    }

    checkMeteorPosition () {
        for (const [index, meteor] of this.__meteors.entries()) {
            this.checkCollision(this.__meteors, index, meteor);
        }
    }

    checkCollision (array, index, meteor) {
        if (meteor.body.x > (1200 + meteor.body.x)) {
            array.splice(index, 1);
        }
    }
}