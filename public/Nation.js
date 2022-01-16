class Nation {
    constructor(id, tag, timeline, year){
        this.id = id;
        this.tag = tag;
        this.ALPHA = 200;
        this.WAR_PROB_MOD = .1;
        let list = this.getValues(tag);
        let byPeriod = this.byPeriod(tag, timeline, year);
        this.name = list[0];
        this.flag = list[1];
        this.color = list[2];
        this.extraDev = byPeriod[0];
        this.opsEfficiency = list[3];
        this.troopHardening = list[4];
        this.warChance = list[5];
    }
    getTag(){
        return this.tag;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getValues(type){
        if(type === "#nn") return this.makeTraits("Player None", "drawable.noflag", [this.ALPHA, 0, 0, 0], 1.0, 1.0, 0.4);
        else if(type === "#00") return this.makeTraits("Blue", "drawable.p00", [this.ALPHA, 36, 177, 201], 1.0, 1.0, 0.4);
        else if(type === "#01") return this.makeTraits("Red", "drawable.p01", [this.ALPHA, 255, 0, 0], 1.0, 1.0, 0.4);
        else if(type === "#02") return this.makeTraits("Green", "drawable.p02", [this.ALPHA, 0, 255, 0], 1.0, 1.0, 0.4);
        else if(type === "#03") return this.makeTraits("Purple", "drawable.p03", [this.ALPHA, 191, 0, 255], 1.0, 1.0, 0.4);

        else if(type === "rom") return this.makeTraits("Imperial Rome", "drawable.rom", [this.ALPHA, 216, 24, 24], 0.8, 1.2, 0.4);
        else if(type === "tce") return this.makeTraits("Thrace", "drawable.tce", [this.ALPHA, 91, 216, 24], 1.0, 0.8, 0.6);
        else if(type === "par") return this.makeTraits("Parthia", "drawable.par", [this.ALPHA, 78, 145, 208], 0.7, 1.1, 0.6);
        else if(type === "che") return this.makeTraits("Cherusci Tribe", "drawable.che", [this.ALPHA, 78, 208, 112], 1.0, 0.8, 0.6);
        else if(type === "van") return this.makeTraits("Vandals", "drawable.van", [this.ALPHA, 200, 216, 24], 1.0, 0.8, 0.6);
        else if(type === "dac") return this.makeTraits("Dacians", "drawable.dac", [this.ALPHA, 159, 48, 207], 1.0, 0.8, 0.6);
        else if(type === "sar") return this.makeTraits("Sarmatians", "drawable.sar", [this.ALPHA, 207, 48, 109], 1.0, 0.8, 0.6);
        else if(type === "ala") return this.makeTraits("Alans", "drawable.ala", [this.ALPHA, 122, 207, 48], 1.0, 0.8, 0.6);
        else if(type === "nab") return this.makeTraits("Nabatea", "drawable.nab", [this.ALPHA, 222, 115, 33], 1.0, 0.8, 0.6);
        else if(type === "scy") return this.makeTraits("Scythians", "drawable.scy", [this.ALPHA, 55, 225, 137], 0.8, 0.8, 0.6);
        else if(type === "toc") return this.makeTraits("Tochaians", "drawable.toc", [this.ALPHA, 55, 78, 225], 1.0, 0.8, 0.6);

        else if(type === "pic") return this.makeTraits("Picts", "drawable.pic", [this.ALPHA, 220, 195, 80], 1.0, 0.8, 0.6);
        else if(type === "bzn") return this.makeTraits("Byzantine Empire", "drawable.bzn", [this.ALPHA, 132, 56, 220], 0.9, 1.2, 0.2);
        else if(type === "fnk") return this.makeTraits("Franks", "drawable.fnk", [this.ALPHA, 45, 130, 205], 1.0, 0.85, 0.4);
        else if(type === "bgn") return this.makeTraits("Burgundians", "drawable.bgn", [this.ALPHA, 128, 0, 32], 1.0, 0.8, 0.4);
        else if(type === "vis") return this.makeTraits("Visigoths", "drawable.vis", [this.ALPHA, 12, 146, 23], 1.0, 0.8, 0.4);
        else if(type === "hun") return this.makeTraits("Huns", "drawable.hun", [this.ALPHA, 189, 174, 15], 1.0, 0.9, 0.4);
        else if(type === "sas") return this.makeTraits("Sassanid", "drawable.sas", [this.ALPHA, 15, 189, 79], 0.85, 1.2, 0.4);
        else if(type === "gas") return this.makeTraits("Ghassanids", "drawable.gas", [this.ALPHA, 79, 196, 185], 1.0, 1.0, 0.4);
        else if(type === "lak") return this.makeTraits("Lakhmids", "drawable.lak", [this.ALPHA, 208, 114, 67], 1.0, 1.0, 0.4);
        else if(type === "slv") return this.makeTraits("Slavs", "drawable.slv", [this.ALPHA, 200, 52, 30], 0.7, 1.0, 0.4);

        else if(type === "syg") return this.makeTraits("Syagirus", "drawable.syg", [this.ALPHA, 215, 185, 35], 1.0, 0.9, 0.6);
        else if(type === "bri") return this.makeTraits("Brittany", "drawable.bri", [this.ALPHA, 149, 178, 183], 1.0, 1.1, 0.6);
        else if(type === "sbi") return this.makeTraits("Suebi", "drawable.sbi", [this.ALPHA, 230, 125, 20], 1.0, 1.0, 0.6);
        else if(type === "lom") return this.makeTraits("Lombards", "drawable.lom", [this.ALPHA, 205, 100, 86], 1.0, 0.8, 0.6);
        else if(type === "ost") return this.makeTraits("Ostrogoths", "drawable.ost", [this.ALPHA, 10, 60, 118], 1.0, 0.8, 0.6);
        else if(type === "sax") return this.makeTraits("Saxons", "drawable.sax", [this.ALPHA, 190, 158, 111], 1.0, 0.87, 0.6);
        else if(type === "btn") return this.makeTraits("Brittons", "drawable.btn", [this.ALPHA, 218, 75, 47], 1.0, 1.0, 0.6);
        else if(type === "odo") return this.makeTraits("Odoacer", "drawable.odo", [this.ALPHA, 176, 194, 122], 1.0, 1.1, 0.6);
        else if(type === "hph") return this.makeTraits("Hephtalites", "drawable.hph", [this.ALPHA, 255, 158, 61], 0.7, 1.0, 0.6);

        else if(type === "neu") return this.makeTraits("Neustria", "drawable.neu", [this.ALPHA, 0, 13, 189], 1.0, 1.0, 0.6);
        else if(type === "ata") return this.makeTraits("Austrasia", "drawable.ata", [this.ALPHA, 103, 199, 0], 1.0, 1.0, 0.6);
        else if(type === "eag") return this.makeTraits("East Anglia", "drawable.eag", [this.ALPHA, 113, 218, 189], 1.0, 1.0, 0.6);
        else if(type === "yrk") return this.makeTraits("York", "drawable.yrk", [this.ALPHA, 198, 190, 238], 1.0, 1.0, 0.6);
        else if(type === "wha") return this.makeTraits("Whales", "drawable.wha", [this.ALPHA, 224, 60, 31], 1.0, 1.0, 0.6);
        else if(type === "wes") return this.makeTraits("Wessex", "drawable.wes", [this.ALPHA, 200, 69, 217], 1.0, 1.0, 0.6);
        else if(type === "fri") return this.makeTraits("Frisians", "drawable.fri", [this.ALPHA, 169, 66, 35], 1.0, 1.0, 0.6);
        else if(type === "pom") return this.makeTraits("Pomeranians", "drawable.pom", [this.ALPHA, 23, 173, 0], 0.9, 0.9, 0.6);
        else if(type === "pol") return this.makeTraits("Polans", "drawable.pol", [this.ALPHA, 255, 92, 105], 0.9, 1.0, 0.6);
        else if(type === "blt") return this.makeTraits("Balts", "drawable.blt", [this.ALPHA, 163, 255, 177], 0.8, 0.9, 0.6);
        else if(type === "bav") return this.makeTraits("Bavarians", "drawable.bav", [this.ALPHA, 85, 211, 190], 1.0, 1.0, 0.6);
        else if(type === "bul") return this.makeTraits("Bulgaria", "drawable.bul", [this.ALPHA, 255, 87, 41], 0.8, 0.9, 0.6);
        else if(type === "kha") return this.makeTraits("Khazars", "drawable.kha", [this.ALPHA, 173, 211, 230], 0.8, 1.0, 0.6);
        else if(type === "cph") return this.makeTraits("Caliphate", "drawable.cph", [this.ALPHA, 30, 159, 52], 1.12, 1.1, 0.6);
        else if(type === "bne") return this.makeTraits("Benevento", "drawable.bne", [this.ALPHA, 102, 255, 133], 1.0, 1.0, 0.6);
        else if(type === "dan") return this.makeTraits("Danes", "drawable.dan", [this.ALPHA, 255, 82, 108], 1.0, 1.0, 0.6);
        else if(type === "ava") return this.makeTraits("Avars", "drawable.ava", [this.ALPHA, 255, 41, 41], 0.8, 1.0, 0.6);

        else if(type === "cba") return this.makeTraits("Emirate of Cordoba", "drawable.cba", [this.ALPHA, 62, 208, 167], 1.0, 1.0, 0.4);
        else if(type === "mer") return this.makeTraits("Mercia", "drawable.mer", [this.ALPHA, 38, 45, 232], 1.0, 1.0, 0.4);
        else if(type === "num") return this.makeTraits("Northumbria", "drawable.num", [this.ALPHA, 242, 233, 110], 1.0, 1.0, 0.4);
        else if(type === "isd") return this.makeTraits("Idrisid Emirate", "drawable.isd", [this.ALPHA, 195, 246, 147], 1.0, 1.0, 0.4);
        else if(type === "tah") return this.makeTraits("Tahert", "drawable.tah", [this.ALPHA, 196, 114, 243], 1.0, 1.0, 0.4);
        else if(type === "pap") return this.makeTraits("Papal States", "drawable.pap", [this.ALPHA, 255, 242, 219], 1.3, 1.0, 0.4);
        else if(type === "len") return this.makeTraits("Leinster", "drawable.len", [this.ALPHA, 15, 184, 0], 1.0, 1.0, 0.4);
        else if(type === "cnn") return this.makeTraits("Connacht", "drawable.cnn", [this.ALPHA, 0, 101, 184], 1.0, 1.0, 0.4);
        else if(type === "uls") return this.makeTraits("Ulster", "drawable.uls", [this.ALPHA, 252, 248, 49], 1.0, 1.0, 0.4);
        else if(type === "des") return this.makeTraits("Desmond", "drawable.des", [this.ALPHA, 71, 46, 46], 1.0, 1.0, 0.4);
        else if(type === "mns") return this.makeTraits("Munster", "drawable.mns", [this.ALPHA, 47, 182, 202], 1.0, 1.0, 0.4);
        else if(type === "asd") return this.makeTraits("Abbasid Caliphate", "drawable.asd", [this.ALPHA, 238, 32, 32], .7, 1.2, 0.4);
        else if(type === "atr") return this.makeTraits("Asturias", "drawable.atr", [this.ALPHA, 32, 228, 238], 1.0, 1.0, 0.4);

        else if(type === "eng") return this.makeTraits("England", "drawable.eng", [this.ALPHA, 246, 49, 49], 1.0, 1.0, 0.4);
        else if(type === "sct") return this.makeTraits("Scotland", "drawable.sct", [this.ALPHA, 240, 180, 0], 1.0, 1.0, 0.4);
        else if(type === "fra") return this.makeTraits("France", "drawable.fra", [this.ALPHA, 36, 20, 255], 1.0, 1.2, 0.5);
        else if(type === "leo") return this.makeTraits("Leon", "drawable.leo", [this.ALPHA, 0, 184, 230], 1.0, 1.0, 0.4);
        else if(type === "pam") return this.makeTraits("Pamplona", "drawable.pam", [this.ALPHA, 20, 169, 42], 1.0, 1.0, 0.4);
        else if(type === "hre") return this.makeTraits("Holy Roman Empire", "drawable.hre", [this.ALPHA, 163, 195, 157], .8, 1.1, 0.2);
        else if(type === "Pol") return this.makeTraits("Poland", "drawable.pol2", [this.ALPHA, 255, 112, 146], 1.0, 1.2, 0.4);
        else if(type === "fat") return this.makeTraits("Fatimids", "drawable.fat", [this.ALPHA, 61, 255, 61], 1.0, 1.0, 0.4);
        else if(type === "sal") return this.makeTraits("Salerno", "drawable.sal", [this.ALPHA, 205, 255, 26], 1.0, 1.0, 0.4);
        else if(type === "sel") return this.makeTraits("Seljiq Turks", "drawable.sel", [this.ALPHA, 25, 204, 127], .86, 1.0, 0.5);
        else if(type === "mos") return this.makeTraits("Mosul", "drawable.mos", [this.ALPHA, 188, 188, 92], 1.0, 1.0, 0.4);
        else if(type === "den") return this.makeTraits("Denmark", "drawable.den", [this.ALPHA, 231, 64, 64], 1.0, 1.0, 0.4);
        else if(type === "swe") return this.makeTraits("Sweden", "drawable.swe", [this.ALPHA, 46, 117, 250], 1.0, 1.0, 0.4);
        else if(type === "nor") return this.makeTraits("Norway", "drawable.nor", [this.ALPHA, 185, 117, 110], 1.0, 1.0, 0.4);
        else if(type === "nov") return this.makeTraits("Novgorod", "drawable.nov", [this.ALPHA, 84, 148, 81], 1.0, 1.15, 0.2);
        else if(type === "vla") return this.makeTraits("Vladimir", "drawable.vla", [this.ALPHA, 204, 102, 102], 1.0, 1.0, 0.4);
        else if(type === "plo") return this.makeTraits("Polotsk", "drawable.plo", [this.ALPHA, 101, 205, 139], 1.0, 1.0, 0.4);
        else if(type === "smo") return this.makeTraits("Smolensk", "drawable.smo", [this.ALPHA, 215, 132, 171], 1.0, 1.0, 0.4);
        else if(type === "cng") return this.makeTraits("Chernigov", "drawable.cng", [this.ALPHA, 245, 238, 56], 1.0, 1.0, 0.4);
        else if(type === "ryz") return this.makeTraits("Ryzan", "drawable.ryz", [this.ALPHA, 138, 165, 136], 1.0, 1.0, 0.4);
        else if(type === "vol") return this.makeTraits("Volhynia", "drawable.vol", [this.ALPHA, 232, 186, 186], 1.0, 1.0, 0.4);
        else if(type === "kev") return this.makeTraits("Kiev", "drawable.kev", [this.ALPHA, 83, 198, 104], 1.0, 1.0, 0.4);
        else if(type === "gal") return this.makeTraits("Galacia", "drawable.gal", [this.ALPHA, 210, 121, 154], 1.0, 1.0, 0.4);
        else if(type === "hng") return this.makeTraits("Hungary", "drawable.hng", [this.ALPHA, 210, 152, 121], 1.0, 1.0, 0.4);
        else if(type === "cro") return this.makeTraits("Croatia", "drawable.cro", [this.ALPHA, 121, 210, 163], 1.0, 1.0, 0.4);
        else if(type === "pec") return this.makeTraits("Pecheneg", "drawable.pec", [this.ALPHA, 187, 166, 201], 1.0, 1.0, 0.4);
        else if(type === "cmn") return this.makeTraits("Cuman", "drawable.cmn", [this.ALPHA, 255, 112, 112], 1.0, 1.0, 0.4);
        else if(type === "geo") return this.makeTraits("Georgia", "drawable.geo", [this.ALPHA, 189, 224, 220], 1.0, 1.0, 0.4);
        else if(type === "zir") return this.makeTraits("Zirid", "drawable.zir", [this.ALPHA, 169, 244, 202], 1.0, 1.0, 0.4);
        else if(type === "sra") return this.makeTraits("Saragossa", "drawable.sra", [this.ALPHA, 239, 178, 128], 1.0, 1.0, 0.4);

        else if(type === "mgl") return this.makeTraits("Mongols", "drawable.mgl", [this.ALPHA, 39, 180, 75], .4, 1.0, 0.2);
        else if(type === "por") return this.makeTraits("Portugal", "drawable.por", [this.ALPHA, 35, 169, 48], 1.0, 1.0, 0.4);
        else if(type === "cas") return this.makeTraits("Castile", "drawable.cas", [this.ALPHA, 227, 210, 59], 1.0, 1.0, 0.5);
        else if(type === "ara") return this.makeTraits("Aragon", "drawable.ara", [this.ALPHA, 207, 110, 160], 1.0, 1.0, 0.4);
        else if(type === "gra") return this.makeTraits("Granada", "drawable.gra", [this.ALPHA, 233, 220, 170], 1.0, 1.0, 0.4);
        else if(type === "alm") return this.makeTraits("Almohad", "drawable.alm", [this.ALPHA, 122, 150, 179], 1.0, 1.0, 0.4);
        else if(type === "tle") return this.makeTraits("Tlemcen", "drawable.tle", [this.ALPHA, 102, 214, 197], 1.0, 1.0, 0.4);
        else if(type === "haf") return this.makeTraits("Hafsid", "drawable.haf", [this.ALPHA, 21, 158, 32], 1.0, 1.0, 0.4);
        else if(type === "ayy") return this.makeTraits("Ayyubid", "drawable.ayy", [this.ALPHA, 154, 229, 56], 1.0, 1.0, 0.4);
        else if(type === "lat") return this.makeTraits("Latin Empire", "drawable.lat", [this.ALPHA, 237, 120, 120], 1.0, 1.0, 0.4);
        else if(type === "nic") return this.makeTraits("Nicaea", "drawable.nic", [this.ALPHA, 237, 120, 228], 1.0, 1.1, 0.4);
        else if(type === "ach") return this.makeTraits("Achaea", "drawable.ach", [this.ALPHA, 165, 158, 199], 1.0, 1.0, 0.4);
        else if(type === "ven") return this.makeTraits("Venice", "drawable.ven", [this.ALPHA, 119, 223, 178], 1.0, 1.0, 0.4);
        else if(type === "epi") return this.makeTraits("Epirus", "drawable.epi", [this.ALPHA, 223, 166, 119], 1.0, 1.0, 0.4);
        else if(type === "srb") return this.makeTraits("Serbia", "drawable.srb", [this.ALPHA, 162, 127, 87], 1.0, 1.0, 0.4);
        else if(type === "teu") return this.makeTraits("Teutonic Kinghts", "drawable.teu", [this.ALPHA, 122, 148, 125], 1.0, 1.0, 0.4);
        else if(type === "lit") return this.makeTraits("Lithuania", "drawable.lit", [this.ALPHA, 199, 102, 149], 1.0, 1.0, 0.4);
        else if(type === "pis") return this.makeTraits("Pisa", "drawable.pis", [this.ALPHA, 199, 174, 102], 1.0, 1.0, 0.4);

        else if(type === "mar") return this.makeTraits("Marinid", "drawable.mar", [this.ALPHA, 210, 234, 31], 1.0, 1.0, 0.4);
        else if(type === "sav") return this.makeTraits("Savoy", "drawable.sav", [this.ALPHA, 255, 163, 163], 1.0, 1.0, 0.4);
        else if(type === "mil") return this.makeTraits("Milan", "drawable.mil", [this.ALPHA, 92, 255, 105], 1.0, 1.0, 0.4);
        else if(type === "ast") return this.makeTraits("Austria", "drawable.ast", [this.ALPHA, 255, 240, 240], 1.0, 1.0, 0.45);
        else if(type === "boh") return this.makeTraits("Bohemia", "drawable.boh", [this.ALPHA, 205, 203, 91], 1.0, 1.0, 0.5);
        else if(type === "bos") return this.makeTraits("Bosnia", "drawable.bos", [this.ALPHA, 225, 207, 137], 1.0, 1.0, 0.4);
        else if(type === "alb") return this.makeTraits("Albania", "drawable.alb", [this.ALPHA, 182, 47, 47], 1.0, 1.0, 0.4);
        else if(type === "mol") return this.makeTraits("Moldavia", "drawable.mol", [this.ALPHA, 158, 182, 47], 1.0, 1.0, 0.4);
        else if(type === "liv") return this.makeTraits("Livonian Order", "drawable.liv", [this.ALPHA, 182, 47, 72], 1.0, 1.0, 0.4);
        else if(type === "msk") return this.makeTraits("Moscovy", "drawable.msk", [this.ALPHA, 209, 196, 21], 1.0, 1.0, 0.6);
        else if(type === "gdn") return this.makeTraits("Golden Horde", "drawable.gdn", [this.ALPHA, 255, 240, 36], .8, 1.0, 0.4);
        else if(type === "nog") return this.makeTraits("Nogai", "drawable.nog", [this.ALPHA, 36, 255, 142], .8, 1.0, 0.4);
        else if(type === "kar") return this.makeTraits("Karaman", "drawable.kar", [this.ALPHA, 134, 234, 207], 1.0, 1.0, 0.4);
        else if(type === "ott") return this.makeTraits("Ottoman", "drawable.ott", [this.ALPHA, 93, 234, 77], 1.0, 1.25, 0.6);
        else if(type === "mam") return this.makeTraits("Mamluks", "drawable.mam", [this.ALPHA, 239, 214, 123], 1.0, 1.15, 0.4);
        else if(type === "qqu") return this.makeTraits("Qara Qoyunlu", "drawable.qqu", [this.ALPHA, 191, 123, 239], 1.0, 1.0, 0.4);
        else if(type === "aqu") return this.makeTraits("Aq Qoyunlu", "drawable.aqu", [this.ALPHA, 122, 118, 234], 1.0, 1.0, 0.4);
        else if(type === "azz") return this.makeTraits("Anazzah", "drawable.azz", [this.ALPHA, 168, 125, 26], 1.0, 1.0, 0.4);
        else if(type === "dje") return this.makeTraits("Djerid", "drawable.dje", [this.ALPHA, 26, 168, 118], 1.0, 1.0, 0.4);
        else if(type === "fez") return this.makeTraits("Fezzan", "drawable.fez", [this.ALPHA, 65, 225, 151], 1.0, 1.0, 0.4);
        else if(type === "tim") return this.makeTraits("Timmurids", "drawable.tim", [this.ALPHA, 255, 41, 41], .7, 1.1, 0.4);
        else if(type === "gen") return this.makeTraits("Genoa", "drawable.gen", [this.ALPHA, 247, 255, 97], 1.0, 1.0, 0.4);
        else if(type === "wal") return this.makeTraits("Wallacia", "drawable.wal", [this.ALPHA, 206, 195, 146], 1.0, 1.0, 0.4);
        else if(type === "cri") return this.makeTraits("Crimea", "drawable.cri", [this.ALPHA, 116, 236, 192], 1.0, 1.0, 0.4);
        else if(type === "Kha") return this.makeTraits("Kazan", "drawable.kha", [this.ALPHA, 173, 211, 230], 1.0, 1.0, 0.4);
        else if(type === "Bav") return this.makeTraits("Bavaria", "drawable.bav", [this.ALPHA, 85, 211, 190], 1.0, 1.0, 0.4);
        else if(type === "Pom") return this.makeTraits("Pomerania", "drawable.pom2", [this.ALPHA, 23, 173, 0], 1.0, 1.0, 0.4);
        else if(type === "bra") return this.makeTraits("Brandenburg", "drawable.bra", [this.ALPHA, 148, 149, 111], 1.0, 1.3, 0.4);
        else if(type === "hes") return this.makeTraits("Hesse", "drawable.hes", [this.ALPHA, 131, 201, 206], 1.0, 1.0, 0.4);
        else if(type === "Sax") return this.makeTraits("Saxony", "drawable.sax2", [this.ALPHA, 190, 158, 111], 1.0, 1.0, 0.4);
        else if(type === "Bgn") return this.makeTraits("Burgundy", "drawable.bgn", [this.ALPHA, 128, 0, 32], 1.0, 1.0, 0.4);

        else if(type === "spa") return this.makeTraits("Spain", "drawable.spa", [this.ALPHA, 255, 233, 31], 1.0, 1.1, 0.4);
        else if(type === "atk") return this.makeTraits("Astrakan", "drawable.atk", [this.ALPHA, 113, 173, 171], 1.0, 1.0, 0.4);
        else if(type === "wat") return this.makeTraits("Wattasid", "drawable.wat", [this.ALPHA, 47, 147, 122], 1.0, 1.0, 0.4);
        else if(type === "plc") return this.makeTraits("Commonwealth", "drawable.plc", [this.ALPHA, 255, 87, 123], .9, 1.3, 0.5);
        else if(type === "per") return this.makeTraits("Persia", "drawable.per", [this.ALPHA, 193, 227, 114], 1.0, .9, 0.4);
        else if(type === "swi") return this.makeTraits("Swizerland", "drawable.swi", [this.ALPHA, 184, 153, 97], 1.0, 1.0, 0.1);

        else if(type === "gbr") return this.makeTraits("Great Britian", "drawable.gbr", [this.ALPHA, 204, 0, 0], 1.0, 1.0, 0.4);
        else if(type === "net") return this.makeTraits("Netherlands", "drawable.net", [this.ALPHA, 245, 126, 0], 1.0, 1.0, 0.4);
        else if(type === "rus") return this.makeTraits("Russia", "drawable.rus", [this.ALPHA, 13, 153, 0], .4, .7, 0.6);
        else if(type === "saa") return this.makeTraits("Saadi", "drawable.mar", [this.ALPHA, 0, 163, 46], 1.0, 1.0, 0.4);
        else if(type === "lor") return this.makeTraits("Lorraine", "drawable.lor", [this.ALPHA, 255, 245, 107], 1.0, 1.0, 0.4);
        else if(type === "tuc") return this.makeTraits("Tuscany", "drawable.tuc", [this.ALPHA, 144, 154, 218], 1.0, 1.0, 0.4);

        else if(type === "pru") return this.makeTraits("Prussia", "drawable.pru", [this.ALPHA, 122, 123, 91], 1.1, 1.4, 0.5);
        else if(type === "han") return this.makeTraits("Hanover", "drawable.han", [this.ALPHA, 142, 195, 19], 1.0, 1.0, 0.4);
        else if(type === "mec") return this.makeTraits("Mecklenburg", "drawable.mec", [this.ALPHA, 19, 195, 104], 1.0, 1.0, 0.4);
        else if(type === "pie") return this.makeTraits("Piedmont-Sardinia", "drawable.pie", [this.ALPHA, 19, 195, 60], 1.0, 1.17, 0.5);
        else if(type === "mor") return this.makeTraits("Morocco", "drawable.mar", [this.ALPHA, 195, 104, 19], 1.0, 1.0, 0.4);
        else if(type === "nap") return this.makeTraits("Naples", "drawable.nap", [this.ALPHA, 195, 42, 203], 1.0, 1.0, 0.4);
        else if(type === "aze") return this.makeTraits("Azerbijan", "drawable.aze", [this.ALPHA, 203, 42, 85], 1.0, 1.0, 0.4);
        else if(type === "zan") return this.makeTraits("Zand", "drawable.zan", [this.ALPHA, 152, 203, 42], 1.0, 1.0, 0.4);

        else if(type === "rhi") return this.makeTraits("Rhine Confederation", "drawable.rhi", [this.ALPHA, 105, 179, 191], 1.1, 1.0, 0.4);
        else if(type === "bad") return this.makeTraits("Baden", "drawable.bad", [this.ALPHA, 218, 37, 37], 1.0, 1.0, 0.4);
        else if(type === "fre") return this.makeTraits("French Empire", "drawable.fra2", [this.ALPHA, 71, 145, 225], 1.3, 1.4, 0.7);

        else if(type === "two") return this.makeTraits("Two Sicilies", "drawable.two", [this.ALPHA, 180, 231, 136], 1.0, 1.0, 0.4);

        else if(type === "Fra") return this.makeTraits("France", "drawable.fra2", [this.ALPHA, 103, 92, 255], .85, 1.1, 0.3);
        else if(type === "ita") return this.makeTraits("Italy", "drawable.ita", [this.ALPHA, 161, 255, 138], 1.0, 1.0, 0.3);
        else if(type === "ger") return this.makeTraits("Germany", "drawable.ger", [this.ALPHA, 163, 199, 176], 1.2, 1.3, 0.3);
        else if(type === "bel") return this.makeTraits("Belgum", "drawable.bel", [this.ALPHA, 197, 145, 43], 1.0, 1.0, 0.3);
        else if(type === "ahe") return this.makeTraits("Austria-Hungary", "drawable.ahe", [this.ALPHA, 250, 245, 234], 1.0, 1.1, 0.3);
        else if(type === "gre") return this.makeTraits("Greece", "drawable.gre", [this.ALPHA, 140, 87, 224], 1.0, 1.0, 0.3);
        else if(type === "rmn") return this.makeTraits("Romania", "drawable.rmn", [this.ALPHA, 158, 213, 103], 1.0, 1.0, 0.3);
        else if(type === "Bul") return this.makeTraits("Bulgaria", "drawable.bul2", [this.ALPHA, 255, 87, 41], 1.0, 1.0, 0.3);
        else if(type === "Nor") return this.makeTraits("Norway", "drawable.nor2", [this.ALPHA, 185, 117, 110], 1.0, 1.0, 0.3);

        else if(type === "ire") return this.makeTraits("Ireland", "drawable.ire", [this.ALPHA, 113, 182, 84], 1.0, 1.0, 0.3);
        else if(type === "Ita") return this.makeTraits("Italy", "drawable.ita2", [this.ALPHA, 79, 232, 79], 1.3, 1.1, 0.3);
        else if(type === "yug") return this.makeTraits("Yugoslavia", "drawable.yug", [this.ALPHA, 0, 154, 250], 1.0, 1.0, 0.3);
        else if(type === "Atr") return this.makeTraits("Austria", "drawable.atr2", [this.ALPHA, 241, 250, 234], 1.0, 1.0, 0.3);
        else if(type === "Hng") return this.makeTraits("Hungary", "drawable.hng2", [this.ALPHA, 210, 152, 121], 1.0, 1.0, 0.3);
        else if(type === "POl") return this.makeTraits("Poland", "drawable.pol3", [this.ALPHA, 255, 112, 146], 1.0, 1.2, 0.3);
        else if(type === "Ger") return this.makeTraits("Germany", "drawable.ger2", [this.ALPHA, 144, 187, 160], 1.2, 1.1, 0.3);
        else if(type === "Lit") return this.makeTraits("Lithuania", "drawable.lit2", [this.ALPHA, 199, 102, 149], 1.0, 1.0, 0.3);
        else if(type === "ltv") return this.makeTraits("Latvia", "drawable.ltv", [this.ALPHA, 220, 221, 162], 1.0, 1.0, 0.3);
        else if(type === "est") return this.makeTraits("Estonia", "drawable.est", [this.ALPHA, 156, 231, 151], 1.0, 1.0, 0.3);
        else if(type === "sov") return this.makeTraits("Soviet Union", "drawable.sov", [this.ALPHA, 141, 32, 32], .5, .8, 0.3);
        else if(type === "fin") return this.makeTraits("Finland", "drawable.fin", [this.ALPHA, 244, 235, 210], 1.0, 1.0, 0.3);
        else if(type === "trk") return this.makeTraits("Turkey", "drawable.trk", [this.ALPHA, 111, 218, 103], 1.0, 1.0, 0.3);
        else if(type === "cze") return this.makeTraits("Czechoslovakia", "drawable.cze", [this.ALPHA, 88, 213, 161], 1.0, 1.0, 0.3);
        else if(type === "ira") return this.makeTraits("Iran", "drawable.ira", [this.ALPHA, 27, 222, 138], 1.0, 1.0, 0.3);
        else if(type === "Spa") return this.makeTraits("Spain", "drawable.spa2", [this.ALPHA, 224, 202, 0], 1.0, 1.1, 0.3);

        else if(type === "SPa") return this.makeTraits("Spain", "drawable.spa3", [this.ALPHA, 224, 202, 0], 1.1, 1.2, 0.3);
        else if(type === "rei") return this.makeTraits("Third Reich", "drawable.rei", [this.ALPHA, 84, 84, 84], 1.3, 1.4, 0.5);

        else if(type === "ITa") return this.makeTraits("Italian Republic", "drawable.ita3", [this.ALPHA, 96, 235, 115], 1.0, 1.0, 0.3);
        else if(type === "wgr") return this.makeTraits("West Germany", "drawable.wgr", [this.ALPHA, 126, 206, 190], 1.0, 1.0, 0.3);
        else if(type === "egr") return this.makeTraits("East Germany", "drawable.egr", [this.ALPHA, 206, 126, 126], .9, 1.0, 0.3);
        else if(type === "alg") return this.makeTraits("Algeria", "drawable.alg", [this.ALPHA, 26, 213, 114], 1.0, 1.0, 0.3);
        else if(type === "tun") return this.makeTraits("Tanisia", "drawable.tun", [this.ALPHA, 234, 201, 83], 1.0, 1.0, 0.3);
        else if(type === "lib") return this.makeTraits("Libya", "drawable.lib", [this.ALPHA, 223, 170, 171], 1.0, 1.0, 0.3);
        else if(type === "egy") return this.makeTraits("Egypt", "drawable.egy", [this.ALPHA, 218, 251, 141], 1.0, 1.0, 0.3);
        else if(type === "isr") return this.makeTraits("Isreal", "drawable.isr", [this.ALPHA, 141, 160, 251], 1.0, 1.2, 0.3);
        else if(type === "sau") return this.makeTraits("Saudi Arabia", "drawable.sau", [this.ALPHA, 191, 64, 64], 1.0, 1.0, 0.3);
        else if(type === "syr") return this.makeTraits("Syria", "drawable.syr", [this.ALPHA, 156, 199, 0], 1.0, 1.0, 0.3);
        else if(type === "irq") return this.makeTraits("Iraq", "drawable.irq", [this.ALPHA, 0, 199, 159], 1.0, 1.0, 0.3);

        else if(type === "Rus") return this.makeTraits("Russia", "drawable.rus2", [this.ALPHA, 13, 153, 0], .6, .7, 0.1);
        else if(type === "SPA") return this.makeTraits("Spain", "drawable.spa4", [this.ALPHA, 224, 202, 0], 1.0, 1.0, 0.1);
        else if(type === "Srb") return this.makeTraits("Serbia", "drawable.srb2", [this.ALPHA, 162, 127, 87], 1.0, 1.0, 0.1);
        else if(type === "slo") return this.makeTraits("Slovenia", "drawable.slo", [this.ALPHA, 255, 102, 229], 1.0, 1.0, 0.1);
        else if(type === "Cro") return this.makeTraits("Croatia", "drawable.cro2", [this.ALPHA, 121, 210, 163], 1.0, 1.0, 0.1);
        else if(type === "Bos") return this.makeTraits("Bosnia", "drawable.bos2", [this.ALPHA, 225, 207, 137], 1.0, 1.0, 0.1);
        else if(type === "mac") return this.makeTraits("Macedonia", "drawable.mac", [this.ALPHA, 144, 157, 47], 1.0, 1.0, 0.1);
        else if(type === "Mol") return this.makeTraits("Moldova", "drawable.mol2", [this.ALPHA, 158, 182, 47], 1.0, 1.0, 0.1);
        else if(type === "ukr") return this.makeTraits("Ukraine", "drawable.ukr", [this.ALPHA, 49, 180, 128], 1.0, 1.0, 0.1);
        else if(type === "bru") return this.makeTraits("Belarus", "drawable.bru", [this.ALPHA, 219, 123, 123], 1.0, 1.0, 0.1);
        else if(type === "GEr") return this.makeTraits("Germany", "drawable.ger2", [this.ALPHA, 156, 196, 167], 1.0, 1.2, 0.1);
        else if(type === "slk") return this.makeTraits("Slovakia", "drawable.slk", [this.ALPHA, 118, 164, 234], 1.0, 1.0, 0.1);
        else if(type === "Geo") return this.makeTraits("Georgia", "drawable.geo", [this.ALPHA, 189, 224, 220], 1.0, 1.0, 0.1);
        else if(type === "kaz") return this.makeTraits("Kazakhstan", "drawable.kaz", [this.ALPHA, 73, 222, 43], 1.0, 1.0, 0.1);



        else if(type === "aqt") return this.makeTraits("Aquitania", "drawable.aqt", [this.ALPHA, 239, 147, 98], 1.0, 1.0, 0.4);
        else if(type === "lug") return this.makeTraits("Lugdunensis", "drawable.lug", [this.ALPHA, 98, 239, 180], 1.0, 1.0, 0.4);
        else if(type === "his") return this.makeTraits("Hispania", "drawable.his", [this.ALPHA, 239, 98, 164], 1.0, 1.0, 0.4);

        else if(type === "orl") return this.makeTraits("Orleans", "drawable.orl", [this.ALPHA, 140, 98, 239], 1.0, 1.1, 0.4);
        else if(type === "gcn") return this.makeTraits("Gascons", "drawable.gcn", [this.ALPHA, 222, 232, 33], 1.0, 1.1, 0.4);
        else if(type === "can") return this.makeTraits("Cantabria", "drawable.can", [this.ALPHA, 232, 33, 73], 1.0, 1.0, 0.4);

        else if(type === "ovi") return this.makeTraits("Oviedo", "drawable.ovi", [this.ALPHA, 33, 232, 136], 1.0, 1.0, 0.4);

        else if(type === "Nov") return this.makeTraits("Novgorod", "drawable.nov2", [this.ALPHA, 84, 148, 81], 1.0, 1.2, 0.4);

        else if(type === "bal") return this.makeTraits("Baltic States", "drawable.bal", [this.ALPHA, 199, 102, 149], 1.0, 1.0, 0.4);
        else if(type === "fsu") return this.makeTraits("French Socialist Union", "drawable.fra2", [this.ALPHA, 184, 0, 15], .75, 1.2, 0.3);

        return this.makeTraits("[Not Found]", "drawable.noflag", [this.ALPHA, 0, 0, 0], 1.0, 1.0, 0.4);
    }
    makeTraits(name, flag, color, opsEff, harden, war){
        return [name, flag, color, opsEff, harden, war*this.WAR_PROB_MOD];
    }
    byPeriod(tag, timeline, year){
        if(timeline === "alp") {
            if (year == 17) {
                if (tag === "par") return [50];
                else if (tag === "toc") return [20];
            }
            else if (year == 396) {
                if (tag === "sas") return [55];
            }
            else if (year == 477) {
                if (tag === "sas") return [45];
                else if (tag === "hep") return [20];
            }
            else if (year == 642) {
                if (tag === "sas") return [50];
                else if (tag === "cph") return [30];
            }
            else if (year == 802) {
                if (tag === "asd") return [70];
            }
            else if (year == 1066) {
                if (tag === "fat") return [20];
                else if (tag === "sel") return [25];
            }
            else if (year == 1248) {
                if (tag === "ayy") return [50];
                else if (tag === "mgl") return [80]; //nerfed for obvious reasons
            }
            else if (year == 1445) {
                if (tag === "mam") return [25];
                else if (tag === "tim") return [50];
            }
            else if (year == 1532) {
                if (tag === "ott") return [25];
                else if (tag === "per") return [35];
                else if (tag === "spa") return [22];
                else if (tag === "por") return [18];
                else if (tag === "gbr") return [7];
                else if (tag === "fra") return [8];
            }
            else if (year == 1618) {
                if (tag === "ott") return [30];
                else if (tag === "per") return [27];
                else if (tag === "rus") return [55];
                else if (tag === "spa") return [45];
                else if (tag === "por") return [28];
                else if (tag === "gbr") return [20];
                else if (tag === "fra") return [25];
                else if (tag === "net") return [6];
            }
            else if (year == 1756) {
                if (tag === "ott") return [30];
                else if (tag === "zan") return [15];
                else if (tag === "rus") return [143];
                else if (tag === "spa") return [135];
                else if (tag === "por") return [79];
                else if (tag === "gbr") return [83];
                else if (tag === "fra") return [91];
                else if (tag === "net") return [38];
            }
            else if (year == 1823) {
                if (tag === "ott") return [50];
                else if (tag === "per") return [15];
                else if (tag === "rus") return [163];
                else if (tag === "spa") return [106];
                else if (tag === "por") return [42];
                else if (tag === "gbr") return [143];
                else if (tag === "fra") return [31];
                else if (tag === "net") return [43];
            }
            else if (year == 1914) {
                if (tag === "ott") return [38];
                else if (tag === "per") return [13];
                else if (tag === "rus") return [173];
                else if (tag === "spa") return [36];
                else if (tag === "por") return [32];
                else if (tag === "gbr") return [163];
                else if (tag === "Fra") return [103];
                else if (tag === "net") return [63];
                else if (tag === "ger") return [53];
                else if (tag === "ita") return [33];
            }
            else if (year == 1931) {
                if (tag === "per") return [13];
                else if (tag === "sov") return [163];
                else if (tag === "Spa") return [33];
                else if (tag === "por") return [28];
                else if (tag === "gbr") return [163];
                else if (tag === "Fra") return [113];
                else if (tag === "net") return [66];
                else if (tag === "Ita") return [43];
            }
            else if (year == 1939) {
                if (tag === "per") return [13];
                else if (tag === "sov") return [163];
                else if (tag === "SPa") return [33];
                else if (tag === "por") return [28];
                else if (tag === "gbr") return [163];
                else if (tag === "Fra") return [113];
                else if (tag === "net") return [66];
                else if (tag === "Ita") return [57];
            }
            else if (year == 1966) {
                if (tag === "per") return [13];
                else if (tag === "sov") return [167];
                else if (tag === "SPa") return [17];
                else if (tag === "por") return [22];
                else if (tag === "gbr") return [43];
                else if (tag === "Fra") return [31];
                else if (tag === "net") return [16];
                else if (tag === "ITa") return [6];
            }
            else if (year == 2020) {
                if (tag === "ira") return [18];
                else if (tag === "Rus") return [177];
                else if (tag === "SPA") return [7];
                else if (tag === "por") return [5];
                else if (tag === "gbr") return [10];
                else if (tag === "Fra") return [7];
                else if (tag === "net") return [6];
            }
        }
        else if(timeline === "rom"){
            if (year == 414) {
                if (tag === "sas") return [45];
                else if (tag === "hep") return [20];
            }
            if (year == 631) {
                if (tag === "sas") return [50];
                else if (tag === "cph") return [30];
            }
            if (year == 794) {
                if (tag === "asd") return [70];
            }
        }
        else if(timeline === "kai"){
            if (year == 1917) {
                if (tag === "per") return [13];
                else if (tag === "rus") return [153];
                else if (tag === "spa") return [36];
                else if (tag === "por") return [32];
                else if (tag === "gbr") return [163];
                else if (tag === "Fra") return [103];
                else if (tag === "net") return [63];
                else if (tag === "ger") return [83];
                else if (tag === "ita") return [33];
            }
        }
        else if(timeline === "vir"){
            if (year == 2020) {
                if (tag === "ira") return [9];
                else if (tag === "Rus") return [136];
                else if (tag === "gbr") return [3];
                else if (tag === "Fra") return [2];
                else if (tag === "net") return [6];
            }
        }
        return [0];
    }
}