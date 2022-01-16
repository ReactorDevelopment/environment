const SAVE_FORM = [3, 5, 4, 4, 4, 5, 4, 4, 3];
var loadString;
var playerList;
function buildVersion(loadStr, map){
    loadString = loadStr;
    logLoad();
    let plStrLen = 3 + 1 + 1 + SAVE_FORM[2] + SAVE_FORM[3] + SAVE_FORM[4]; //length of player information
    let pStrLen = SAVE_FORM[8] + SAVE_FORM[1] + SAVE_FORM[5] + SAVE_FORM[6] + SAVE_FORM[7] + 1; //length of province information
    let init = 8; //encoding, mapId, turnNum
    let plLen = 3;
playerList = new Array(get(loadString.indexOf("!")+1, plLen));
    /*if (!firstLoaded) {
        mapImperium(get(4, 1));
        console.log("Testyear", loadString.substring(loadString.indexOf('[')+1, loadString.indexOf(',', loadString.indexOf('[')))
                +", "+loadString.substring(loadString.indexOf(',', loadString.indexOf('['))+1, loadString.indexOf(']')));
        console.log("plterLen", loadString.substring(loadString.indexOf("!"), loadString.indexOf("!") + plLen) + ", " + map.getList().length + ", " + (init + pStrLen * map.getList().length));
        game = new Game(context, get(loadString.indexOf("!")+1, plLen), get(loadString.indexOf("|") - 1, 1),
                [loadString.substring(loadString.indexOf('[')+1, loadString.indexOf(',', loadString.indexOf('['))), loadString.substring(loadString.indexOf(',', loadString.indexOf('['))+1, loadString.indexOf(']'))]);

        setupMap();
    } else {
        game.setPlayerLength(get(loadString.indexOf("!")+1, plLen));
        game.setTimeline(loadString.substring(loadString.indexOf('[')+1, loadString.indexOf(',', loadString.indexOf('['))));
        game.setYear(Integer.parseInt(loadString.substring(loadString.indexOf(',', loadString.indexOf('['))+1, loadString.indexOf(']'))));
        map.resetAll();
    }*/
    //game.setTurnNum(get(5, SAVE_FORM[0]));
    //if (debugingOn) game.setTurnNum(0);
    let lastStart = 0;
    lastStart = loadString.indexOf("<", lastStart)+1;
    let ranOut = false;
    for (let i = 0; i < map.getList().length; i++) {
        let pAt = map.getList()[i];
        console.log("inProv", pAt.getName()+": {" + loadString.substring(lastStart, loadString.indexOf("<", lastStart)) + "}");
        pAt.setLoadTag(loadString.substring(lastStart, lastStart + SAVE_FORM[8]));
        pAt.setCoreOwner(loadString.substring(lastStart + SAVE_FORM[8], lastStart + SAVE_FORM[8] + 3));
        pAt.setDevelopment(getD(lastStart + SAVE_FORM[8] + 3, SAVE_FORM[5]));
        pAt.modDevastation(getD(lastStart + SAVE_FORM[8] + 3 + SAVE_FORM[5], SAVE_FORM[6]));
        pAt.setAttrition(getD(lastStart + SAVE_FORM[8] + 3 + SAVE_FORM[5] + SAVE_FORM[6], SAVE_FORM[7]));
        pAt.setFortLevel(get(lastStart + SAVE_FORM[8] + 3 + SAVE_FORM[5] + SAVE_FORM[6] + SAVE_FORM[7], 1));
        let stackAt = loadString.indexOf("(", lastStart)+1;
        while(stackAt < loadString.indexOf(")", lastStart)-1){
            let stackString = loadString.substring(stackAt, loadString.indexOf(",", stackAt));
            console.log("MakeStack", stackString+", "+stackString.length+", "
                    +stackString.substring(0, 3));
            /*let ts = new TroopStack(stackString.substring(0, 3),
                    parseFloat(stackString.substring(3, 8))
                    , parseInt(stackString.substring(8, 9)));*/
            //pAt.getTroopStacks().add(ts);
            pAt.modTroops(parseFloat(stackString.substring(3, 8)));
            stackAt += stackString.length+1;
        }
        if(loadString.indexOf("!", lastStart) < loadString.indexOf("<", lastStart)) {
            ranOut = true;
            break; //break after ran out of provinces to load, while creating new provinces not in save
        }
        lastStart = loadString.indexOf("<", lastStart)+1;
    }
    if(ranOut) lastStart = loadString.indexOf("<", lastStart)+1;
    console.log("building", "player strt");
    let saveStart = lastStart;
    let ais = new Array(playerList.length);

    for (let i = 0; i < playerList.length; i++) {
        //int index = init + plLen + pStrLen * map.getList().length + plStrLen * i;
        ais[i] = loadString.charAt(lastStart + 3) == '1';
        lastStart = loadString.indexOf("<", lastStart)+1;
    }
    lastStart = saveStart;
    for (let player = 0; player < playerList.length; player++) {
        //int index = init + plLen + pStrLen * map.getList().length + plStrLen * player;
        let index = lastStart;
        playerList[player] = new Nation(player, loadString.substring(index, index + 3), "alp", 0);
        console.log("PlayerSave", playerList[player].tag+"Text: " + loadString.substring(index, 17 + index));
        index += 3 + 1;
        console.log("LoadStage", "Stage: "+loadString.substring(index-1, index+1));
        //playerList[player].setStage(get(index, 1));
        index += 1;
        console.log("TroopsSet", "" + loadString.substring(index, index + SAVE_FORM[2]));
        //playerList[player].setTroops(getD(index, SAVE_FORM[2]));
        index += SAVE_FORM[2];
        console.log("monrtes", "" + loadString.substring(index, index + SAVE_FORM[3]));
        //playerList[player].setMonetae(get(index, SAVE_FORM[3]));
        index += SAVE_FORM[3];
        console.log("conquests", loadString.substring(index, index + SAVE_FORM[4]));
        //playerList[player].setConquers(get(index, SAVE_FORM[4]));

        index = loadString.indexOf("(", index)+1;
        let endDip = loadString.indexOf(")", index);
        let dipAt = 0;
        while (index < endDip){
            console.log("BuoldDip", loadString.substring(lastStart, lastStart+3)+"| "+loadString.substring(index, index+1)+"| "+loadString.substring(index, endDip));
            if(loadString.charAt(index) == ','){
                index++; dipAt++;
                continue;
            }
            /*if(dipAt == 0) {
                console.log("LoadRequest", "to "+playerList[player].getTag()+" from "+loadString.substring(index+8, index+11));
                playerList[player].addRequestFrom(parseInt(loadString.substring(index, index+2)), loadString.substring(index+2, index+2+6), loadString.substring(index+8, index+11));
            }*/
            //console.log("DiploBuild", ""+game.inSetup);
            //if(dipAt == 1) playerList[player].addAlly(loadString.substring(index, index+3));
            //console.log("DiploBuild2", ""+game.inSetup);
            //if(dipAt == 2) playerList[player].addMinion(loadString.substring(index, index+3));
            //if(dipAt == 3) playerList[player].getDiplo()[3].add(loadString.substring(index, index+3)+loadString.substring(index+3, index+6)+loadString.substring(index+6, index+9));
            //if(dipAt == 4) playerList[player].addTruce(loadString.substring(index, index+7));
            //if(dipAt == 5) playerList[player].addOverlord(loadString.substring(index, index+3));
            index += 3;
            if(dipAt == 4) index += 4;
            if(dipAt == 3) index += 6;
            if(dipAt == 0) index += 8;
        }
        lastStart = loadString.indexOf("<", lastStart)+1;
    }
    console.log("currentPlayer", loadString.substring(loadString.indexOf("!", loadString.indexOf("!")), loadString.indexOf("!", loadString.indexOf("!"))+3));
    //game.setCurrentPlayer(get(loadString.indexOf("!", loadString.indexOf("!")+1)+1, 3));
    console.log("currentplayer", ""+loadString.substring(loadString.indexOf("!", loadString.indexOf("!")+1)+1));
    //for(Player p : playerList) p.printDiplo();
    //gameControls();
    //game.inSetup = false;
    console.log("OutSetup", "out4");
    
    //Loads owners of provinces
    for(let i = 0; i < map.getList().length; i++){
        //Log.i("OwnerTag", p.getName()+", "+p.getLoadTag());
        for(let player = 0; player < playerList.length; player++) {
            if (map.getList()[i].getLoadTag() == playerList[player].getTag()) {
                //Log.i("OwnerTag", pl.getTag());
                map.getList()[i].setOwnerId(playerList[player].getId());
            }
        }
        if(map.getList()[i].getOwnerId() == -1) map.getList()[i].modTroops(-map.getList()[i].getTroops());
    }
    return playerList;
}
function logLoad(){
    console.log("loadedString", "String: {");
    for (let i = 0; i < loadString.length; i += 4000)
        if (i + 4000 < loadString.length)
            console.log("loadedString", loadString.substring(i, i + 4000));
        else {
            console.log("loadedString", loadString.substring(i));
            break;
        }
    console.log("loadedString", "} String done");
}
function loadFileString(mapPath, timeline, year){
    /*let buffer = new byte[0];
    try {
        console.log("Assset", mapPath+timeline+year+", "+(context == null));
        InputStream stream = context.getAssets().open("sacredTexts/timeLines/"+mapPath+timeline+year+".imprm");
        int size = stream.available();
        buffer = new byte[size];
        stream.read(buffer);
        stream.close();
    } catch (Exception e) { e.printStackTrace(); }
    return new String(buffer);*/
}

function get(start, length){
    if(loadString.substring(start, start + length).includes("n")) return -1;
    return parseInt(loadString.substring(start, start + length));
}
function getD(start, length){
    if(loadString.substring(start, start + length) == "n") return -1;
    let num = loadString.substring(start, start + length);
    return parseFloat(loadString.substring(start, start + length));
}

