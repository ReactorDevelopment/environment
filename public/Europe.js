class Europe {
    constructor(){
        this.provinceList = new Array(296);
        this.id = 2;
        this.imperiumMap = 1;
        this.overScale = .65;
		this.statusScale = 1;
        this.mapFilePath = "europeMap/";
        this.assemble();
    }
    
    updateAllOverlays(mapMode){
    	for(let i=0; i<this.provinceList.length; ++i)
    		this.provinceList[i].updateOverlay(mapMode, this.getMaxDev(), this.getMaxTroops());
	}
	getList(){
		return this.provinceList;
	}
	getOverscale(){
		return this.overScale;
	}
	getMaxDev(){
		let max = 0;
		for(let i=0; i<this.provinceList.length; ++i)
			if(this.provinceList[i].getDevelopment() > max) max = this.provinceList[i].getDevelopment();
			
		return max;
	}
	getMaxTroops(){
		let max = 0;
		for(let i=0; i<this.provinceList.length; ++i)
			if(this.provinceList[i].getTroops() > max) max = this.provinceList[i].getTroops();
			
		return max;
	}
    assemble(){
        let scaleX = 1;
        let scaleY = 1.05;
        let shiftX = -2;
        let shiftY = -3;
	    this.provinceList[0] = new Province(1, (scaleX*337+shiftX), (scaleY*118+shiftY), "Sutherland", 1, 1.0);
	    
	    
	    this.provinceList[1] = new Province(2, (scaleX*345+shiftX), (scaleY*126+shiftY), "Aberdeenshire", 1, 1.0);
	    
	    
	    this.provinceList[2] = new Province(3, (scaleX*329+shiftX), (scaleY*131+shiftY), "Perthshire", 1, 1.0);
	    
	    
	    this.provinceList[3] = new Province(4, (scaleX*339+shiftX), (scaleY*141+shiftY), "Fife", 1, 1.0);
	    

	    this.provinceList[4] = new Province(5, (scaleX*332+shiftX), (scaleY*145+shiftY), "Ayrshire", 1, 1.0);
	    

	    this.provinceList[5] = new Province(6, (scaleX*349+shiftX), (scaleY*154+shiftY), "York", 1, 1.0);
	    

	    this.provinceList[6] = new Province(7, (scaleX*330+shiftX), (scaleY*160+shiftY), "Derby", 1, 1.0);
	    

	    this.provinceList[7] = new Province(8, (scaleX*352+shiftX), (scaleY*164+shiftY), "Norfolk", 1, 1.0);
	    

	    this.provinceList[8] = new Province(9, (scaleX*321+shiftX), (scaleY*171+shiftY), "Cardigan", 1, 1.0);
	    

	    this.provinceList[9] = new Province(10, (scaleX*314+shiftX), (scaleY*184+shiftY), "Cornwall", 1, 1.0);
	    

	    this.provinceList[10] = new Province(11, (scaleX*336+shiftX), (scaleY*182+shiftY), "Hampshire", 1, 1.0);
	    

	    this.provinceList[11] = new Province(12, (scaleX*350+shiftX), (scaleY*180+shiftY), "London", 1, 1.0);
	    

	    this.provinceList[12] = new Province(13, (scaleX*307+shiftX), (scaleY*143+shiftY), "Tyrone", 1, 1.0);
	    

	    this.provinceList[13] = new Province(14, (scaleX*313+shiftX), (scaleY*154+shiftY), "Dublin", 1, 1.0);
	    

	    this.provinceList[14] = new Province(15, (scaleX*297+shiftX), (scaleY*146+shiftY), "Galway", 1, 1.0);
	    

	    this.provinceList[15] = new Province(16, (scaleX*288+shiftX), (scaleY*160+shiftY), "Cork", 1, 1.0);
	    

	    this.provinceList[16] = new Province(17, (scaleX*260+shiftX), (scaleY*243+shiftY), "Galicia", 1, 1.0);
	    

	    this.provinceList[17] = new Province(18, (scaleX*255+shiftX), (scaleY*258+shiftY), "Porto", 1, 1.0);
	    

	    this.provinceList[18] = new Province(19, (scaleX*243+shiftX), (scaleY*276+shiftY), "Lisboa", 1, 1.0);
	    

	    this.provinceList[19] = new Province(20, (scaleX*258+shiftX), (scaleY*292+shiftY), "Seville", 1, 1.0);
	    

	    this.provinceList[20] = new Province(21, (scaleX*265+shiftX), (scaleY*283+shiftY), "Toledo", 1, 1.0);
	    

	    this.provinceList[21] = new Province(22, (scaleX*269+shiftX), (scaleY*272+shiftY), "Madrid", 1, 1.0);
	    

	    this.provinceList[22] = new Province(23, (scaleX*295+shiftX), (scaleY*250+shiftY), "Burgos", 1, 1.0);
	    

	    this.provinceList[23] = new Province(24, (scaleX*277+shiftX), (scaleY*301+shiftY), "Granada", 1, 1.0);
	    

	    this.provinceList[24] = new Province(25, (scaleX*302+shiftX), (scaleY*282+shiftY), "Murcia", 1, 1.0);
	    

	    this.provinceList[25] = new Province(26, (scaleX*311+shiftX), (scaleY*273+shiftY), "Tortosa", 1, 1.0);
	    

	    this.provinceList[26] = new Province(27, (scaleX*323+shiftX), (scaleY*239+shiftY), "Bayonne", 1, 1.0);
	    

	    this.provinceList[27] = new Province(28, (scaleX*333+shiftX), (scaleY*232+shiftY), "Bordeaux", 1, 1.0);
	    

	    this.provinceList[28] = new Province(29, (scaleX*326+shiftX), (scaleY*220+shiftY), "Nantes", 1, 1.0);
	    

	    this.provinceList[29] = new Province(30, (scaleX*312+shiftX), (scaleY*205+shiftY), "Brittany", 1, 1.0);
	    

	    this.provinceList[30] = new Province(31, (scaleX*332+shiftX), (scaleY*201+shiftY), "Normandy", 1, 1.0);
	    

	    this.provinceList[31] = new Province(32, (scaleX*365+shiftX), (scaleY*210+shiftY), "Paris", 1, 1.0);
	    

	    this.provinceList[32] = new Province(33, (scaleX*336+shiftX), (scaleY*266+shiftY), "Catalonia", 1, 1.0);
	    

	    this.provinceList[33] = new Province(34, (scaleX*331+shiftX), (scaleY*252+shiftY), "Narbonne", 1, 1.0);
	    

	    this.provinceList[34] = new Province(35, (scaleX*347+shiftX), (scaleY*242+shiftY), "Toluouse", 1, 1.0);
	    

	    this.provinceList[35] = new Province(36, (scaleX*352+shiftX), (scaleY*223+shiftY), "Bourges", 1, 1.0);
	    

	    this.provinceList[36] = new Province(37, (scaleX*375+shiftX), (scaleY*219+shiftY), "Troyes", 1, 1.0);
	    

	    this.provinceList[37] = new Province(38, (scaleX*348+shiftX), (scaleY*200+shiftY), "Rouen", 1, 1.0);
	    

	    this.provinceList[38] = new Province(39, (scaleX*360+shiftX), (scaleY*193+shiftY), "Amiens", 1, 1.0);
	    

	    this.provinceList[39] = new Province(40, (scaleX*375+shiftX), (scaleY*190+shiftY), "Antwerpen", 1, 1.0);
	    

	    this.provinceList[40] = new Province(41, (scaleX*376+shiftX), (scaleY*253+shiftY), "Marseille", 1, 1.0);
	    

	    this.provinceList[41] = new Province(42, (scaleX*404+shiftX), (scaleY*244+shiftY), "Genoa", 1, 1.0);
	    

	    this.provinceList[42] = new Province(43, (scaleX*406+shiftX), (scaleY*230+shiftY), "Zurich", 1, 1.0);
	    

	    this.provinceList[43] = new Province(44, (scaleX*400+shiftX), (scaleY*210+shiftY), "Strasbourg", 1, 1.0);
	    

	    this.provinceList[44] = new Province(45, (scaleX*397+shiftX), (scaleY*193+shiftY), "Frankfurt", 1, 1.0);
	    

	    this.provinceList[45] = new Province(46, (scaleX*385+shiftX), (scaleY*175+shiftY), "Amsterdam", 1, 1.0);
	    

	    this.provinceList[46] = new Province(47, (scaleX*398+shiftX), (scaleY*175+shiftY), "Bremen", 1, 1.0);
	    

	    this.provinceList[47] = new Province(48, (scaleX*415+shiftX), (scaleY*256+shiftY), "Florence", 1, 1.0);
	    

	    this.provinceList[48] = new Province(49, (scaleX*415+shiftX), (scaleY*238+shiftY), "Milan", 1, 1.0);
	    

	    this.provinceList[49] = new Province(50, (scaleX*425+shiftX), (scaleY*232+shiftY), "Tirol", 1, 1.0);
	    

	    this.provinceList[50] = new Province(51, (scaleX*414+shiftX), (scaleY*215+shiftY), "Ulm", 1, 1.0);
	    

	    this.provinceList[51] = new Province(52, (scaleX*407+shiftX), (scaleY*203+shiftY), "Hessen", 1, 1.0);
	    

	    this.provinceList[52] = new Province(53, (scaleX*425+shiftX), (scaleY*188+shiftY), "Brunswick", 1, 1.0);
	    

	    this.provinceList[53] = new Province(54, (scaleX*415+shiftX), (scaleY*164+shiftY), "Lubek", 1, 1.0);
	    

	    this.provinceList[54] = new Province(55, (scaleX*417+shiftX), (scaleY*139+shiftY), "Sjaelland", 1, 1.0);
	    

	    this.provinceList[55] = new Province(56, (scaleX*431+shiftX), (scaleY*168+shiftY), "Rostok", 1, 1.0);
	    

	    this.provinceList[56] = new Province(57, (scaleX*427+shiftX), (scaleY*199+shiftY), "Thuringia", 1, 1.0);
	    

	    this.provinceList[57] = new Province(58, (scaleX*439+shiftX), (scaleY*205+shiftY), "Prague", 1, 1.0);
	    

	    this.provinceList[58] = new Province(59, (scaleX*454+shiftX), (scaleY*190+shiftY), "Berlin", 1, 1.0);
	    

	    this.provinceList[59] = new Province(60, (scaleX*445+shiftX), (scaleY*179+shiftY), "Berlin", 1, 1.0);
	    

	    this.provinceList[60] = new Province(61, (scaleX*419+shiftX), (scaleY*273+shiftY), "Roma", 1, 1.0);
	    

	    this.provinceList[61] = new Province(62, (scaleX*439+shiftX), (scaleY*277+shiftY), "Napoli", 1, 1.0);
	    

	    this.provinceList[62] = new Province(63, (scaleX*453+shiftX), (scaleY*295+shiftY), "Calabria", 1, 1.0);
	    

	    this.provinceList[63] = new Province(64, (scaleX*458+shiftX), (scaleY*290+shiftY), "Bari", 1, 1.0);
	    

	    this.provinceList[64] = new Province(65, (scaleX*430+shiftX), (scaleY*319+shiftY), "Sicily", 1, 1.0);
	    

	    this.provinceList[65] = new Province(66, (scaleX*398+shiftX), (scaleY*290+shiftY), "Sardinia", 1, 1.0);
	    

	    this.provinceList[66] = new Province(67, (scaleX*402+shiftX), (scaleY*273+shiftY), "Corsica", 1, 1.0);
	    

	    this.provinceList[67] = new Province(68, (scaleX*452+shiftX), (scaleY*250+shiftY), "Pula", 1, 1.0);
	    

	    this.provinceList[68] = new Province(69, (scaleX*452+shiftX), (scaleY*221+shiftY), "Wien", 1, 1.0);
	    

	    this.provinceList[69] = new Province(70, (scaleX*462+shiftX), (scaleY*198+shiftY), "Wroclaw", 1, 1.0);
	    

	    this.provinceList[70] = new Province(71, (scaleX*478+shiftX), (scaleY*190+shiftY), "Lodz", 1, 1.0);
	    

	    this.provinceList[71] = new Province(72, (scaleX*468+shiftX), (scaleY*181+shiftY), "Swiecie", 1, 1.0);
	    

	    this.provinceList[72] = new Province(73, (scaleX*485+shiftX), (scaleY*161+shiftY), "Konigsburg", 1, 1.0);
	    

	    this.provinceList[73] = new Province(74, (scaleX*486+shiftX), (scaleY*181+shiftY), "Warzaw", 1, 1.0);
	    

	    this.provinceList[74] = new Province(75, (scaleX*461+shiftX), (scaleY*256+shiftY), "Croatia", 1, 1.0);
	    

	    this.provinceList[75] = new Province(76, (scaleX*463+shiftX), (scaleY*240+shiftY), "Zagreb", 1, 1.0);
	    

	    this.provinceList[76] = new Province(77, (scaleX*486+shiftX), (scaleY*223+shiftY), "Hungary", 1, 1.0);
	    

	    this.provinceList[77] = new Province(78, (scaleX*466+shiftX), (scaleY*214+shiftY), "Slovakia", 1, 1.0);
	    

	    this.provinceList[78] = new Province(79, (scaleX*498+shiftX), (scaleY*193+shiftY), "Krakow", 1, 1.0);
	    

	    this.provinceList[79] = new Province(80, (scaleX*507+shiftX), (scaleY*172+shiftY), "Bialystok", 1, 1.0);
	    

	    this.provinceList[80] = new Province(81, (scaleX*500+shiftX), (scaleY*150+shiftY), "Vilinus", 1, 1.0);
	    

	    this.provinceList[81] = new Province(82, (scaleX*500+shiftX), (scaleY*140+shiftY), "Riga", 1, 1.0);
	    

	    this.provinceList[82] = new Province(83, (scaleX*490+shiftX), (scaleY*278+shiftY), "Albania", 1, 1.0);
	    

	    this.provinceList[83] = new Province(84, (scaleX*488+shiftX), (scaleY*264+shiftY), "Serbia", 1, 1.0);
	    

	    this.provinceList[84] = new Province(85, (scaleX*482+shiftX), (scaleY*246+shiftY), "Belgrade", 1, 1.0);
	    

	    this.provinceList[85] = new Province(86, (scaleX*501+shiftX), (scaleY*229+shiftY), "Crisana", 1, 1.0);
	    

	    this.provinceList[86] = new Province(87, (scaleX*513+shiftX), (scaleY*207+shiftY), "Lviv", 1, 1.0);
	    

	    this.provinceList[87] = new Province(88, (scaleX*511+shiftX), (scaleY*190+shiftY), "Brest", 1, 1.0);
	    

	    this.provinceList[88] = new Province(89, (scaleX*502+shiftX), (scaleY*272+shiftY), "Skojpe", 1, 1.0);
	    

	    this.provinceList[89] = new Province(90, (scaleX*509+shiftX), (scaleY*319+shiftY), "Peloponnisos", 1, 1.0);
	    

	    this.provinceList[90] = new Province(91, (scaleX*516+shiftX), (scaleY*307+shiftY), "Athens", 1, 1.0);
	    

	    this.provinceList[91] = new Province(92, (scaleX*506+shiftX), (scaleY*288+shiftY), "Macedonia", 1, 1.0);
	    

	    this.provinceList[92] = new Province(93, (scaleX*528+shiftX), (scaleY*282+shiftY), "Kavalla", 1, 1.0);
	    

	    this.provinceList[93] = new Province(94, (scaleX*515+shiftX), (scaleY*266+shiftY), "Bulgaria", 1, 1.0);
	    

	    this.provinceList[94] = new Province(95, (scaleX*504+shiftX), (scaleY*260+shiftY), "Sofia", 1, 1.0);
	    

	    this.provinceList[95] = new Province(96, (scaleX*515+shiftX), (scaleY*253+shiftY), "Slatina", 1, 1.0);
	    

	    this.provinceList[96] = new Province(97, (scaleX*533+shiftX), (scaleY*221+shiftY), "Transylvania", 1, 1.0);
	    

	    this.provinceList[97] = new Province(98, (scaleX*538+shiftX), (scaleY*246+shiftY), "Bucharest", 1, 1.0);
	    

	    this.provinceList[98] = new Province(99, (scaleX*528+shiftX), (scaleY*199+shiftY), "Ostrog", 1, 1.0);
	    

	    this.provinceList[99] = new Province(100, (scaleX*526+shiftX), (scaleY*185+shiftY), "Pinsk", 1, 1.0);
	    

	    this.provinceList[100] = new Province(101, (scaleX*522+shiftX), (scaleY*169+shiftY), "Hrodna", 1, 1.0);
	    

	    this.provinceList[101] = new Province(102, (scaleX*517+shiftX), (scaleY*151+shiftY), "Smolensk", 1, 1.0);
	    

	    this.provinceList[102] = new Province(103, (scaleX*519+shiftX), (scaleY*137+shiftY), "Estonia", 1, 1.0);
	    

	    this.provinceList[103] = new Province(104, (scaleX*442+shiftX), (scaleY*139+shiftY), "Skane", 1, 1.0);
	    

	    this.provinceList[104] = new Province(105, (scaleX*452+shiftX), (scaleY*139+shiftY), "Kalmar", 1, 1.0);
	    

	    this.provinceList[105] = new Province(106, (scaleX*438+shiftX), (scaleY*119+shiftY), "Halland", 1, 1.0);
	    

	    this.provinceList[106] = new Province(107, (scaleX*458+shiftX), (scaleY*113+shiftY), "Stockholm", 1, 1.0);
	    

	    this.provinceList[107] = new Province(108, (scaleX*458+shiftX), (scaleY*93+shiftY), "Gavleborg", 1, 1.0);
	    

	    this.provinceList[108] = new Province(109, (scaleX*422+shiftX), (scaleY*109+shiftY), "Ankershus", 1, 1.0);
	    

	    this.provinceList[109] = new Province(110, (scaleX*406+shiftX), (scaleY*124+shiftY), "Rogaland", 1, 1.0);
	    

	    this.provinceList[110] = new Province(111, (scaleX*404+shiftX), (scaleY*93+shiftY), "Hordaland", 1, 1.0);
	    

	    this.provinceList[111] = new Province(112, (scaleX*424+shiftX), (scaleY*71+shiftY), "Trondelag", 1, 1.0);
	    

	    this.provinceList[112] = new Province(113, (scaleX*452+shiftX), (scaleY*72+shiftY), "Sveridge", 1, 1.0);
	    

	    this.provinceList[113] = new Province(114, (scaleX*451+shiftX), (scaleY*59+shiftY), "Nordland", 1, 1.0);
	    

	    this.provinceList[114] = new Province(115, (scaleX*459+shiftX), (scaleY*59+shiftY), "Norra", 1, 1.0);
	    

	    this.provinceList[115] = new Province(116, (scaleX*506+shiftX), (scaleY*59+shiftY), "Suomi", 1, 1.0);
	    

	    this.provinceList[116] = new Province(117, (scaleX*498+shiftX), (scaleY*80+shiftY), "Osterbotten", 1, 1.0);
	    

	    this.provinceList[117] = new Province(118, (scaleX*536+shiftX), (scaleY*59+shiftY), "Segezha", 1, 1.0);
	    

	    this.provinceList[118] = new Province(119, (scaleX*518+shiftX), (scaleY*72+shiftY), "Jyvaskyla", 1, 1.0);
	    

	    this.provinceList[119] = new Province(120, (scaleX*531+shiftX), (scaleY*85+shiftY), "Mikkeli", 1, 1.0);
	    

	    this.provinceList[120] = new Province(121, (scaleX*499+shiftX), (scaleY*103+shiftY), "Aland", 1, 1.0);
	    

	    this.provinceList[121] = new Province(122, (scaleX*515+shiftX), (scaleY*101+shiftY), "Helsinki", 1, 1.0);
	    

	    this.provinceList[122] = new Province(123, (scaleX*529+shiftX), (scaleY*126+shiftY), "Tartu", 1, 1.0);
	    

	    this.provinceList[123] = new Province(124, (scaleX*540+shiftX), (scaleY*139+shiftY), "Kholm", 1, 1.0);
	    

	    this.provinceList[124] = new Province(125, (scaleX*551+shiftX), (scaleY*232+shiftY), "Tulcea", 1, 1.0);
	    

	    this.provinceList[125] = new Province(126, (scaleX*559+shiftX), (scaleY*212+shiftY), "Nikolaev", 1, 1.0);
	    

	    this.provinceList[126] = new Province(127, (scaleX*545+shiftX), (scaleY*195+shiftY), "Vinnytsia", 1, 1.0);
	    

	    this.provinceList[127] = new Province(128, (scaleX*563+shiftX), (scaleY*200+shiftY), "Kiev", 1, 1.0);
	    

	    this.provinceList[128] = new Province(129, (scaleX*573+shiftX), (scaleY*206+shiftY), "Kremenchug", 1, 1.0);
	    

	    this.provinceList[129] = new Province(130, (scaleX*573+shiftX), (scaleY*186+shiftY), "Nosorka", 1, 1.0);
	    

	    this.provinceList[130] = new Province(131, (scaleX*584+shiftX), (scaleY*225+shiftY), "Nova", 1, 1.0);
	    

	    this.provinceList[131] = new Province(132, (scaleX*562+shiftX), (scaleY*178+shiftY), "Chernigov", 1, 1.0);
	    

	    this.provinceList[132] = new Province(133, (scaleX*550+shiftX), (scaleY*172+shiftY), "Korzec", 1, 1.0);
	    

	    this.provinceList[133] = new Province(134, (scaleX*559+shiftX), (scaleY*164+shiftY), "Gomel", 1, 1.0);
	    

	    this.provinceList[134] = new Province(135, (scaleX*547+shiftX), (scaleY*150+shiftY), "Rushev", 1, 1.0);
	    

	    this.provinceList[135] = new Province(136, (scaleX*568+shiftX), (scaleY*151+shiftY), "Starodub", 1, 1.0);
	    

	    this.provinceList[136] = new Province(137, (scaleX*552+shiftX), (scaleY*132+shiftY), "Moskva", 1, 1.0);
	    

	    this.provinceList[137] = new Province(138, (scaleX*554+shiftX), (scaleY*108+shiftY), "Volkhov", 1, 1.0);
	    

	    this.provinceList[138] = new Province(139, (scaleX*555+shiftX), (scaleY*92+shiftY), "Vitegra", 1, 1.0);
	    

	    this.provinceList[139] = new Province(140, (scaleX*577+shiftX), (scaleY*72+shiftY), "Kargopol", 1, 1.0);
	    

	    this.provinceList[140] = new Province(141, (scaleX*567+shiftX), (scaleY*64+shiftY), "Onega", 1, 1.0);
	    

	    this.provinceList[141] = new Province(142, (scaleX*584+shiftX), (scaleY*59+shiftY), "Mezen", 1, 1.0);
	    

	    this.provinceList[142] = new Province(143, (scaleX*599+shiftX), (scaleY*197+shiftY), "Zaporizhzhia", 1, 1.0);
	    

	    this.provinceList[143] = new Province(144, (scaleX*596+shiftX), (scaleY*174+shiftY), "Poltava", 1, 1.0);
	    

	    this.provinceList[144] = new Province(145, (scaleX*589+shiftX), (scaleY*139+shiftY), "Ryzan", 1, 1.0);
	    

	    this.provinceList[145] = new Province(146, (scaleX*575+shiftX), (scaleY*123+shiftY), "Valdimir", 1, 1.0);
	    

	    this.provinceList[146] = new Province(147, (scaleX*589+shiftX), (scaleY*103+shiftY), "Velsk", 1, 1.0);
	    

	    this.provinceList[147] = new Province(148, (scaleX*627+shiftX), (scaleY*99+shiftY), "Yarenak", 1, 1.0);
	    

	    this.provinceList[148] = new Province(149, (scaleX*627+shiftX), (scaleY*59+shiftY), "Glotovsk", 1, 1.0);
	    

	    this.provinceList[149] = new Province(150, (scaleX*651+shiftX), (scaleY*92+shiftY), "Sarapol", 1, 1.0);
	    

	    this.provinceList[150] = new Province(151, (scaleX*618+shiftX), (scaleY*118+shiftY), "Kirov", 1, 1.0);
	    

	    this.provinceList[151] = new Province(152, (scaleX*640+shiftX), (scaleY*122+shiftY), "Nizhny Novgorod", 1, 1.0);
	    

	    this.provinceList[152] = new Province(153, (scaleX*612+shiftX), (scaleY*145+shiftY), "Gorki", 1, 1.0);
	    

	    this.provinceList[153] = new Province(154, (scaleX*635+shiftX), (scaleY*156+shiftY), "Penza", 1, 1.0);
	    

	    this.provinceList[154] = new Province(155, (scaleX*616+shiftX), (scaleY*175+shiftY), "Kursk", 1, 1.0);
	    

	    this.provinceList[155] = new Province(156, (scaleX*633+shiftX), (scaleY*203+shiftY), "Dontsk", 1, 1.0);
	    

	    this.provinceList[156] = new Province(157, (scaleX*650+shiftX), (scaleY*176+shiftY), "Volgograd", 1, 1.0);
	    

	    this.provinceList[157] = new Province(158, (scaleX*676+shiftX), (scaleY*169+shiftY), "Saratov", 1, 1.0);
	    

	    this.provinceList[158] = new Province(159, (scaleX*670+shiftX), (scaleY*124+shiftY), "Kazan", 1, 1.0);
	    

	    this.provinceList[159] = new Province(160, (scaleX*711+shiftX), (scaleY*126+shiftY), "Ufa", 1, 1.0);
	    

	    this.provinceList[160] = new Province(161, (scaleX*698+shiftX), (scaleY*73+shiftY), "Perm", 1, 1.0);
	    

	    this.provinceList[161] = new Province(162, (scaleX*730+shiftX), (scaleY*59+shiftY), "Cherdio", 1, 1.0);
	    

	    this.provinceList[162] = new Province(163, (scaleX*785+shiftX), (scaleY*60+shiftY), "Surgut", 1, 1.0);
	    

	    this.provinceList[163] = new Province(164, (scaleX*658+shiftX), (scaleY*203+shiftY), "Volgodonsk", 1, 1.0);
	    

	    this.provinceList[164] = new Province(165, (scaleX*700+shiftX), (scaleY*161+shiftY), "Buzuluk", 1, 1.0);
	    

	    this.provinceList[165] = new Province(166, (scaleX*734+shiftX), (scaleY*168+shiftY), "Orenburg", 1, 1.0);
	    

	    this.provinceList[166] = new Province(167, (scaleX*765+shiftX), (scaleY*171+shiftY), "Aktobe", 1, 1.0);
	    

	    this.provinceList[167] = new Province(168, (scaleX*762+shiftX), (scaleY*157+shiftY), "Yasny", 1, 1.0);
	    

	    this.provinceList[168] = new Province(169, (scaleX*750+shiftX), (scaleY*106+shiftY), "Cheylabinsk", 1, 1.0);
	    

	    this.provinceList[169] = new Province(170, (scaleX*800+shiftX), (scaleY*109+shiftY), "Omsk", 1, 1.0);
	    

	    this.provinceList[170] = new Province(171, (scaleX*788+shiftX), (scaleY*137+shiftY), "Kurgan", 1, 1.0);
	    

	    this.provinceList[171] = new Province(172, (scaleX*805+shiftX), (scaleY*144+shiftY), "Nur", 1, 1.0);
	    

	    this.provinceList[172] = new Province(173, (scaleX*782+shiftX), (scaleY*160+shiftY), "Turgay", 1, 1.0);
	    

	    this.provinceList[173] = new Province(174, (scaleX*742+shiftX), (scaleY*190+shiftY), "Kulsary", 1, 1.0);
	    

	    this.provinceList[174] = new Province(175, (scaleX*792+shiftX), (scaleY*185+shiftY), "Koskol", 1, 1.0);
	    

	    this.provinceList[175] = new Province(176, (scaleX*806+shiftX), (scaleY*191+shiftY), "Kyzylorda", 1, 1.0);
	    

	    this.provinceList[176] = new Province(177, (scaleX*727+shiftX), (scaleY*214+shiftY), "Aktau", 1, 1.0);
	    

	    this.provinceList[177] = new Province(178, (scaleX*770+shiftX), (scaleY*209+shiftY), "Nukus", 1, 1.0);
	    

	    this.provinceList[178] = new Province(179, (scaleX*794+shiftX), (scaleY*199+shiftY), "Arial", 1, 1.0);
	    

	    this.provinceList[179] = new Province(180, (scaleX*629+shiftX), (scaleY*221+shiftY), "Krasnodar", 1, 1.0);
	    

	    this.provinceList[180] = new Province(181, (scaleX*645+shiftX), (scaleY*223+shiftY), "Stavropol", 1, 1.0);
	    

	    this.provinceList[181] = new Province(182, (scaleX*664+shiftX), (scaleY*223+shiftY), "Grizny", 1, 1.0);
	    

	    this.provinceList[182] = new Province(183, (scaleX*662+shiftX), (scaleY*240+shiftY), "Sochi", 1, 1.0);
	    

	    this.provinceList[183] = new Province(184, (scaleX*671+shiftX), (scaleY*246+shiftY), "Tibilisi", 1, 1.0);
	    

	    this.provinceList[184] = new Province(185, (scaleX*680+shiftX), (scaleY*264+shiftY), "Patnos", 1, 1.0);
	    

	    this.provinceList[185] = new Province(186, (scaleX*551+shiftX), (scaleY*279+shiftY), "Constantinople", 1, 1.0);
	    

	    this.provinceList[186] = new Province(187, (scaleX*564+shiftX), (scaleY*286+shiftY), "Gebze", 1, 1.0);
	    

	    this.provinceList[187] = new Province(188, (scaleX*552+shiftX), (scaleY*298+shiftY), "Balikesir", 1, 1.0);
	    

	    this.provinceList[188] = new Province(189, (scaleX*558+shiftX), (scaleY*308+shiftY), "Izmir", 1, 1.0);
	    

	    this.provinceList[189] = new Province(190, (scaleX*569+shiftX), (scaleY*301+shiftY), "Usak", 1, 1.0);
	    

	    this.provinceList[190] = new Province(191, (scaleX*582+shiftX), (scaleY*295+shiftY), "Konya", 1, 1.0);
	    

	    this.provinceList[191] = new Province(192, (scaleX*578+shiftX), (scaleY*313+shiftY), "Antalya", 1, 1.0);
	    

	    this.provinceList[192] = new Province(193, (scaleX*605+shiftX), (scaleY*302+shiftY), "Karaman", 1, 1.0);
	    

	    this.provinceList[193] = new Province(194, (scaleX*601+shiftX), (scaleY*289+shiftY), "Ankara", 1, 1.0);
	    

	    this.provinceList[194] = new Province(195, (scaleX*590+shiftX), (scaleY*277+shiftY), "Zonguldak", 1, 1.0);
	    

	    this.provinceList[195] = new Province(196, (scaleX*610+shiftX), (scaleY*276+shiftY), "Sinop", 1, 1.0);
	    

	    this.provinceList[196] = new Province(197, (scaleX*616+shiftX), (scaleY*281+shiftY), "Kayseri", 1, 1.0);
	    

	    this.provinceList[197] = new Province(198, (scaleX*639+shiftX), (scaleY*288+shiftY), "Adana", 1, 1.0);
	    

	    this.provinceList[198] = new Province(199, (scaleX*619+shiftX), (scaleY*274+shiftY), "Ordu", 1, 1.0);
	    

	    this.provinceList[199] = new Province(200, (scaleX*647+shiftX), (scaleY*263+shiftY), "Trebezond", 1, 1.0);
	    

	    this.provinceList[200] = new Province(201, (scaleX*660+shiftX), (scaleY*284+shiftY), "Mus", 1, 1.0);
	    

	    this.provinceList[201] = new Province(202, (scaleX*641+shiftX), (scaleY*313+shiftY), "Aleppo", 1, 1.0);
	    

	    this.provinceList[202] = new Province(203, (scaleX*662+shiftX), (scaleY*305+shiftY), "Syria", 1, 1.0);
	    

	    this.provinceList[203] = new Province(204, (scaleX*684+shiftX), (scaleY*290+shiftY), "Van", 1, 1.0);
	    

	    this.provinceList[204] = new Province(205, (scaleX*720+shiftX), (scaleY*280+shiftY), "Tehran", 1, 1.0);
	    

	    this.provinceList[205] = new Province(206, (scaleX*817+shiftX), (scaleY*224+shiftY), "Navoi", 1, 1.0);
	    

	    this.provinceList[206] = new Province(207, (scaleX*805+shiftX), (scaleY*211+shiftY), "Taspan", 1, 1.0);
	    

	    this.provinceList[207] = new Province(208, (scaleX*787+shiftX), (scaleY*218+shiftY), "Uchkuduk", 1, 1.0);
	    

	    this.provinceList[208] = new Province(209, (scaleX*765+shiftX), (scaleY*233+shiftY), "Kaplankyr", 1, 1.0);
	    

	    this.provinceList[209] = new Province(210, (scaleX*762+shiftX), (scaleY*249+shiftY), "Golestan", 1, 1.0);
	    

	    this.provinceList[210] = new Province(211, (scaleX*782+shiftX), (scaleY*243+shiftY), "Ashgabat", 1, 1.0);
	    

	    this.provinceList[211] = new Province(212, (scaleX*776+shiftX), (scaleY*269+shiftY), "Shahroud", 1, 1.0);
	    

	    this.provinceList[212] = new Province(213, (scaleX*813+shiftX), (scaleY*253+shiftY), "Bukhara", 1, 1.0);
	    

	    this.provinceList[213] = new Province(214, (scaleX*766+shiftX), (scaleY*287+shiftY), "Sari", 1, 1.0);
	    

	    this.provinceList[214] = new Province(215, (scaleX*775+shiftX), (scaleY*285+shiftY), "Qom", 1, 1.0);
	    

	    this.provinceList[215] = new Province(216, (scaleX*733+shiftX), (scaleY*302+shiftY), "Hamedan", 1, 1.0);
	    

	    this.provinceList[216] = new Province(217, (scaleX*705+shiftX), (scaleY*305+shiftY), "Erbil", 1, 1.0);
	    

	    this.provinceList[217] = new Province(218, (scaleX*691+shiftX), (scaleY*305+shiftY), "Mosul", 1, 1.0);
	    

	    this.provinceList[218] = new Province(219, (scaleX*702+shiftX), (scaleY*326+shiftY), "Hazem", 1, 1.0);
	    

	    this.provinceList[219] = new Province(220, (scaleX*724+shiftX), (scaleY*324+shiftY), "Arar", 1, 1.0);
	    

	    this.provinceList[220] = new Province(221, (scaleX*743+shiftX), (scaleY*337+shiftY), "Baghdad", 1, 1.0);
	    

	    this.provinceList[221] = new Province(222, (scaleX*783+shiftX), (scaleY*325+shiftY), "Isfahan", 1, 1.0);
	    

	    this.provinceList[222] = new Province(223, (scaleX*811+shiftX), (scaleY*295+shiftY), "Herat", 1, 1.0);
	    

	    this.provinceList[223] = new Province(224, (scaleX*636+shiftX), (scaleY*333+shiftY), "Jerusalem", 1, 1.0);
	    

	    this.provinceList[224] = new Province(225, (scaleX*650+shiftX), (scaleY*328+shiftY), "Damascus", 1, 1.0);
	    

	    this.provinceList[225] = new Province(226, (scaleX*660+shiftX), (scaleY*344+shiftY), "Amman", 1, 1.0);
	    

	    this.provinceList[226] = new Province(227, (scaleX*674+shiftX), (scaleY*329+shiftY), "Al Qurayyat", 1, 1.0);
	    

	    this.provinceList[227] = new Province(228, (scaleX*618+shiftX), (scaleY*373+shiftY), "Suez", 1, 1.0);
	    

	    this.provinceList[228] = new Province(229, (scaleX*646+shiftX), (scaleY*358+shiftY), "Ma'an", 1, 1.0);
	    

	    this.provinceList[229] = new Province(230, (scaleX*645+shiftX), (scaleY*378+shiftY), "Tsbuk", 1, 1.0);
	    

	    this.provinceList[230] = new Province(231, (scaleX*663+shiftX), (scaleY*355+shiftY), "Sude'a", 1, 1.0);
	    

	    this.provinceList[231] = new Province(232, (scaleX*695+shiftX), (scaleY*356+shiftY), "Basrah", 1, 1.0);
	    

	    this.provinceList[232] = new Province(233, (scaleX*788+shiftX), (scaleY*376+shiftY), "Shiraz", 1, 1.0);
	    

	    this.provinceList[233] = new Province(234, (scaleX*700+shiftX), (scaleY*385+shiftY), "Hafar Al Batin", 1, 1.0);
	    

	    this.provinceList[234] = new Province(235, (scaleX*594+shiftX), (scaleY*373+shiftY), "Cairo", 1, 1.0);
	    

	    this.provinceList[235] = new Province(236, (scaleX*566+shiftX), (scaleY*378+shiftY), "Alexandria", 1, 1.0);
	    

	    this.provinceList[236] = new Province(237, (scaleX*545+shiftX), (scaleY*391+shiftY), "Cara", 1, 1.0);
	    

	    this.provinceList[237] = new Province(238, (scaleX*550+shiftX), (scaleY*377+shiftY), "Marsa Matruh", 1, 1.0);
	    

	    this.provinceList[238] = new Province(239, (scaleX*523+shiftX), (scaleY*372+shiftY), "Torbuk", 1, 1.0);
	    

	    this.provinceList[239] = new Province(240, (scaleX*500+shiftX), (scaleY*367+shiftY), "Derna", 1, 1.0);
	    

	    this.provinceList[240] = new Province(241, (scaleX*454+shiftX), (scaleY*387+shiftY), "As Sidir", 1, 1.0);
	    

	    this.provinceList[241] = new Province(242, (scaleX*422+shiftX), (scaleY*368+shiftY), "Tripoli", 1, 1.0);
	    

	    this.provinceList[242] = new Province(243, (scaleX*400+shiftX), (scaleY*379+shiftY), "Dirj", 1, 1.0);
	    

	    this.provinceList[243] = new Province(244, (scaleX*308+shiftX), (scaleY*374+shiftY), "Djelfa", 1, 1.0);
	    

	    this.provinceList[244] = new Province(245, (scaleX*325+shiftX), (scaleY*343+shiftY), "Laghouat", 1, 1.0);
	    

	    this.provinceList[245] = new Province(246, (scaleX*352+shiftX), (scaleY*323+shiftY), "Constantine", 1, 1.0);
	    

	    this.provinceList[246] = new Province(247, (scaleX*393+shiftX), (scaleY*325+shiftY), "Tanis", 1, 1.0);
	    

	    this.provinceList[247] = new Province(248, (scaleX*311+shiftX), (scaleY*322+shiftY), "Algiers", 1, 1.0);
	    

	    this.provinceList[248] = new Province(249, (scaleX*263+shiftX), (scaleY*355+shiftY), "Bechar", 1, 1.0);
	    

	    this.provinceList[249] = new Province(250, (scaleX*218+shiftX), (scaleY*370+shiftY), "Tinghir", 1, 1.0);
	    

	    this.provinceList[250] = new Province(251, (scaleX*213+shiftX), (scaleY*348+shiftY), "Safi", 1, 1.0);
	    

	    this.provinceList[251] = new Province(252, (scaleX*243+shiftX), (scaleY*340+shiftY), "Midelt", 1, 1.0);
	    

	    this.provinceList[252] = new Province(253, (scaleX*253+shiftX), (scaleY*319+shiftY), "Fez", 1, 1.0);
	    

	    this.provinceList[253] = new Province(254, (scaleX*285+shiftX), (scaleY*329+shiftY), "Nador", 1, 1.0);
	    

	    this.provinceList[254] = new Province(255, (scaleX*222+shiftX), (scaleY*332+shiftY), "Rabat", 1, 1.0);
	    

	    this.provinceList[255] = new Province(256, (scaleX*198+shiftX), (scaleY*365+shiftY), "Essaouira", 1, 1.0);
	    

	    this.provinceList[256] = new Province(257, (scaleX*170+shiftX), (scaleY*389+shiftY), "Samara", 1, 1.0);
	    

	    this.provinceList[257] = new Province(258, (scaleX*168+shiftX), (scaleY*383+shiftY), "Layyoune", 1, 1.0);
	    

	    this.provinceList[258] = new Province(259, (scaleX*178+shiftX), (scaleY*371+shiftY), "Tantan", 1, 1.0);
	    

	    this.provinceList[259] = new Province(260, (scaleX*306+shiftX), (scaleY*159+shiftY), "Waterford", 1, 1.0);
	    

	    this.provinceList[260] = new Province(261, (scaleX*314+shiftX), (scaleY*141+shiftY), "Ulster", 1, 1.0);
	    

	    this.provinceList[261] = new Province(262, (scaleX*343+shiftX), (scaleY*212+shiftY), "Le Mans", 1, 1.0);
	    

	    this.provinceList[262] = new Province(263, (scaleX*391+shiftX), (scaleY*212+shiftY), "Alsace", 1, 1.0);
	    

	    this.provinceList[263] = new Province(264, (scaleX*383+shiftX), (scaleY*230+shiftY), "Bern", 1, 1.0);
	    

	    this.provinceList[264] = new Province(265, (scaleX*363+shiftX), (scaleY*229+shiftY), "Vichy", 1, 1.0);
	    

	    this.provinceList[265] = new Province(266, (scaleX*368+shiftX), (scaleY*240+shiftY), "Valence", 1, 1.0);
	    

	    this.provinceList[266] = new Province(267, (scaleX*391+shiftX), (scaleY*242+shiftY), "Nice", 1, 1.0);
	    

	    this.provinceList[267] = new Province(268, (scaleX*428+shiftX), (scaleY*262+shiftY), "Ancona", 1, 1.0);
	    

	    this.provinceList[268] = new Province(269, (scaleX*434+shiftX), (scaleY*240+shiftY), "Venice", 1, 1.0);
	    

	    this.provinceList[269] = new Province(270, (scaleX*447+shiftX), (scaleY*240+shiftY), "Slovenia", 1, 1.0);
	    

	    this.provinceList[270] = new Province(271, (scaleX*441+shiftX), (scaleY*221+shiftY), "Linz", 1, 1.0);
	    

	    this.provinceList[271] = new Province(272, (scaleX*412+shiftX), (scaleY*189+shiftY), "Hanover", 1, 1.0);
	    

	    this.provinceList[272] = new Province(273, (scaleX*421+shiftX), (scaleY*181+shiftY), "Luneburg", 1, 1.0);
	    

	    this.provinceList[273] = new Province(274, (scaleX*439+shiftX), (scaleY*189+shiftY), "Leipzig", 1, 1.0);
	    

	    this.provinceList[274] = new Province(275, (scaleX*454+shiftX), (scaleY*168+shiftY), "Scezecin", 1, 1.0);
	    

	    this.provinceList[275] = new Province(276, (scaleX*473+shiftX), (scaleY*167+shiftY), "Danzig", 1, 1.0);
	    

	    this.provinceList[276] = new Province(277, (scaleX*454+shiftX), (scaleY*204+shiftY), "Brno", 1, 1.0);
	    

	    this.provinceList[277] = new Province(278, (scaleX*428+shiftX), (scaleY*213+shiftY), "Munich", 1, 1.0);
	    

	    this.provinceList[278] = new Province(279, (scaleX*466+shiftX), (scaleY*227+shiftY), "Budapest", 1, 1.0);
	    

	    this.provinceList[279] = new Province(280, (scaleX*505+shiftX), (scaleY*220+shiftY), "Satu Mare", 1, 1.0);
	    

	    this.provinceList[280] = new Province(281, (scaleX*521+shiftX), (scaleY*227+shiftY), "Bacau", 1, 1.0);
	    

	    this.provinceList[281] = new Province(282, (scaleX*509+shiftX), (scaleY*246+shiftY), "Brasov", 1, 1.0);
	    

	    this.provinceList[282] = new Province(283, (scaleX*543+shiftX), (scaleY*261+shiftY), "Varna", 1, 1.0);
	    

	    this.provinceList[283] = new Province(284, (scaleX*499+shiftX), (scaleY*302+shiftY), "Trikala", 1, 1.0);
	    

	    this.provinceList[284] = new Province(285, (scaleX*597+shiftX), (scaleY*236+shiftY), "Kyrim", 1, 1.0);
	    

	    this.provinceList[285] = new Province(286, (scaleX*703+shiftX), (scaleY*260+shiftY), "Baku", 1, 1.0);
	    

	    this.provinceList[286] = new Province(287, (scaleX*449+shiftX), (scaleY*93+shiftY), "Mora", 1, 1.0);
	    

	    this.provinceList[287] = new Province(288, (scaleX*540+shiftX), (scaleY*113+shiftY), "Novgorod", 1, 1.0);
	    

	    this.provinceList[288] = new Province(289, (scaleX*514+shiftX), (scaleY*119+shiftY), "Reval", 1, 1.0);
	    

	    this.provinceList[289] = new Province(290, (scaleX*608+shiftX), (scaleY*136+shiftY), "Murom", 1, 1.0);
	    

	    this.provinceList[290] = new Province(291, (scaleX*759+shiftX), (scaleY*332+shiftY), "Ilam", 1, 1.0);
	    

	    this.provinceList[291] = new Province(292, (scaleX*823+shiftX), (scaleY*186+shiftY), "Zarafshan", 1, 1.0);
	    

	    this.provinceList[292] = new Province(293, (scaleX*384+shiftX), (scaleY*346+shiftY), "Tatouine", 1, 1.0);
	    

	    this.provinceList[293] = new Province(294, (scaleX*302+shiftX), (scaleY*329+shiftY), "Oujda", 1, 1.0);
	    

	    this.provinceList[294] = new Province(295, (scaleX*315+shiftX), (scaleY*259+shiftY), "Zaragoza", 1, 1.0);
	    

	    this.provinceList[295] = new Province(296, (scaleX*278+shiftX), (scaleY*254+shiftY), "Palencia", 1, 1.0);
	    
    }
	/*public void place(){
		super.place();
	}
	public int totalDev(){
		return super.totalDev();
	}
	public void resetAll(){super.resetAll();}
	public boolean allTaken(){ //checks if all a maps provinces is owned by a player
		return super.allTaken();
	}
	public boolean allOwned(Player player){ //chacks if a given player owns the whole map
		return super.allOwned(player);
	}
	public int bonuses(Player player){
		return super.bonuses(player);
	}
	public int ownedContinents(Player player){
		return super.ownedContinents(player);
	}

	public void decayAll(){
		super.decayAll();
	}
	public int hegemonyBonus(Province[] owned){
		return super.hegemonyBonus(owned);
	}
	public void resetSelections(){
		super.resetSelections();
	}
	public double maxTroops(){
		return super.maxTroops();
	}
	public double mostInterest(){ return super.mostInterest();}*/
}