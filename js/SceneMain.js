class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload()
    {
        // preload all assets
    }

    create() {
        // defines all objects for the scene   
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
    }
    
    update() {
        // constantly runnning loop
    }

    // *NOTE: you can add custom functions, as well
}

const newScene = new SceneMain();