class Align {
    static scaleToGameWidth(obj, percentage){
        obj.displayWidth = game.config.width * percentage; // this will set the width of the object to the percentage of the game's width you specify (should be a decimal);
        obj.scaleY = obj.scaleX;
    }
}