const windowWidth = 1200;
const windowHeight = 900;

var ship;
var mainState = {
	preload: function() {
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.updateLayout();
        game.load.image('bg', 'assets/bg.png');
	},
	create: function() {
		game.stage.backgroundColor = '#71c5cf';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.enableBody = true;
		game.add.sprite(0, 0, 'space');
		
		ship = game.add.sprite(game.world.randomX,490,'ufo');
		ship.width = 20;
		ship.height = 20;
		game.physics.arcade.enable(ship);

		this.rocks = game.add.group();
		
		for (var y = 0; y < 7; y++) {
			var hole = Math.floor(Math.random() * 13) + 1;
			for (var x = 0; x < 15; x++) {
				if (x != hole && x != hole + 1) {
					var rock = game.add.sprite(x * 25 + 10, y * 70 + 10,'alien');
					this.rocks.add(rock);
					rock.body.immovable = true;
					rock.width = 20;
					rock.height = 20;
				}
			}
		}

		game.input.onDown.add(this.moveShip,200);
	},
	moveShip: function () {
		game.camera.follow();
		game.physics.arcade.moveToPointer(ship, 170);
	},
	restartGame: function () {
		game.state.start('main');
	},
	update: function () {
		if (ship.y < 0 || ship.y > 520 || ship.x < 0 || ship.x > 390) {
			this.restartGame();
		}
		// game.physics.arcade.collide(ship, this.rocks);
		game.physics.arcade.overlap(ship, this.rocks, this.restartGame, null, this);
	},
	addOneRock: function (x,y) {
		
	},
	addRowOfRocks: function () {
		for (var i = 0; i < 20; i++) {
			var rock = game.add.sprite(i * 15, 10,'rock');
			this.rocks.add(rock);
			rock.body.immovable = true;
			rock.width = 20;
			rock.height = 20;
		}
	}
};

var game = new Phaser.Game(windowWidth, windowHeight, Phaser.AUTO);

game.state.add('main',mainState);
game.state.start('main');