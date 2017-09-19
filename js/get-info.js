function removeItems() {
	document.getElementById("button_area").remove();
}

function friendship() {
	sortByElmentNo(master.mstSvt);
	var str = "[<br/>";
	for (var x in master.mstSvt) {
		if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo > 1) {
			var tid = findSvtFs(master.mstSvt[x].id);
			var n = [];
			var m = [];
			var id = 0;
			var name = "";
			for (var a in master.mstFriendship) {
				if (master.mstFriendship[a].id == tid && master.mstFriendship[a].rank < 10) {
					n[master.mstFriendship[a].rank] = master.mstFriendship[a].friendship;
				}
			}
			for (var a in bondCE) {
				if (bondCE[a][1] == master.mstSvt[x].id) {
					for (var b in master.mstSvt) {
						if (master.mstSvt[b].id == bondCE[a][0]) {
							id = master.mstSvt[b].collectionNo;
							name = master.mstSvt[b].name;
							break;
						}
					}
					break;
				}
			}

			m[0] = n[4] / 10000;
			for (var i = 5; i < 10; i++) {
				m[i - 4] = (n[i] - n[i - 1]) / 10000;
			}
			m[6] = n[9] / 10000;
			str += "&nbsp;&nbsp;&nbsp;&nbsp;{<br/>";
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "' + id + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "' + name + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"servantID": "' + master.mstSvt[x].collectionNo + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"servant": "' + findSvtNameZh(master.mstSvt[x].id) + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"friendship": {<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"0-5": "' + m[0] + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"5-6": "' + m[1] + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"6-7": "' + m[2] + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"7-8": "' + m[3] + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"8-9": "' + m[4] + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"9-10": "' + m[5] + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"total": "' + m[6] + '"<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"desc": "unknown"<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;},<br/>';
		}
	}
	str = str.substring(0, str.length - 6);
	str += "<br/>]";
	removeItems();
	document.getElementById("info").innerHTML = str;
}
function friendship2() {
	sortByElmentNo(master.mstSvt);
	var tbStr = $("<table></table>");
	var trStr = $("<tr></tr>");
	var thStr = $("<td>id</td><td>名字</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>");
	trStr.append(thStr);
	tbStr.append(trStr);
	for (var x in master.mstSvt) {
		if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo > 1) {
			var q = findSvtFs(master.mstSvt[x].id);
			var n = [];
			var m = [];
			for (var a in master.mstFriendship) {
				if (master.mstFriendship[a].id == q && 10 > master.mstFriendship[a].rank) {
					n[master.mstFriendship[a].rank] = master.mstFriendship[a].friendship;
				}
			}
			trStr = $("<tr></tr>");
			var tdStr = '<td>' + master.mstSvt[x].collectionNo + '</td>';
			tdStr += '<td>' + findSvtNameZh(master.mstSvt[x].id) + '</td>';
			for (var i = 4; i < 10; i++) {
				tdStr += '<td>' + n[i] / 10000 + '</td>';
			}
			trStr.append(tdStr);
			tbStr.append(trStr);
		}
	}
	$("#info").empty();
	$("#info").append(tbStr);
	removeItems();
}

function nphit() {
	sortByElmentNo(master.mstSvt);
	var str = "[<br/>";
	for (var x in master.mstSvt) {
		if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo > 0) {
			var npCard = "";
			var i = 0,
			j = 0;
			var desc = "";
			var hits = 0;
			for (var y in master.mstSvtTreasureDevice) {
				if (master.mstSvtTreasureDevice[y].svtId == master.mstSvt[x].id && master.mstSvtTreasureDevice[y].treasureDeviceId != 100 && master.mstSvtTreasureDevice[y].num < 10) {
					npCard = cardColorsDict[master.mstSvtTreasureDevice[y].cardId];
					i = master.mstSvt[x].id;
					j = master.mstSvtTreasureDevice[y].treasureDeviceId;
					hits = master.mstSvtTreasureDevice[y].damage.length;
					break;
				}
			}
			for (var z in tdDetail) {
				if (tdDetail[z][0] == j) {
					desc = tdDetail[z][1];
					if (desc.search(/攻擊[^力]|攻撃[^力]/) == -1) {
						hits = 0;
					}
					break;
				}
			}
			str += "&nbsp;&nbsp;&nbsp;&nbsp;{<br/>";
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "' + master.mstSvt[x].collectionNo + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "' + findSvtNameZh(master.mstSvt[x].id) + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"npHits": "' + hits + '",<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"npCard": "' + npCard + '"<br/>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;},<br/>';
		}
	}
	str = str.substring(0, str.length - 6);
	str += "<br/>]";
	removeItems();
	document.getElementById("info").innerHTML = str;
}

function detail_info() {
	sortByElmentNo(master.mstSvt);
	var s = new Set();
	var lists = [];
	for (var x in master.mstSvt) {
		if ((master.mstSvt[x].type == 1 || master.mstSvt[x].type == 2 || master.mstSvt[x].type == 99) && master.mstSvt[x].collectionNo >= 0) {
			var inf = {
				"id" : master.mstSvt[x].collectionNo,
				"name" : servantNamesDict[master.mstSvt[x].collectionNo],
				"class" : classNamesDict[master.mstSvt[x].classId],
				"rarity" : 0,
				"gender" : genderTypeDict[master.mstSvt[x].genderType],
				"attr" : attrDict[master.mstSvt[x].attri],
				"policy" : "",
				"personality" : "",
				"individuality" : [],
				"atkBase" : 0,
				"hpBase" : 0,
				"atkMax" : 0,
				"hpMax" : 0,
				"starRate" : master.mstSvt[x].starRate / 10,
				"deathRate" : master.mstSvt[x].deathRate / 10,
				"criticalWeight" : 0,
				"passiveSkills" : [],
				"skills" : [],
				"noblePhantasm" : []
			};

			//
			var pos = 0;
			for (var i in master.mstSvtLimit) {
				if (master.mstSvtLimit[i].svtId == master.mstSvt[x].id) {
					pos = i;
					inf["criticalWeight"] = master.mstSvtLimit[i].criticalWeight;
					inf["policy"] = policyDict[master.mstSvtLimit[i].policy];
					inf["personality"] = personalityDict[master.mstSvtLimit[i].personality];
					break;
				}
			}
			for (var i in master.mstSvtLimit) {
				if (master.mstSvtLimit[i].svtId == master.mstSvt[x].id && master.mstSvtLimit[i].limitCount == master.mstSvt[x].limitMax) {
					if (master.mstSvtLimit[pos].hpBase != master.mstSvtLimit[i].hpBase || master.mstSvtLimit[pos].hpMax != master.mstSvtLimit[i].hpMax) {
						inf["hpBase"] = master.mstSvtLimit[i].hpBase;
						inf["hpMax"] = master.mstSvtLimit[i].hpMax;
					} else {
						inf["hpBase"] = master.mstSvtLimit[pos].hpBase;
						inf["hpMax"] = master.mstSvtLimit[pos].hpMax;
					}
					if (master.mstSvtLimit[pos].atkBase != master.mstSvtLimit[i].atkBase || master.mstSvtLimit[pos].atkMax != master.mstSvtLimit[i].atkMax) {
						inf["atkBase"] = master.mstSvtLimit[i].atkBase;
						inf["atkMax"] = master.mstSvtLimit[i].atkMax;
					} else {
						inf["atkBase"] = master.mstSvtLimit[pos].atkBase;
						inf["atkMax"] = master.mstSvtLimit[pos].atkMax;
					}
					inf["rarity"] = master.mstSvtLimit[i].rarity;
					break;
				}
			}
			for (var i in master.mstSvt[x].individuality) {
				if (individualityDict[master.mstSvt[x].individuality[i]]) {
					inf["individuality"].push(individualityDict[master.mstSvt[x].individuality[i]]);
				} else {
					s.add(master.mstSvt[x].individuality[i]);
				}
			}

			//card
			var tdPos = 0;
			for (var i in master.mstSvtTreasureDevice) {
				if (master.mstSvtTreasureDevice[i].svtId == master.mstSvt[x].id && 100 != master.mstSvtTreasureDevice[i].treasureDeviceId) {
					for (var j in master.mstTreasureDeviceLv) {
						if (master.mstTreasureDeviceLv[j].treaureDeviceId == master.mstSvtTreasureDevice[i].treasureDeviceId) {
							tdPos = j;
							break;
						}
					}
					if (tdPos != 0) {
						break;
					}
				}
			}

			//宝具
			for (var y in master.mstSvtTreasureDevice) {
				if (master.mstSvtTreasureDevice[y].svtId == master.mstSvt[x].id && 100 != master.mstSvtTreasureDevice[y].treasureDeviceId) {
					var npLists = [];
					var continueFlag = false;
					for (var z in noblePhantasmsWhiteList) {
						if (noblePhantasmsWhiteList[z] == master.mstSvtTreasureDevice[y].treasureDeviceId) {
							continueFlag = true;
							break;
						}
					}
					if (continueFlag) {
						continue;
					}
					for (var z in master.mstTreasureDevice) {
						if (master.mstTreasureDevice[z].id == master.mstSvtTreasureDevice[y].treasureDeviceId) {

							var npName = master.mstTreasureDevice[z].name;
							if (npName == "？？？") {
								break;
							}
							if (noblePhantasmsDict[npName]) {
								npName = noblePhantasmsDict[npName];
							} else {
								console.log("------------Noble Phantasm------------");
								console.log('collectionNo:', master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'treasureDeviceId:', master.mstSvtTreasureDevice[y].treasureDeviceId, 'npName:', npName);
							}
							var npHits = master.mstSvtTreasureDevice[y].damage.length;
							var npColor = master.mstSvtTreasureDevice[y].cardId;
							npColor = cardColorsDict[npColor];
							if (!npColor) {
								console.log("------------npColor------------");
								console.log('collectionNo:', master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'treasureDeviceId:', master.mstSvtTreasureDevice[y].treasureDeviceId, 'cardId:', master.mstSvtTreasureDevice[y].cardId);
							}
							var l = [];
							for (var i in tdDetail) {
								if (master.mstTreasureDevice[z].id == tdDetail[i][0]) {
									l = tdDetail[i].slice(0);
									break;
								}
							}
							l[1] = l[1].replace(/ ＋ |　＋　/g, "＋");
							l[1] = l[1].replace(/(.*?)〔(.*?)〕(.*?)/g, "$1($2)$3");
							l[1] = l[1].replace(/的話/g, "");
							l[1] = l[1].replace(/\[Lv\.\]/g, "");
							l[1] = l[1].replace(/<br>/g, " ");
							l[1] = l[1].replace(/Critical/g, "暴击");

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
								np : master.mstTreasureDeviceLv[tdPos].tdPoint/100,
								desc : o
							};
							inf.noblePhantasm.push(npInf);
						}
					}
				}
			}
			//技能
			for (var y in master.mstSvtSkill) {
				if (master.mstSvtSkill[y].svtId == master.mstSvt[x].id) {
					var skillChargeTurn = "";
					var skillName = "";
					var skillIcoId = 0;
					for (var z in master.mstSkill) {
						if (master.mstSvtSkill[y].skillId == master.mstSkill[z].id) {
							skillName = master.mstSkill[z].name;
							skillIcoId = master.mstSkill[z].iconId;
							break;
						}
					}
					var ts = skillName.split(' ');
					if (ts.length > 1 && skillsDict[ts[0]]) {
						skillName = skillsDict[ts[0]] + ' ' + ts[1];
					} else if (skillsDict[skillName]) {
						skillName = skillsDict[skillName];
					} else {
						console.log("------------skill------------");
						console.log('collectionNo:', master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'skillId:', master.mstSvtSkill[y].skillId, 'name:', master.mstSkill[z].name);
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
					l[1] = l[1].replace(/(.*?)〔(.*?)〕(.*?)/g, "$1($2)$3");
					l[1] = l[1].replace(/\[Lv\.\]/g, "");
					l[1] = l[1].replace(/<br>/g, " ");
					l[1] = l[1].replace(/Critical/g, "暴击");

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
						icoId : skillIcoId,
						desc : o
					};
					inf.skills.push(skillInf);
				}
			}
			//被动
			if (master.mstSvt[x].classPassive.length != 0) {
				for (var y in master.mstSvt[x].classPassive) {
					var continueFlag = false;
					for (var z in passiveSkillsWhiteList) {
						if (passiveSkillsWhiteList[z] == master.mstSvt[x].classPassive[y]) {
							continueFlag = true;
							break;
						}
					}
					if (continueFlag) {
						continue;
					}
					var pSkillName = "";
					var pSkillIcoId = 0;
					for (var i in master.mstSkill) {
						if (master.mstSvt[x].classPassive[y] == master.mstSkill[i].id) {
							pSkillName = master.mstSkill[i].name;
							pSkillIcoId = master.mstSkill[i].iconId;
							break;
						}
					}

					var ts = pSkillName.split(' ');
					if (ts.length > 1 && passiveSkillsDict[ts[0]]) {

						pSkillName = passiveSkillsDict[ts[0]] + ' ' + ts[1];
					} else if (passiveSkillsDict[pSkillName]) {
						pSkillName = passiveSkillsDict[pSkillName];
					} else {
						console.log("------------Passive Skill------------");
						console.log('collectionNo:', master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'skillId:', master.mstSvt[x].classPassive[y], 'SkillName:', pSkillName);
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
					l[1] = l[1].replace(/Critical/g, "暴击");

					len = l[1].split(/＆|＋/).length;
					var o = [];
					for (var i = 0; i < len; i++) {
						var t = [];
						t.push(l[1].split(/＆|＋/)[i]);
						t.push(l[i + 2]);
						o.push(t);
					}
					var pSkillInf = {
						name : pSkillName,
						icoId : pSkillIcoId,
						desc : o
					};
					inf.passiveSkills.push(pSkillInf);
				}
			}
			lists.push(inf);

			//log
			if (!inf["name"]) {
				console.log("------------name------------");
				console.log("collectionNo:", master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'name:', findSvtNameZh2[master.mstSvt[x].id]);
			}
			if (!inf["class"]) {
				console.log("------------classId------------");
				console.log("collectionNo:", master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'classId:', master.mstSvt[x].classId);
			}
			if (!inf["gender"]) {
				console.log("------------gender------------");
				console.log("collectionNo:", master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'gender:', master.mstSvt[x].genderType);
			}
			if (!inf["attr"]) {
				console.log("------------attri------------");
				console.log("collectionNo:", master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'attri:', master.mstSvt[x].attri);
			}
			if (!inf["policy"]) {
				console.log("------------policy------------");
				console.log("collectionNo:", master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'policy:', master.mstSvtLimit[pos].policy);
			}
			if (!inf["personality"]) {
				console.log("------------personality------------");
				console.log("collectionNo:", master.mstSvt[x].collectionNo, "servantID:", master.mstSvt[x].id, 'attri:', master.mstSvtLimit[pos].personality);
			}
		}
	}
	//console.log(lists);
	if (s.size != 215) {
		console.log('individuality has changed', s.size);
	}
	removeItems();
	document.getElementById("info").innerHTML = (JSON.stringify(lists));
}
