class Monsters {
    __harpees = [];
    __mushrooms = [];
    __pinkmans = [];
    __greenPeases = [];

    constructor(phaserObj) {
        this.__phaser = phaserObj;
        this.__phaser.load.spritesheet('harpee', '../assets/monster.png', { frameWidth: 130, frameHeight: 147 });
        this.__phaser.load.spritesheet('pinkman', '../assets/pinkman.png', { frameWidth: 110, frameHeight: 110 });
        this.__phaser.load.spritesheet('mushroom', '../assets/mushroom.png', { frameWidth: 115, frameHeight: 122 });
        this.__phaser.load.spritesheet('green_peas', '../assets/green_peas.png', { frameWidth: 64, frameHeight: 144 });
    }

    initialize () {
        this.initGreenPeas(0, 410);
        this.initGreenPeas(100, 560);
        this.initGreenPeas(0, 410);
        this.initGreenPeas(200, 250);
        this.initGreenPeas(0, 300);
        this.initGreenPeas(300, 410);
        this.initGreenPeas(400, 410);

        this.initMushroom(1250, 300);
        this.initMushroom(1500, 560);
        this.initMushroom(2005, 560);
        this.initMushroom(1315, 310);
        this.initMushroom(1425, 410);
        this.initMushroom(1852, 250);
        this.initMushroom(1158, 410);

        this.initHarpee(3300, 250);
        this.initHarpee(1700, 560);
        this.initHarpee(3200, 410);
        this.initHarpee(1500, 560);
        this.initHarpee(2100, 250);
        this.initHarpee(1500, 410);
        this.initHarpee(1500, 560);
        this.initHarpee(1500, 250);
        this.initHarpee(1500, 250);
        this.initHarpee(3500, 250);
        this.initHarpee(2300, 250);
        this.initHarpee(3000, 560);
        this.initHarpee(2500, 410);

        this.initPinkman(-145, 410);
        this.initPinkman(-500, 300);
        this.initPinkman(-400, 560);
        this.initPinkman(-150, 250);
        this.initPinkman(-350, 560);
        this.initPinkman(-550, 300);
        this.initPinkman(-150, 410);

        this.generateMonsters();
    }

    generateMonsters () {
        const self = this;
        
        setInterval(() => {
            const monsterTypeMax = MonsterTypes.MONSTER_TYPES().length;
            const monsterType = Math.floor(Math.random() * Math.floor(monsterTypeMax));

            const monster = MonsterTypes.MONSTER_TYPES()[monsterType];
            const randomX = self.getRandomX(monster.direction);
            const randomY = self.getRandomY();

            if (randomY < 0) return;

            switch (monster.type) {
                case MonsterTypes.HARPEE():
                    self.initHarpee(randomX, randomY);
                    break;
                case MonsterTypes.MUSHROOM():
                    self.initMushroom(randomX, randomY);
                    break;
                case MonsterTypes.PINKMAN():
                    self.initPinkman(randomX, randomY);
                    break;
                case MonsterTypes.GREEN_PEAS():
                    self.initGreenPeas(randomX, randomY);
                    break;
                default:
                    return;
            }
        }, 500);
    }

    getRandomX (direction) {
        if (direction === MonsterTypes.DIRECTION_LEFT()) {
            const min = 1400;
            const max = 5000
            return Math.floor(Math.random() * (max - min)) + min;
        } else {
            const min = 0;
            const max = 1000;
            return (Math.floor(Math.random() * (max - min)) + min) * -1;
        }
    }

    getRandomY () {
        const row = Math.floor(Math.random() * Math.floor(3));
        let randomY = -1;

        switch (row) {
            case 0: {
                const min = 300, max = 375;
                randomY = Math.floor(Math.random() * (max - min)) + min;
                break;
            }
            case 1: {
                const min = 450, max = 515;
                randomY = Math.floor(Math.random() * (max - min)) + min;
                break;
            }
            case 2: {
                const min = 580, max = 610;
                randomY = Math.floor(Math.random() * (max - min)) + min;
                break;
            }
            default:
                break;
        }
        
        return randomY;
    }

    initHarpee (x, y) {
        let harpee = this.__phaser.physics.add.sprite(x, y, 'harpee');
        harpee.setCollideWorldBounds(false);
        harpee.body.setGravity(0);

        this.__phaser.anims.create({
            key: 'harpee_left',
            frames: this.__phaser.anims.generateFrameNumbers('harpee', { start: 0, end: 15  }),
            frameRate: 15,
            repeat: -1
        });

        this.__harpees.push(harpee);
    }

    initMushroom (x, y) {
        let mushroom = this.__phaser.physics.add.sprite(x, y, 'mushroom');
        mushroom.setCollideWorldBounds(false);
        mushroom.body.setGravity(0);

        this.__phaser.anims.create({
            key: 'mushroom_left',
            frames: this.__phaser.anims.generateFrameNumbers('mushroom', { start: 0, end: 15  }),
            frameRate: 20,
            repeat: -1
        });

        this.__mushrooms.push(mushroom);
    }

    initPinkman (x, y) {
        let pinkman = this.__phaser.physics.add.sprite(x, y, 'pinkman');
        pinkman.setCollideWorldBounds(false);
        pinkman.body.setGravity(0);

        this.__phaser.anims.create({
            key: 'pinkman_right',
            frames: this.__phaser.anims.generateFrameNumbers('pinkman', { start: 0, end: 12  }),
            frameRate: 30,
            repeat: -1
        });

        this.__pinkmans.push(pinkman);
    }

    initGreenPeas (x, y) {
        let greenPeas = this.__phaser.physics.add.sprite(x, y, 'pinkman');
        greenPeas.setCollideWorldBounds(false);
        greenPeas.body.setGravity(0);

        this.__phaser.anims.create({
            key: 'green_peas_right',
            frames: this.__phaser.anims.generateFrameNumbers('green_peas', { start: 1, end: 13  }),
            frameRate: 5,
            repeat: -1
        });

        this.__greenPeases.push(greenPeas);
    }

    checkCollisionLeft(array, index, monster) {
        if (monster.body.x < (monster.body.width * -1)) {
            array.splice(index, 1);
        }
    }

    checkCollisionRight(array, index, monster) {
        if (monster.body.x > (1200 + monster.body.width)) {
            array.splice(index, 1);
        }
    }

    moveHarpeeLeft () {
        for (const [index, harpee] of this.__harpees.entries()) {
            harpee.setVelocityX(-450);
            harpee.anims.play('harpee_left', true);

            this.checkCollisionLeft(this.__harpees, index, harpee);
        }
    }

    moveMushroomLeft () {
        for (const [index, mushroom] of this.__mushrooms.entries()) {
            mushroom.setVelocityX(-150);
            mushroom.anims.play('mushroom_left', true);
            
            this.checkCollisionLeft(this.__mushrooms, index, mushroom);
        }
    }

    movePinkmanRight () {
        for (const [index, pinkman] of this.__pinkmans.entries()) {
            pinkman.setVelocityX(120);
            pinkman.anims.play('pinkman_right', true);

            this.checkCollisionRight(this.__pinkmans, index, pinkman);
        }
    }

    moveGreenPeasesRight () {
        for (const [index, greenPease] of this.__greenPeases.entries()) {
            greenPease.setVelocityX(80);
            greenPease.anims.play('green_peas_right', true);

            this.checkCollisionRight(this.__greenPeases, index, greenPease);
        }
    }
}