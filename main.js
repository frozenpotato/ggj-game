var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload,
        create,
        update
    }
};

var game = new Phaser.Game(config);

//load assets here
function preload ()
{
	console.log('preload')
	//this.load.image('sky', 'assets/sky.png');
}

//sequence of added images is important. they overlap.
function create ()
{
	//this.add.image(400, 300, 'sky');
}

function update ()
{
}