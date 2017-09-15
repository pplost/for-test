sortByElmentNo(master.mstSvt);

var lists = [];
for (var x in master.mstSvt) {
	if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo > 0) {
		var inf = {
			id : master.mstSvt[x].collectionNo,
			name : findSvtNameZh(master.mstSvt[x].id),
			passiveSkills : [],
			skills : [],
			noblePhantasm : []
		};
		for (var y in master.mstSvtTreasureDevice) {
			if (master.mstSvtTreasureDevice[y].svtId == master.mstSvt[x].id && 100 != master.mstSvtTreasureDevice[y].treasureDeviceId) {
				var npLists = [];
				for (var z in master.mstTreasureDevice) {
					if (master.mstTreasureDevice[z].id == master.mstSvtTreasureDevice[y].treasureDeviceId) {

						var npName = master.mstTreasureDevice[z].name;
						if (npName == "？？？") {
							break;
						}
						var npHits = master.mstSvtTreasureDevice[y].damage.length;
						var npColor = master.mstSvtTreasureDevice[y].cardId;
						if (npColor == "1") {
							npColor = "Arts";
						} else if (npColor == "2") {
							npColor = "Buster";
						} else if (npColor == "3") {
							npColor = "Quick";
						} else {
							npColor == "unknown";
						}

						var l = [];
						for (var i in tdDetail) {
							if (master.mstTreasureDevice[z].id == tdDetail[i][0]) {
								l = tdDetail[i].slice(0);
								break;
							}
						}
						l[1] = l[1].replace(/ ＋ |　＋　/g, "＋");
						l[1] = l[1].replace("[Lv.]", "");

						//hits修正
						if (l[1].search(/攻擊[^力]|攻撃[^力]/) == -1) {
							npHits = 0;
						}
						len = l[1].split(/＆|＋/).length;
						var o = [];
						for (var i = 0; i < len; i++) {
							var t = [];
							t.push(l[1].split(/＆|＋/)[i]);
							t.push(l[i + 2]);
							o.push(t);
						}

						var npInf = {
							name : npName,
							hits : npHits,
							color : npColor,
							desc : o
						};
						inf.noblePhantasm.push(npInf);
					}
				}
			}
		}
		for (var y in master.mstSvtSkill) {
			if (master.mstSvtSkill[y].svtId == master.mstSvt[x].id) {
				var skillChargeTurn = "";
				var skillName = "";
				for (var z in master.mstSkill) {
					if (master.mstSvtSkill[y].skillId == master.mstSkill[z].id) {
						skillName = master.mstSkill[z].name;
						break;
					}
				}
				for (var i in master.mstSkillLv) {
					if (master.mstSvtSkill[y].skillId == master.mstSkillLv[i].skillId && 1 == master.mstSkillLv[i].lv) {
						skillChargeTurn = master.mstSkillLv[i].chargeTurn;
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
				l[1] = l[1].replace("[Lv.]", "");

				len = l[1].split(/＆|＋/).length;
				var o = [];
				for (var i = 0; i < len; i++) {
					var t = [];
					t.push(l[1].split(/＆|＋/)[i]);
					t.push(l[i + 2]);
					o.push(t);
				}
				var skillInf = {
					name : skillName,
					chargeTurn : skillChargeTurn,
					desc : o
				};
				inf.skills.push(skillInf);
			}
		}
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
				l[1] = l[1].replace("[Lv.]", "");

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

		lists.push(inf);
	}
}
console.log(lists);
