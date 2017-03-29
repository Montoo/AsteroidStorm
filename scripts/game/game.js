window.createGame = function(scope, players, mapId, injector) {
    var height  = 600,
        width   = 800;
    var game = new Phaser.Game(width, height, Phaser.AUTO, 'gameWrapper', { preload: preload, create: create, update: update });

    function preload() {
        game.load.image('menu_background', 'resources/images/background.gif');
        game.load.image('logo', 'resources/images/logo.png');
        game.load.image('startButton', 'resources/images/button.png');
    }
    var background;
    var logo;
    var startButton;
    var score = 0;
    var scoreString;
    var scoreText;
    function create() {
        var world = game.world;
        //BACKGROUND
        background = game.background = game.add.tileSprite(0, 0, world.width, world.height, 'menu_background');
        background.autoScroll(0, 50);

        //MAINSCREEN
        var textPadding = 20;
        logo = game.add.sprite(world.centerX - 110, world.centerY - (150 + textPadding), 'logo');
        startButton = game.add.button(world.centerX - 60, world.centerY + (120), 'startButton', onUp);

        //SCORE
        scoreString = 'Score : ';
        scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });
    }

    function update() {
        startButton.onInputUp.add(addScore);
        scoreText.text = scoreString + score;
    }

    function addScore() {
        score += 20;
    }

    function onUp() {
        console.log("Test");
    }
    scope.$on('$destroy', function() {
        game.destroy(); // Clean up the game when we leave this scope
        console.log("Destroy test");
    });
};

