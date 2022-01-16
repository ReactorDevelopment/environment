const ALPHA = 200;
const PLAYER_NONE = [ALPHA, 188, 216, 157];
const BURN_COLOR = [ALPHA, 93, 82, 60];
const GROW_COLOR = [ALPHA, 0, 255, 68];
const FORT_COLOR = [ALPHA, 0, 110, 255];
const DEV_COLOR = [ALPHA, 255, 245, 0];
const DECAY_COLOR = [ALPHA, 255, 0, 0];
const MIGHT_COLOR = [ALPHA, 0, 255, 0];
const ALLY_COLOR = [ALPHA, 0, 148, 7];
const TRUCE_COLOR = [ALPHA, 247, 249, 215];
const SELF_COLOR = [ALPHA, 86, 225, 91];
const SUBJECT_COLOR = [ALPHA, 0, 245, 139];
const OVERLORD_COLOR = [ALPHA, 92, 135, 255];

class Province{
    constructor(id, absX, absY, name, dev, attrition){
        this.id = id;
        this.absX = absX+3;
        this.absY = absY+1;
        this.relX = absX/915*100;
        this.relY = absY/470*100;
        this.name = name;
        this.dev = dev;
        this.devastation = 0;
        this.fortLevel = 0;
        this.troops = 0;
        this.ownerId = -1;
        this.coreOwner = "#nn";
        this.loadTag = "#nn";
        this.canvas = document.createElement("canvas");
        this.overlay = new Image();
        this.attrition = attrition;
    }
    
    initCanvas(){
        createCanvas(this.overlay, this.canvas);
    }
    setLoadTag(tag){
        this.loadTag = tag;
    }
    getLoadTag(){
        return this.loadTag;
    }
    setOwnerId(newId){
        this.ownerId = newId;
    }
    getOwnerId(){
        return this.ownerId;
    }
    getName(){
        return this.name;
    }
    getX(){
        return this.absX;
    }
    getY(){
        return this.absY;
    }
    getOwner() {
        if (this.ownerId >= 0) return playerList[this.ownerId];
        return null;
    }
    getCoreOwner() {
        for(let i=0; i<playerList.length; i++)
            if(this.coreOwner == playerList[i].getTag())
                return playerList[i];
        
        return null;
    }
    getTroops(){
        return this.troops;
    }
    getOverlay(){
        return this.overlay;
    }
    modTroops(mod){
        this.troops += mod;
    }
    getDevelopment(){
        return this.dev;
    }
    setDevelopment(dev){
        this.dev = dev;
    }
    getDevastation(){
        return this.devastation;
    }
    modDevastation(devas){
        this.devastation += devas;
    }
    getAttrition(){
        return this.attrition;
    }
    setAttrition(attr){
        this.attrition = attr;
    }
    getFortLevel(){
        return this.fortLevel;
    }
    setFortLevel(lvl){
        this.fortLevel = lvl;
    }
    setCoreOwner(core){
        this.coreOwner = core;
    }
    updateOverlay(mapMode, maxDev, maxTroops) {
                this.canvas.style.visibility = "visible";
                if (mapMode == 0) this.canvas.style.visibility = "hidden";
                
                if(mapMode == 1 && this.ownerId != -1 && this.ownerId < playerList.length && this.getOwner() != null) createCanvas(this.overlay, this.canvas, this.getOwner().color);
                else if(mapMode == 1) createCanvas(this.overlay, this.canvas, PLAYER_NONE);
                //if (mapMode == 2) this.overlay.setColorFilter(getContinent().getColor());
                if (mapMode == 3) createCanvas(this.overlay, this.canvas, this.fade(DEV_COLOR, this.dev, maxDev));
                if (mapMode == 4) createCanvas(this.overlay, this.canvas, this.fade(DECAY_COLOR, 1 - this.attrition, .2));
                if (mapMode == 5) createCanvas(this.overlay, this.canvas, this.fadeBound(BURN_COLOR, GROW_COLOR, this.devastation, 1, -.08));
                if (mapMode == 6) createCanvas(this.overlay, this.canvas, this.fade(FORT_COLOR, this.fortLevel, 5));
                if (mapMode == 7) createCanvas(this.overlay, this.canvas, this.fade(MIGHT_COLOR, this.troops, maxTroops));
                if(mapMode == 8) createCanvas(this.overlay, this.canvas, PLAYER_NONE);
    }
    
    fade(color, value, max){
        let average = (color[1]+color[2]+color[3])/3+50;
        let red = Math.floor((1-value/max)*average+(value/max)*color[1]);
        let green = Math.floor((1-value/max)*average+(value/max)*color[2]);
        let blue = Math.floor((1-value/max)*average+(value/max)*color[3]);
        //filterAt = Color.argb(255, red, green, blue);
        return [255, red, green, blue];
    }
    fadeBound(color, negColor, value, max, min){
        if(value < 0) return this.fade(negColor, -value, min);
        else return this.fade(color, value, max);
    }
}