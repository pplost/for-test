var classNamesDict = {
	"1": "Saber",
	"2": "Archer",
	"3": "Lancer",
	"4": "Rider",
	"5": "Caster",
	"6": "Assassin",
	"7": "Berserker",
	"8": "Shielder",
	"9": "Ruler",
	"10": "Alterego",
	"11": "Avenger",
	"23": "MoonCancer",
};

var cardColorsDict = {
	"1": "Arts",
	"2": "Buster",
	"3": "Quick",
};

var servantsDict = {
	"1": "玛修·基列莱特",
	"2": "阿尔托莉雅·潘德拉贡",
	"3": "阿尔托莉雅·潘德拉贡(Alter)",
	"4": "阿尔托莉雅·潘德拉贡(Lily)",
	"5": "尼禄·克劳狄乌斯",
	"6": "齐格飞",
	"7": "盖乌斯·尤利乌斯·凯撒",
	"8": "阿蒂拉",
	"9": "吉尔·德·雷",
	"10": "骑士迪昂",
	"11": "卫宫",
	"12": "吉尔伽美什",
	"13": "罗宾汉",
	"14": "阿塔兰忒",
	"15": "尤瑞艾莉",
	"16": "阿拉什",
	"17": "库·丘林",
	"18": "伊丽莎白·巴托里",
	"19": "武藏坊弁庆",
	"20": "库·丘林(Prototype)",
	"21": "列奥尼达一世",
	"22": "罗穆路斯",
	"23": "美杜莎",
	"24": "乔尔乔斯",
	"25": "爱德华·蒂奇",
	"26": "布狄卡",
	"27": "牛若丸",
	"28": "亚历山大",
	"29": "玛丽·安托瓦内特",
	"30": "玛尔达",
	"31": "美狄亚",
	"32": "吉尔·德·雷",
	"33": "汉斯·克里斯蒂安·安徒生",
	"34": "威廉·莎士比亚",
	"35": "梅菲斯托费勒斯",
	"36": "沃尔夫冈·阿马德乌斯·莫扎特",
	"37": "诸葛孔明(埃尔梅罗二世)",
	"38": "库·丘林",
	"39": "佐佐木小次郎",
	"40": "咒腕哈桑",
	"41": "斯忒诺",
	"42": "荆轲",
	"43": "夏尔·亨利·桑松",
	"44": "剧院魅影",
	"45": "玛塔·哈丽",
	"46": "卡米拉",
	"47": "赫拉克勒斯",
	"48": "兰斯洛特",
	"49": "吕布奉先",
	"50": "斯巴达克斯",
	"51": "坂田金时",
	"52": "弗拉德三世",
	"53": "阿斯忒里俄斯",
	"54": "卡利古拉",
	"55": "大流士三世",
	"56": "清姬",
	"57": "血斧埃里克",
	"58": "玉藻猫",
	"59": "贞德",
	"60": "俄里翁",
	"61": "伊丽莎白·巴托里(万圣节)",
	"62": "玉藻前",
	"63": "大卫",
	"64": "赫克托耳",
	"65": "弗朗西斯·德雷克",
	"66": "安妮·伯妮&玛莉·瑞德",
	"67": "美狄亚(Lily)",
	"68": "冲田总司",
	"69": "织田信长",
	"70": "斯卡哈",
	"71": "迪尔姆德·奥迪纳",
	"72": "弗格斯·马克·罗伊",
	"73": "阿尔托莉雅·潘德拉贡(圣诞 Alter)",
	"74": "童谣",
	"75": "开膛手杰克",
	"76": "莫德雷德",
	"77": "尼古拉·特斯拉",
	"78": "阿尔托莉雅·潘德拉贡(Alter)",
	"79": "冯·霍恩海姆·帕拉塞尔苏斯",
	"80": "查尔斯·巴贝奇",
	"81": "亨利·杰基尔&海德",
	"82": "弗兰肯斯坦",
	"84": "阿周那",
	"85": "迦尔纳",
	"86": "谜之女主角X",
	"87": "芬恩·麦克库尔",
	"88": "布伦希尔德",
	"89": "贝奥武夫",
	"90": "尼禄·克劳狄乌斯(新娘)",
	"91": "两仪式",
	"92": "两仪式",
	"93": "天草四郎",
	"94": "阿斯托尔福",
	"95": "幼吉尔",
	"96": "岩窟王",
	"97": "南丁格尔",
	"98": "库·丘林(Alter)",
	"99": "女王梅芙",
	"100": "海伦娜·布拉瓦茨基",
	"101": "罗摩",
	"102": "李书文",
	"103": "托马斯·爱迪生",
	"104": "杰罗尼莫",
	"105": "比利小子",
	"106": "贞德(Alter)",
	"107": "安哥拉曼纽",
	"108": "伊斯坎达尔",
	"109": "卫宫(Assassin)",
	"110": "百貌哈桑",
	"111": "爱丽丝菲尔(天之衣)",
	"112": "酒吞童子",
	"113": "玄奘三蔵",
	"114": "源赖光",
	"115": "坂田金时",
	"116": "茨木童子",
	"117": "风魔小太郎",
	"118": "奥斯曼狄斯",
	"119": "阿尔托莉雅·潘德拉贡",
	"120": "尼托克丽丝",
	"121": "兰斯洛特",
	"122": "特里斯坦",
	//
	"123": "高文",
	"124": "静谧哈桑",
	"125": "表藤太",
	"126": "贝德维尔",
	//----------
	"127": "莱昂纳多·达·芬奇",
	"128": "玉藻前",
	"129": "阿尔托莉雅·潘德拉贡(Archer)",
	"130": "玛丽·安托瓦内特",
	"131": "安妮·伯妮&玛丽·里德",
	"132": "莫德雷德",
	"133": "斯卡哈",
	"134": "清姬",
	"135": "马大",
	"136": "伊莉雅斯菲尔",
	"137": "克洛伊·冯·爱因兹贝伦",
	"138": "伊丽莎白·巴陶里(勇者)",
	"139": "克利奥帕特拉",
	"140": "弗拉德三世(Extra)",
	"141": "贞德·Alter·Santa·Lily",
	"142": "伊修塔尔",
	"143": "恩奇都",
	"144": "魁札尔·科亚特尔",
	"145": "吉尔伽美什(Caster)",
	"146": "美杜莎(Lancer)",
	"147": "戈尔贡",
	"148": "豹人",
	"150": "梅林",
	"153": "宫本武藏",
	"154": "“山之翁”",
	"155": "谜之女主角X(Alter)",
	"156": "詹姆斯·莫里亚蒂",
	"157": "卫宫(Alter)",
	"158": "海森·罗伯",
	"159": "燕青",
	"160": "亚瑟·潘德拉贡(Prototype)",
	"161": "土方岁三",
	"162": "茶茶",
	"163": "梅尔特莉莉丝(溶解莉莉丝)",
	"164": "帕森莉普(热情迷唇)",
	"165": "铃鹿御前",
	"166": "BB",
	"167": "杀生院祈荒",
	"169": "山鲁佐德",
	"170": "武则天",
	"171": "彭忒西勒亚",
	"172": "克里斯托弗·哥伦布",
	"173": "夏洛克·福尔摩斯",
	"174": "保罗·班扬",
	"175": "尼禄·克劳狄乌斯",
	"176": "弗兰肯斯坦",
	"177": "尼托克丽丝",
	"178": "织田信长",
	"179": "阿尔托莉雅·潘德拉贡(Alter)",
	"180": "海伦娜·布拉瓦茨基",
	"181": "源赖光",
	"182": "伊修塔尔",
};

var noblePhantasmsDict = {
	"仮想宝具 疑似展開／人理の礎": "假想宝具 拟似展开/人理之础",
	"いまは遙か理想の城": "已然遥远的理想之城",
	"約束された勝利の剣": "誓约胜利之剑",
	"勝利すべき黄金の剣": "必胜黄金之剑",
	"童女謳う華の帝政": "童女讴歌的荣华帝政",
	"幻想大剣・天魔失墜": "幻想大剑·天魔失坠",
	"黄の死": "黄之死",
	"軍神の剣": "军神之剑",
	"神聖たる旗に集いて吼えよ": "集结于圣旗之下怒吼吧",
	"百合の花咲く豪華絢爛": "百合花开豪华绚烂",
	"無限の剣製": "无限剑制",
	"天地乖離す開闢の星": "天地乖离开辟之星",
	"祈りの弓": "祈祷之弓",
	"訴状の矢文": "诉状箭书",
	"女神の視線": "女神的视线",
	"流星一条": "流星一条",
	"刺し穿つ死棘の槍": "穿刺死棘之枪",
	"鮮血魔嬢": "鲜血魔女",
	"五百羅漢補陀落渡海": "五百罗汉补陀落渡海",
	"穿ちの朱槍": "贯穿之朱枪",
	"炎門の守護者": "炎门守护者",
	"すべては我が槍に通ずる": "吾枪通达万物",
	"騎英の手綱": "骑英之缰绳",
	"力屠る祝福の剣": "刚力屠戮祝福之剑",
	"アン女王の復讐": "安妮女王之复仇",
	"約束されざる守護の車輪": "无以誓约守护之车轮",
	"壇ノ浦・八艘跳": "坛之浦·八艘跳",
	"始まりの蹂躙制覇": "初始的蹂躏制霸",
	"百合の王冠に栄光あれ": "愿百合王冠荣光永在",
	"愛知らぬ哀しき竜よ": "不识爱的悲哀之龙啊",
	"破戒すべき全ての符": "万符必应破戒",
	"螺湮城教本": "螺湮城教本",
	"貴方のための物語": "为你撰写的故事",
	"開演の刻は来たれり、此処に万雷の喝采を": "开演之刻已至，此处应有雷鸣般的喝彩",
	"微睡む爆弾": "浅眠炸弹",
	"死神のための葬送曲": "献给死神的安魂曲",
	"石兵八陣": "石兵八阵",
	"灼き尽くす炎の檻": "灼烧殆尽的炎笼",
	"燕返し": "燕返",
	"妄想心音": "妄想心音",
	"女神の微笑": "女神的微笑",
	"不還匕首": "不归匕首",
	"死は明日への希望なり": "死亡将为明日的希望",
	"地獄にこそ響け我が愛の唄": "吾之情歌只在地狱回响",
	"陽の眼を持つ女": "拥有阳眼之女",
	"幻想の鉄処女": "幻想铁处女",
	"射殺す百頭": "射杀百头",
	"騎士は徒手にて死せず": "骑士不徒手而亡",
	"軍神五兵": "军神五兵",
	"疵獣の咆吼": "伤兽的咆吼",
	"黄金衝撃": "黄金冲击",
	"血塗れ王鬼": "血染的王鬼",
	"万古不易の迷宮": "万古不变的迷宫",
	"我が心を喰らえ、月の光": "吞噬吾心吧，月光",
	"不死の一万騎兵": "不死的万名骑兵",
	"転身火生三昧": "转身火生三昧",
	"血塗れの戴冠式": "血染的加冕仪式",
	"燦々日光午睡宮酒池肉林": "璀璨日光午睡宫酒池肉林",
	"我が神はここにありて": "吾主在此",
	"月女神の愛矢恋矢": "月女神的爱箭恋矢",
	"鮮血特上魔嬢": "鲜血极致魔女",
	"水天日光天照八野鎮石": "水天日光天照八野镇石",
	"五つの石": "五块石头",
	"不毀の極槍": "不毁的极枪",
	"黄金鹿と嵐の夜": "黄金鹿与暴风夜",
	"比翼にして連理": "比翼连理",
	"修補すべき全ての疵": "万疵必行修补",
	"無明三段突き": "无明三段突",
	"三千世界": "三千世界",
	"貫き穿つ死翔の槍": "贯穿死翔之枪",
	"破魔の紅薔薇、必滅の黄薔薇": "破魔的红蔷薇、必灭的黄蔷薇",
	"虹霓剣": "虹霓剑",
	"誰かの為の物語": "献给某人的故事",
	"解体聖母": "解体圣母",
	"我が麗しき父への叛逆": "对吾华丽父王的叛逆",
	"人類神話・雷電降臨": "人类神话·雷电降临",
	"最果てにて輝ける槍": "闪耀于终焉之枪",
	"元素使いの魔剣": "元素使的魔剑",
	"絢爛なりし灰燼世界": "绚烂的灰烬世界",
	"密やかなる罪の遊戯": "隐秘的罪之游戏",
	"磔刑の雷樹": "磔刑之雷树",
	"破壊神の手翳": "破坏神之手影",
	"日輪よ、死に随え": "日轮啊，顺从死亡",
	"無銘勝利剣": "无铭胜利剑",
	"無敗の紫靫草": "无败紫靫草",
	"死がふたりを分断つまで": "直至死亡拆散两人",
	"源流闘争": "源流斗争",
	"星馳せる終幕の薔薇": "星辰驰骋的终幕蔷薇",
	"無垢識・空の境界": "无垢识·空之境界",
	"唯識・直死の魔眼": "唯识·直死之魔眼",
	"双腕・零次集束": "双腕·零次集束",
	"この世ならざる幻馬": "非世间所存之幻马",
	"王の財宝": "王之财宝",
	"虎よ、煌々と燃え盛れ": "虎啊，煌煌燎燃",
	"我はすべて毒あるもの、害あるものを絶つ": "我将根绝一切毒物，一切害物",
	"噛み砕く死牙の獣": "死牙之兽的噬碎",
	"愛しき私の鉄戦車": "我心爱的钢铁战车",
	"金星神・火炎天主": "金星神·火炎天主",
	"羅刹を穿つ不滅": "穿透罗刹之不灭",
	"神槍无二打": "神枪无二打",
	"Ｗ・Ｆ・Ｄ": "W·F·D",
	"大地を創りし者": "大地之创造者",
	"壊音の霹靂": "坏音霹雳",
	"吼え立てよ、我が憤怒": "咆哮吧，吾之愤怒",
	"偽り写し記す万象": "万象之伪誊抄",
	"王の軍勢": "王之军势",
	"時のある間に薔薇を摘め": "花开堪折直须折",
	"妄想幻像": "妄想幻象",
	"白き聖杯よ、謳え": "白之圣杯啊，咏唱吧",
	"千紫万紅・神便鬼毒": "千紫万红·神便鬼毒",
	"五行山・釈迦如来掌": "五行山·释迦如来掌",
	"牛王招雷・天網恢々": "牛王招雷·天网恢恢",
	"夜狼死九・黄金疾走": "夜狼死九·黄金疾走",
	"羅生門大怨起": "罗生门大怨起",
	"不滅の混沌旅団": "不灭的混沌旅团",
	"光輝の大複合神殿": "光辉之大复合神殿",
	"冥鏡宝典": "冥镜宝典",
	"縛鎖全断・過重湖光": "缚锁全断·过重湖光",
	"痛哭の幻奏": "痛哭幻奏",
	"転輪する勝利の剣": "轮转胜利之剑",
	"妄想毒身": "妄想毒身",
	"八幡祈願・大妖射貫": "八幡祈愿·大妖射贯",
	"剣を摂れ、銀色の腕": "紧握其剑，银之臂",
	//--------
	"万能の人": "万能之人",
	"常夏日光・日除傘寵愛一神": "常夏日光·日除伞宠爱一神",
	"陽光煌めく勝利の剣": "阳光璀璨胜利之剑",
	"愛すべき輝きは永遠に": "愿所爱光辉永存",
	"逆巻く波濤を制する王様気分！": "制压汹涌波涛的王者心情！",
	"蹴り穿つ死翔の槍": "蹴穿死翔之枪",
	"道成寺鐘百八式火竜薙": "道成寺钟百八式火龙薙",
	"荒れ狂う哀しき竜よ": "狂暴的悲哀之龙啊",
	"多元重奏飽和砲撃": "多元重奏饱和炮击",
	"鶴翼三連": "鹤翼三连",
	"鮮血竜巻魔嬢": "鮮血龙卷魔娘",
	"暁の時を終える蛇よ、此処に": "终结黎明之蛇啊，降临此处",
	"串刺城塞": "穿刺城塞",
	"優雅に歌え、かの聖誕を": "优雅的讴歌吧，为这圣诞！",
	"山脈震撼す明星の薪": "震撼山脉明星之薪",
	"人よ、神を繋ぎとめよう": "人子啊，紧系神明吧",
	"炎、神をも灼き尽くせ": "炎蛇，连神一同烧灼殆尽",
	"王の号砲": "王之号炮",
	"女神の抱擁": "女神的拥抱",
	"強制封印・万魔神殿": "强制封印·万魔神殿",
	"逃れ得ぬ死の鉤爪": "无法逃脱死之钩爪",
	"永久に閉ざされた理想郷": "已被永久闭关的理想乡",
	"六道五輪・倶利伽羅天象": "六道五轮·俱利伽罗天象",
	"死告天使": "死告天使",
	"黒竜双剋勝利剣": "黑龙双克胜利剑",
	"終局的犯罪": "终局的犯罪",
	"遥かなる者への斬罪": "无远弗届的斩罪",
	"十面埋伏・無影の如く": "十面埋伏·形如无影",
	"不滅の誠": "不灭之诚",
	"絢爛魔界日輪城": "绚烂魔界日轮城",
	"弁財天五弦琵琶": "辩才天五弦琵琶",
	"死が二人を別離つとも": "直至死亡将两人别离",
	"天鬼雨": "天鬼雨",
	"Ｃ.Ｃ.Ｃ.": "C.C.C.",
	"快楽天・胎蔵曼荼羅": "快乐天·胎藏曼荼罗",
	"千夜一夜物語": "一千零一夜",
	"告密羅織経": "告密罗织经",
	"我が瞋恚にて果てよ英雄": "英雄，在我的愤恨中终结吧",
	"新天地探索航": "新天地探索航",
	"初歩的なことだ、友よ": "这是基本的推测，我的朋友",
	"驚くべき偉業": "惊人的伟业",
	"誉れ歌う黄金劇場": "歌颂的黄金剧场",
	"串刺の雷刃": "串刺的雷刃",
	"穢れを漱げ、青く美しきナイル": "荡涤污秽、美丽的蓝色尼罗河",
	"第六天魔王波旬～夏盛～": "第六天魔王波旬~夏盛~",
	"不撓燃えたつ勝利の剣": "不屈燃烧胜利之剑",
	"金星神・白銀円環": "金星神·白银圆环",
	"釈提桓因・金剛杵": "释提桓因·金刚杵",
	"神峰天廻る明星の虹": "神峰天回明星之虹",
};

var skillsDict = {
	"今は脆き雪花の壁": "现为脆弱的雪花之壁",
	"誉れ堅き雪花の壁": "荣光坚毅的雪花之壁",
	"時に煙る白亜の壁": "时为朦胧的白垩之壁",
	"奮い断つ決意の盾": "决意奋起之盾",
	"カリスマ": "领袖气质",
	"直感": "直觉",
	"魔力放出": "魔力放出",
	"花の旅路": "花之旅途",
	"頭痛持ち": "头痛宿疾",
	"皇帝特権": "皇帝特权",
	"三度、落陽を迎えても": "纵使三度迎来落日",
	"仕切り直し": "重整旗鼓",
	"竜殺し": "屠龙",
	"軍略": "军略",
	"扇動": "煽动",
	"天性の肉体": "天性的肉体",
	"星の紋章": "星之纹章",
	"プレラーティの激励": "普雷拉蒂的激励",
	"心眼（真）": "心眼(真)",
	"自己暗示": "自我暗示",
	"麗しの風貌": "秀丽风情",
	"鷹の瞳": "鹰之瞳",
	//
	"魔術" : "魔术",
	"投影魔術": "投影魔术",
	//
	"コレクター":"收藏家",
	"バビロンの蔵": "巴比伦的宝藏",
	//
	"破壊工作": "破坏工作",
	"皐月の王": "五月之王",
	//
	"アルカディア越え": "越过阿卡迪亚",
	"追い込みの美学": "逐追的美学",
	"カリュドーン狩り": "狩猎卡莱敦的野猪",
	//
	"吸血": "吸血",
	"魅惑の美声": "魅惑的美声",
	"女神のきまぐれ": "女神的反复无常",
	"頑健": "健硕",
	"千里眼": "千里眼",
	"弓矢作成": "箭矢制作",
	"戦闘続行": "战斗续行",
	"矢避けの加護": "避矢之加护",
	"嗜虐のカリスマ": "嗜虐的领导力",
	//
	"拷問技術": "拷问技术",
	"怨霊調伏": "怨灵调伏",
	"仁王立ち": "仁王立姿",
	"白紙の勧進帳": "白纸的劝进帐",
	"ルーン魔術": "卢恩魔术",
	"獣殺し": "弑兽",
	"殿の矜持": "殿军的矜持",
	"戦士の雄叫び": "战士的雄叫",
	"七つの丘": "七座丘陵",
	//
	"魔眼": "魔眼",
	"怪力": "怪力",
	"鮮血神殿": "鲜血神殿",
	"守護騎士": "守护骑士",
	"殉教者の魂": "殉教者之魂",
	"嵐の航海者": "暴风雨的航海家",
	"海賊の誉れ": "海盗的尊严",
	"紳士的な愛": "绅士般的爱",
	//
	"女神への誓い": "向女神起誓",
	"アンドラスタの加護": "安德拉斯特的加护",
	"天狗の兵法": "天狗的兵法",
	"燕の早業": "燕之迅捷",
	"紅顔の美少年": "红颜美少年",
	"覇王の兆し": "霸王的征兆",
	"麗しの姫君": "秀丽贵夫人",
	"神の恩寵": "神之恩宠",
	"信仰の加護": "信仰的加护",
	"奇蹟": "奇迹",
	"聖女の誓い": "圣女的誓约",
	//
	"高速神言": "高速神言",
	"金羊の皮": "金羊毛",
	"キルケーの教え": "喀耳刻的教诲",
	"精神汚染": "精神污染",
	"芸術審美": "艺术审美",
	"深淵の邪視": "深渊的邪视",
	//
	"人間観察": "人类观察",
	"高速詠唱": "高速咏唱",
	"無辜の怪物": "无辜的怪物",
	"エンチャント": "魔力附加",
	"自己保存": "自我保存",
	"国王一座": "国王剧团",
	"呪術": "咒术",
	"道化の大笑": "小丑的大笑",
	"音楽神の加護（偽）": "音乐之神的护佑(伪)",
	"小さな夜の曲": "小小的夜之曲",
	//
	"鑑識眼": "鉴识眼",
	"軍師の忠言": "军师的忠言",
	"軍師の指揮": "军师的指挥",
	"原初のルーン": "原初之卢恩",
	"心眼（偽）": "心眼(伪)",
	"透化": "透化",
	"宗和の心得": "宗和的心得",
	"投擲（短刀）": "投掷(短刀)",
	"自己改造": "自我改造",
	"風除けの加護": "避风的加护",
	"抑制": "抑制",
	"プランニング": "计划",
	"傍若無人": "旁若无人",
	"処刑人": "刽子手",
	"医術": "医术",
	"人体研究": "人体研究",
	"諜報": "谍报",
	"フェロモン": "费洛蒙",
	"ダブルクロス": "双重封印",
	//
	"鮮血の湯浴み": "沐浴鲜血",
	//
	"勇猛": "勇猛",
	"無窮の武練": "无穷的武练",
	"精霊の加護": "精灵的加护",
	"魔力逆流": "魔力逆流",
	//
	"反骨の相": "反骨之相",
	"乱世の梟雄": "乱世枭雄",
	"被虐の誉れ": "受虐的荣誉",
	"不屈の意志": "不屈的意志",
	"剣の凱旋": "剑之凯旋",
	//
	"動物会話": "动物会话",
	"鮮血の伝承": "鲜血的传承",
	//
	"天性の魔": "天性之魔",
	"深淵のラブリュス": "深渊双刃斧",
	"加虐体質": "嗜虐体质",
	"在りし日の栄光": "昔日的荣光",
	//
	"変化": "变化",
	"ストーキング": "跟踪",
	"焔色の接吻": "焰色接吻",
	"支援呪術": "支援咒术",
	"血啜の獣斧": "嗜血的兽斧",
	//
	"啓示": "启示",
	"真名看破": "真名识破",
	"神明裁決": "神明裁决",
	"女神の寵愛": "女神的宠爱",
	"移り気への楔": "移情别恋之楔",
	"魔力放出（かぼちゃ）": "魔力放出(南瓜)",
	"出演続行": "演出续行",
	"狐の嫁入り": "狐之婚嫁",
	"神の加護": "神的护佑",
	"治癒の竪琴": "治愈的竖琴",
	"友誼の証明": "友谊的证明",
	"星の開拓者": "星之开拓者",
	"航海": "航海",
	"射撃": "射击",
	"コンビネーション": "配合",
	"耐毒": "耐毒",
	"うたかたの恋": "泡影之恋",
	"縮地": "缩地",
	"病弱": "病弱",
	"戦略": "战略",
	"天下布武": "天下布武",
	"魔王": "魔王",
	"魔境の智慧": "魔境的智慧",
	"神殺し": "弑神",
	"愛の黒子": "爱之黑痣",
	"騎士の武略": "骑士的武略",
	"聖者の贈り物": "圣者的礼物",
	"一方その頃": "与此同时",
	"霧夜の殺人": "雾夜的凶杀",
	"情報抹消": "情报抹消",
	"外科手術": "外科手术",
	"不貞隠しの兜": "隐藏不贞的头盔",
	"ガルバニズム": "流电学",
	"天賦の叡智": "天赋的睿智",
	"最果ての加護": "止镜的加护",
	"エレメンタル": "元素精灵",
	"賢者の石": "贤者之石",
	"一意専心": "专心一意",
	"機関の鎧": "机械铠甲",
	"オーバーロード": "过载",
	"恐慌の声": "恐慌之声",
	"虚ろなる生者の嘆き": "虚无生者的叹息",
	"千里眼(射手)": "千里眼(射手)",
	//
	"授かりの英雄": "天授的英雄",
	"魔力放出（炎）": "魔力放出(炎)",
	"貧者の見識": "贫者的见识",
	"無冠の武芸": "无冠的武艺",
	"支援砲撃": "支援炮击",
	"セイバーの星": "Saber之星",
	//
	"銀河流星剣": "银河流星剑",
	"千里眼(麗)": "千里眼(丽)",
	//
	"女難の美": "祸水红颜",
	"英雄の介添": "英雄的介添",
	//
	"ベルセルク": "狂暴",
	//
	"天に星を": "予天以星",
	"地に花を": "予地以花",
	"人に愛を": "予人以爱",
	"直死の魔眼": "直死之魔眼",
	"雲耀": "云耀",
	"陰陽魚": "阴阳鱼",
	"洗礼詠唱": "洗礼咏唱",
	"神明裁決(偽）": "神明裁决(伪)",
	//
	"触れれば転倒！": "一碰就倒！",
	"理性蒸発": "理性蒸发",
	"鋼鉄の決意": "钢铁的决意",
	"窮地の智慧": "困境的智慧",
	"鋼の看護": "钢之看护",
	"人体理解": "人体理解",
	"天使の叫び": "天使的吼叫",
	"精霊の狂騒": "精灵的狂躁",
	"黄金律（体）": "黄金律(体)",
	"女王の躾": "女王的教育",
	//
	"魔力同調": "魔力同调",
	"マハトマ": "伟大之魂",
	"未知への探求": "探求未知",
	"武の祝福": "武之祝福",
	"離別の呪い": "离别的诅咒",
	"中国武術（六合大槍）": "中国武术(六合大枪)",
	"圏境": "圈境",
	"絶招": "绝招",
	"大量生産": "大量生产",
	"概念改良": "概念改良",
	"血塗れの悪魔": "血染的恶魔",
	"シャーマニズム": "萨满教",
	"守護の獣": "守护兽",
	"クイックドロウ": "快速拔枪",
	"竜の魔女": "龙之魔女",
	"うたかたの夢": "泡影之梦",
	"右歯噛咬": "右齿啮咬",
	"左歯噛咬": "左齿啮咬",
	"死滅願望": "死灭愿望",
	"雷の征服者": "雷之征服者",
	"聖杯の寵愛": "圣杯的宠爱",
	"スケープゴート": "替罪羊",
	"蔵知の司書": "藏知之司书",
	"専科百般": "精通百科",
	"戦闘撤退": "战斗撤退",
	"献身の覚悟": "献身的觉悟",
	"自然の嬰児": "自然的婴儿",
	"魔術医療": "魔术医疗",
	"果実の酒気": "果实的酒气",
	"鬼種の魔": "鬼种之魔",
	"高速読経": "高速诵经",
	"妖惹の紅顔": "诱妖红颜",
	"三蔵の教え": "三藏的教诲",
	"魔力放出（雷）": "魔力放出(雷)",
	"神秘殺し": "神秘杀手",
	"千里疾走": "千里疾走",
	"忍術": "忍术",
	"風声鶴唳": "风声鹤唳",
	"太陽神の加護": "太阳神的加护",
	"エジプト魔術": "埃及魔术",
	"天空神の寵愛": "天空神的宠爱",
	"湖の騎士": "湖上骑士",
	"騎士は徒手にて死せず": "骑士不徒手而亡",
	"祝福されぬ生誕": "不被祝福的诞生",
	"騎士王への諫言": "致骑士王的谏言",
	"聖者の数字": "圣者的数字",
	"ベルシラックの帯": "柏希雷克腰带",
	"変化（潜入特化）": "变化(潜入特化)",
	"静寂の舞踏": "静寂舞步",
	"龍神の加護": "龙神的加护",
	//
	"無尽俵": "无尽俵",
	//
	"沈着冷静": "沉着冷静",
	"守護の誓約": "守护的誓约",
	//---------------
	"ビーチフラワー": "海滨之花",
	"真夏の呪術": "真夏的咒术",
	"女神変生": "女神变生",
	"サマー・スプラッシュ！": "夏日溅射！",
	"海の家の加護": "海之家的加护",
	"向日葵のきらめき": "向日葵的闪耀",
	"麗しの姫君（海）": "美丽的公主(海)",
	"トレジャーハント（海）": "寻宝(海)",
	"セルリアンライド": "蔚蓝色骑乘",
	"ロデオフリップ": "竞技空翻",
	"終わらぬ夏": "无尽的夏日",
	"ビーチクライシス": "海滨危机",
	"原初のルーン（海）": "原初的符文(海)",
	"真夏のあやまち": "真夏的过错",
	"情熱の炎夏": "情热的炎夏",
	"水浴転身": "水浴转身",
	"恋の追跡者": "恋之追迹者",
	"水辺の聖女": "水边的圣女",
	"天性の肉体（海）": "天性的肉体(海)",
	"ヤコブの手足": "雅格的手足",
	"愉快型魔術礼装": "愉快型魔術礼装",
	"あやしい薬": "奇怪的药",
	"キス魔": "亲吻魔",
	"勇者大原則": "勇者大原则",
	"魔力放出（勇気）": "魔力放出(勇气)",
	"真紅の勇者伝説": "绯红的勇者传说",
	"黄金律（富＆体）": "黄金律(富＆体)",
	"女神の加護": "女神的加护",
	"自己変革": "自我变革",
	"美の顕現": "美的显现",
	"輝ける大王冠": "光辉大王冠",
	"魔力放出（宝石）": "魔力放出(宝石)",
	"変容": "变容",
	"気配感知": "气息感知",
	"完全なる形": "完全的形态",
	"善神の智慧": "善神的智慧",
	"自由なる闘争": "自由的斗争",
	"王の帰還": "王的回归",
	"魔杖の支配者": "魔杖的支配者",
	"彼方への想い": "彼方的追想",
	"変転の魔": "变转之魔",
	"ジャガー・パンチ": "美洲豹·拳",
	"ジャガー・キック": "美洲豹·踢",
	"ジャガー・アイ": "美洲豹·眼",
	"夢幻のカリスマ": "梦幻的领导力",
	"幻術": "幻术",
	"英雄作成": "英雄作成",
	"第五勢": "第五势",
	"天眼": "天眼",
	"無空": "无空",
	"晩鐘": "晚钟",
	"∞黒餡子": "∞黑豆沙",
	"刹那無影剣": "刹那无影剑",
	"王の見えざる手": "不可见的王之手",
	"魔弾の射手": "魔弹射手",
	"蜘蛛糸の果て": "蜘蛛丝的终点",
	"邪智のカリスマ": "邪智的领导力",
	"防弾加工": "防弹加工",
	"嗤う鉄心": "嗤笑的铁心",
	"堕天の魔": "堕天之魔",
	"死を纏う者": "身缠死亡之人",
	"中国拳法": "中国拳法",
	"天巧星": "天巧星",
	"巨獣狩り": "巨兽狩猎",
	"戦場の鬼": "战场之鬼",
	"局中法度": "局中法度",
	"黄金律(凶)": "黄金律(凶)",
	"無辜の怪物(焔)": "无辜的怪物(焰)",
	"日輪の寵姫": "日轮的宠姬",
	"クライム・バレエ": "Crime Ballet",
	"メルトウイルス": "Melt Virus",
	"ブレスト・バレー": "Breast Valley",
	"被虐体質": "被虐体质",
	"トラッシュ＆クラッシュ": "Trash & Crash",
	"神通力": "神通力",
	"才知の祝福": "才智的祝福",
	"十の王冠": "十之王冠",
	"黄金の杯": "黄金之杯",
	"千里眼（獣）": "千里眼(兽)",
	"五停心観": "五停心观",
	"語り手": "旁白者",
	"生存の閨": "生存之闺",
	"対英雄": "对英雄",
	"女帝のカリスマ": "女帝的领导力",
	"黄金律（美）": "黄金率(美)",
	"軍神咆哮": "军神咆哮",
	"コンキスタドール": "征服者",
	"天賦の見識": "天赋的见识",
	"仮説推論": "假说推论",
	"バリツ": "巴顿术",
	"愉快な仲間たち": "愉快的伙伴们",
	"豆スープの湖": "豆汤之湖",
	"ポップコーンの吹雪": "爆米花吹雪",
	"暴走特権": "暴走特权",
	"七つの冠": "七之王冠",
	"死なずのマグス": "不死的马格斯",
	"サマー・ガルバニズム": "夏日电流",
	"虚ろなる酷暑への嘆き": "空虚酷暑的叹息",
	"ほどほどロード": "适当负荷",
	"白き御衣": "白色御衣",
	"ビーチパニック": "沙滩慌乱",
	"熱砂の王道": "热砂的王道",
	"うつけ殺法": "傻瓜杀法",
	"敦盛ビート": "敦盛节拍",
	"渚の第六天魔王": "沙滩的第六天魔王",
	"サマー・スイーパー！": "夏日清扫机！",
	"コーチング": "指导",
	"リローデッド": "重新装弹",
	"サマー・バケーション！": "夏日假期！",
	"ニャーフ！": "ＮＹＡＲＦ！",
	"大佐の夏休み": "大佐的暑假",
	"影の風紀委員長": "影之风纪委员长",
	"錬鉄手車": "炼铁独轮",
	"サマー・カタストロフ": "炎夏灾难！",
	"輝ける水の衣": "光辉水之衣",
	"アクセルターン": "加速回合",
	"サマー・ブレイカー！": "夏日破坏者！",
};

var passiveSkillsDict = {
	"対魔力": "对魔力",
	"騎乗": "骑乘",
	"神性": "神性",
	"狂化": "狂化",
	"単独行動": "单独行动",
	"女神の神核": "女神的神核",
	"陣地作成": "阵地建造",
	"道具作成": "道具作成",
	"気配遮断": "气息遮断",
	"道具作成(偽)": "道具作成（伪)",
	"コスモリアクター": "宇宙反应器",
	"単独顕現": "单独显现",
	"根源接続": "根源接续",
	"復讐者": "复仇者",
	"忘却補正": "忘却补正",
	"自己回復(魔力)": "自我回复（魔力)",
	//---------
	"サーフィン": "冲浪",
	"無限の魔力供給": "无限的魔力供給",
	"ダブルクラス": "双重职阶",
	"混血": "混血",
	"境界にて": "已臻境界",
	"オルトリアクター": "自动反应堆",
	"無頼漢": "无赖汉",
	"獣の権能": "兽之权能",
	"ロゴスイーター": "理性吞噬者",
	"ネガ・セイヴァー": "反·救世主",
	"道具作成(奇)": "道具作成(奇)",
};
