class Parts {
    constructor(phaserObj) {
        this.__phaser = phaserObj;
        this.__phaser.load.image('1', './assets/1.png')
        this.__phaser.load.image('2', './assets/2.png')
        this.__phaser.load.image('3', './assets/3.png')
        this.__phaser.load.image('4', './assets/4.png')
        this.__phaser.load.image('5', './assets/5.png')
        this.__phaser.load.image('6', './assets/6.png')
        this.__phaser.load.image('7', './assets/7.png')
        this.__phaser.load.image('8', './assets/8.png')
        this.__phaser.load.image('9', './assets/9.png')

        // parts list
        this.parts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        // parts location
        this.partsLocationX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // this.partsLocationY = [1, 2];
    }
    
    initParts () {
        // console.log();
        
        var items = this.shuffle(this.parts);   // randomized parts
        var itemsLocationX = this.shuffle(this.partsLocationX);   // randomized locaiton X

        var partItem;

        for(partItem of items) {
            let x = (itemsLocationX.pop() * 100) + 75; // this.getRandomIntInclusive(50, 1090);
            let y = (this.getRandomIntInclusive(1, 2) * 100) + 625; // this.getRandomIntInclusive(690, 850);

            this.__phaser.add.image(x, y, partItem);
        }
    }

    // get random numbers in between 2 numbers (integers)
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    // shuffle elements of an array (integers)
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}