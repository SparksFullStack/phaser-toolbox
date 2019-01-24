var game;
var model;
var emitter;
var G; // this is the constants variable
var controller;

window.onload = function(){
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        scene: [SceneMain]
    };

    G = new Constants();
    model = new Model();
    game = new Phaser.Game(config);
}