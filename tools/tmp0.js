//bj
sortByElmentNo(master.mstSvt);
for (var x in master.mstSvt) {
	if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo > 0) {
		for (var y in master.mstSvtTreasureDevice) {
			if (master.mstSvtTreasureDevice[y].svtId == master.mstSvt[x].id && 100 != master.mstSvtTreasureDevice[y].treasureDeviceId) {
				
				for (var z in master.mstTreasureDevice) {
					if (master.mstTreasureDevice[z].id == master.mstSvtTreasureDevice[y].treasureDeviceId) {

						var npName = master.mstTreasureDevice[z].name;
						if (npName == "？？？") {
							break;
						}
						if (noblePhantasmsDict[npName]) {
							npName = noblePhantasmsDict[npName];
						}
						var npHits = master.mstSvtTreasureDevice[y].damage.length; //hits
						var npColor = master.mstSvtTreasureDevice[y].cardId;
						npColor = cardColorsDict[npColor];
						
						var l = [];
						for (var i in tdDetail) {
							if (master.mstTreasureDevice[z].id == tdDetail[i][0]) {
								l = tdDetail[i].slice(0);
								break;
							}
						}
						l[1] = l[1].replace(/ ＋ |　＋　/g, "＋");
						l[1] = l[1].replace(/(.*?)〔(.*?)〕(.*?)/g, "$1($2)$3");
						l[1] = l[1].replace(/\[Lv\.\]/g, "");
						l[1] = l[1].replace(/的話/g, "");
						l[1] = l[1].replace(/<br>/g, " ");
						
						if (l[1].search(/攻擊[^力]|攻撃[^力]/) == -1) {
							hits = 0;
						}
						len = l[1].split(/＆|＋/).length;
						console.log(l);
						var o = [];
						for (var i = 0; i < len; i++) {
							var t = [];
							t.push(l[1].split(/＆|＋/)[i]);
							t.push(l[i + 2]);
							o.push(t);
						}
					}
				}
			}
		}
	}
}

//zd
sortByElmentNo(master.mstSvt);
for (var x in master.mstSvt) {
	if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo > 0) {
		var s = [];
		for (var y in master.mstSvtSkill) {
			if (master.mstSvtSkill[y].svtId == master.mstSvt[x].id) {

				for (var z in master.mstSkill) {
					if (master.mstSvtSkill[y].skillId == master.mstSkill[z].id) {
						//console.log(master.mstSkill[z].name, master.mstSkill[z].id);
						break;
					}
				}
				for (var i in master.mstSkillLv) {
					if (master.mstSvtSkill[y].skillId == master.mstSkillLv[i].skillId && 1 == master.mstSkillLv[i].lv) {
						//console.log(master.mstSkillLv[i].chargeTurn);
						break;
					}
				}
				var l = [];
				for (var i in skDetail) {
					if (master.mstSvtSkill[y].skillId == skDetail[i][0]) {
						l = skDetail[i].slice(0);
						break;
					}
				}
				l[1] = l[1].replace(/ ＋ |　＋　/g, "＋");
				l[1] = l[1].replace(/(.*?)〔(.*?)〕(.*?)/g, "$1($2)$3");
				l[1] = l[1].replace(/\[Lv\.\]/g, "");
				l[1] = l[1].replace(/<br>/g, " ");
				
				len = l[1].split(/＆|＋/).length;
				console.log(l[1].split(/＆|＋/)[0]);
				console.log(l);
				var o = [];
				for (var i = 0; i < len; i++) {
					var t = [];
					t.push(l[1].split(/＆|＋/)[i]);
					t.push(l[i + 2]);
					o.push(t);
				}
				s.push(o);
			}
		}
		console.log(s);
	}
}

//beid
sortByElmentNo(master.mstSvt);
for (var x in master.mstSvt) {
	if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo == 150) {
		if (master.mstSvt[x].classPassive.length != 0) {
			var s = [];
			for (var y in master.mstSvt[x].classPassive) {

				for (var i in master.mstSkill) {
					if (master.mstSvt[x].classPassive[y] == master.mstSkill[i].id) {
						console.log(master.mstSkill[i].name);
						break;
					}
				}

				var l = [];
				for (var i in skDetail) {
					if (master.mstSvt[x].classPassive[y] == skDetail[i][0]) {
						l = skDetail[i].slice(0);
						break;
					}
				}

				l[1] = l[1].replace(/ ＋ |　＋　/g, "＋");
				l[1] = l[1].replace(/(.*?)〔(.*?)〕(.*?)/g, "$1($2)$3");
				l[1] = l[1].replace(/\[Lv\.\]/g, "");
				l[1] = l[1].replace(/<br>/g, " ");
				
				len = l[1].split(/＆|＋/).length;
				var o = [];
				for (var i = 0; i < len; i++) {
					var t = [];
					t.push(l[1].split(/＆|＋/)[i]);
					t.push(l[i + 2]);
					o.push(t);
				}
				s.push(o);

			}
			console.log(s);
		}
	}
}
//card
sortByElmentNo(master.mstSvt);
for (var x in master.mstSvt) {
	if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo >0) {
		var c1=0,c2=0,c3=0;
		console.log(master.mstSvt[x].cardIds);
		for (var x in master.mstSvt[x].cardIds){
			if(master.mstSvt[x].cardIds[x] == "1"){
				c1++;
			}
			else if(master.mstSvt[x].cardIds[x] == "2"){
				c2++;
			}
			else if(master.mstSvt[x].cardIds[x] == "3"){
				c3++;
			}
		}
		console.log(c1,c2,c3);
	}
}





//
sortByElmentNo(master.mstSvt);
var list=[];
var l=[];
for (var x in master.mstSvt) {
	if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo > 0) {
		var s = [];
		for (var y in master.mstSvtSkill) {
			if (master.mstSvtSkill[y].svtId == master.mstSvt[x].id) {

				for (var z in master.mstSkill) {
					if (master.mstSvtSkill[y].skillId == master.mstSkill[z].id) {	
						var ts = master.mstSkill[z].name.split(' ');
						if (ts.length > 1 ){
							list.push(ts[0]);
						}
						else{
							list.push(master.mstSkill[z].name);
                        }
						break;
					}
				}
				
			}
		}
	}
}
for (var x of list){
	var flag=true;
	for(var y of l){
		if(x==y){
			flag=false;
			break;
        }
    }
	if(flag){
		l.push(x);
    }
}
console.log(l);
