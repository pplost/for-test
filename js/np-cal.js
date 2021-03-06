var servants = new Array();
		//读取数据
		$(function() {
			var data = readJson("data/data.json", "fgoArchiveMainDataVer", "fgoArchiveMainData");
			var seq = 0;
			var exceptList = [];
			$.each(data, function(i, info) {
				var row = {
					seq: seq,
					id: info["id"],
					name: servantNamesDict[info["svtId"]],
					nickName: servantnickNamesDict[info["svtId"]] + ' ' + servantNamesDict[info["svtId"]],
					class: classNamesDict[info["class"]],
					busterCards: info["card"]["Buster"]["quantity"],
					busterHits: info["card"]["Buster"]["hits"],
					artsCards: info["card"]["Arts"]["quantity"],
					artsHits: info["card"]["Arts"]["hits"],
					quickCards: info["card"]["Quick"]["quantity"],
					quickHits: info["card"]["Quick"]["hits"],
					exHits: info["card"]["EX"]["hits"],
					npCard: info["noblePhantasm"][0]["color"],
					npHits: info["noblePhantasm"][0]["hits"],
					busterNP: info["card"]["Buster"]["np"][0],
					artsNP: info["card"]["Arts"]["np"][0],
					quickNP: info["card"]["Quick"]["np"][0],
					exNP: info["card"]["EX"]["np"][0],
					npNP: info["noblePhantasm"][0]["np"][0],
					npEff: 0,
					quickEff: 0,
					artsEff: 0,
				};
				//遍历被动
				$.each(info["passiveSkills"], function(i1, inf1) {
					$.each(inf1["desc"], function(i2, inf2) {
						if (inf2[0].match("uick.*?提升")) {
							row["quickEff"] += parseFloat(inf2[1].split("%")[0]);
						}
						if (inf2[0].match("rts.*?提升")) {
							row["artsEff"] += parseFloat(inf2[1].split("%")[0]);
						}
					});
				});
				//海德移到后面（打NP真的有意义吗
				if (info["id"] == 0) {
					exceptList.push(row);
				}
				//海德移到后面
				else if (info["id"] == 81) {
					servants.push(row);
					seq++;
					exceptList[0]["seq"] = seq;
					servants.push(exceptList[0]);
					seq++;
				}
				//例外:大帝
				else if (info["id"] == 108) {
					var newRow = JSON.parse(JSON.stringify(row));
					row["name"] += "(宝具本前)";
					servants.push(row);
					seq++;
					newRow["name"] += "(宝具本后)";
					newRow["seq"] = seq;
					newRow["busterNP"] = info["card"]["Buster"]["np"][1];
					newRow["artsNP"] = info["card"]["Arts"]["np"][1];
					newRow["quickNP"] = info["card"]["Quick"]["np"][1];
					newRow["exNP"] = info["card"]["EX"]["np"][1];
					newRow["npNP"] = info["noblePhantasm"][0]["np"][1];
					servants.push(newRow);
					seq++;
				} else {
					servants.push(row);
					seq++;
				}
			});
			for (var i in servants) {
				var lst = '<option value="' + servants[i].seq + '">' + '【' + servants[i]["class"] + "】 " + servants[i].name + '</option>';
				$("#servants").append(lst);
			}
			$("#servants").val(0);
			updateStatus(0);
		});
		//选择下拉框事件
		$("#servants").change(function() {
			var seq = $("#servants").val();
			updateStatus(seq);
		});
		//重置下拉框
		function resetList() {
			$("#servants").empty();
			for (var i in servants) {
				var lst = '<option value="' + servants[i].seq + '">' + '【' + servants[i]["class"] + "】 " + servants[i].name + '</option>';
				$("#servants").append(lst);
			}
			$("#servants").val(0);
			updateStatus(1);
		}
		//更新表格数据
		function updateStatus(seq) {
			$("#buster_hits").val(servants[seq].busterHits);
			$("#arts_hits").val(servants[seq].artsHits);
			$("#quick_hits").val(servants[seq].quickHits);
			$("#ex_hits").val(servants[seq].exHits);
			$("#buster_np").val(servants[seq].busterNP);
			$("#arts_np").val(servants[seq].artsNP);
			$("#quick_np").val(servants[seq].quickNP);
			$("#ex_np").val(servants[seq].exNP);
			$("#ride").val(servants[seq].quickEff);
			$("#craft_build").val(servants[seq].artsEff);
			$("#np_np").val(servants[seq].npNP);
			$("#np_hits").val(servants[seq].npHits);
			$("#cards").empty();
			
			//更新配卡
			var card = '<img src="resources/others/'+servants[seq].npCard+'.png" style="width:81px">';
			$("#cards").append(card);
			for (var i = 0; i < servants[seq].busterCards; i++) {
				var card = '<img src="resources/others/Buster.png" style="width:50px">';
				$("#cards").append(card);
			}
			for (var i = 0; i < servants[seq].artsCards; i++) {
				var card = '<img src="resources/others/Arts.png" style="width:50px">';
				$("#cards").append(card);
			}
			for (var i = 0; i < servants[seq].quickCards; i++) {
				var card = '<img src="resources/others/Quick.png" style="width:50px">';
				$("#cards").append(card);
			}
			$("#link_to_wiki").empty();
			var links = '<p><a href="http://fgowiki.com/guide/petdetail/' + servants[seq].id + '" target="_blank">点此前往wiki</a></p>';
			$("#link_to_wiki").append(links);
		}
		//查询功能
		$("#search_str").on('input propertychange', function() {
			var str = $("#search_str").val();
			var flag = true;
			var sid = 1;
			var lst = '';
			for (var i in servants) {
				if (servants[i].nickName.match(str)) {
					if (flag) {
						flag = false;
						sid = i;
					}
					lst += '<option value="' + servants[i].seq + '">' + '【' + servants[i]["class"] + "】 " + servants[i].name + '</option>';
				}
			}
			if (!flag) {
				$("#servants").empty();
				$("#servants").append(lst);
				$("#servants").val(sid);
				updateStatus(sid);
			} else {
				resetList();
			}
		});
		//overkill选择框事件
		$("#first_ok").click(function() {
			if ($(this).prop("checked")) {
				$("#first_ok_hits").attr("disabled",false);
				$("#second_ok").attr("checked", true);
				$("#third_ok").attr("checked", true);
				$("#ex_ok").attr("checked", true);
			} else {
				$("#first_ok_hits").attr("disabled",true);
			}
		});
		$("#second_ok").click(function() {
			if ($(this).prop("checked")) {
				$("#second_ok_hits").attr("disabled",false);
				$("#third_ok").attr("checked", true);
				$("#ex_ok").attr("checked", true);
			} else {
				$("#second_ok_hits").attr("disabled",true);
				$("#first_ok").attr("checked", false);
			}
		});
		$("#third_ok").click(function() {
			if ($(this).prop("checked")) {
				$("#third_ok_hits").attr("disabled",false);
				$("#ex_ok").attr("checked", true);
			} else {
				$("#third_ok_hits").attr("disabled",true);
				$("#first_ok").attr("checked", false);
				$("#second_ok").attr("checked", false);
			}
		});
		$("#ex_ok").click(function() {
			if (!($(this).prop("checked"))) {
				$("#ex_ok_hits").attr("disabled",false);
				$("#first_ok").attr("checked", false);
				$("#second_ok").attr("checked", false);
				$("#third_ok").attr("checked", false);
			} else {
				$("#ex_ok_hits").attr("disabled",true);
			}
		});
		//转化为浮点数
		function toFloat(str) {
			var result = 0;
			result = parseFloat(str);
			if (!result) {
				result = 0;
			}
			return result;
		}
		//计算
		function calNP() {
			var firstNP = singleCardNP($("#first_card"), 1, $("#servants").val());
			var secondNP = singleCardNP($("#second_card"), 2, $("#servants").val());
			var thirdNP = singleCardNP($("#third_card"), 3, $("#servants").val());
			var exNP = singleCardNP($("#ex_card"), 4, $("#servants").val());
			var totalNP = firstNP + secondNP + thirdNP + exNP;
			var result = "<p>首卡：" + Math.round(firstNP * 100) / 100 + "<br/>"
			result += "次卡：" + Math.round(secondNP * 100) / 100 + "<br/>"
			result += "尾卡：" + Math.round(thirdNP * 100) / 100 + "<br/>"
			result += "EX：" + Math.round(exNP * 100) / 100 + "<br/>"
			if ((toFloat($("#first_card").val()) > 2.01 || $("#first_card").val() == "-2") && toFloat($("#second_card").val()) > 2.01 && toFloat($("#third_card").val()) > 2.01) {
				totalNP += 20;
				result += "蓝chain：20<br/>"
			}
			result += "合计：" + Math.round(totalNP * 100) / 100 + "</p>"
			$("#cal_result").empty();
			$("#cal_result").append(result);
		}

		function calNPList() {
			$("#np_list").empty();
			var npList = new Array();
			$("#np_list").append('<tr><td>排名</td><td>ID</td><td>从者</td><td>首卡NP</td><td>次卡NP</td><td>尾卡NP</td><td>EX卡NP</td><td>蓝chain</td><td>合计</td></tr>');
			for (var i in servants) {
				var artsChain = 0;
				var firstNP = singleCardNP($("#first_card"), 1, i);
				var secondNP = singleCardNP($("#second_card"), 2, i);
				var thirdNP = singleCardNP($("#third_card"), 3, i);
				var exNP = 0;
				//满足EX卡条件
				if ($("#first_card").val() != "-1" && $("#first_card").val() != "-2" && $("#second_card").val() != "-1" && $("#third_card").val() != "-1") {
					exNP = singleCardNP($("#ex_card"), 4, i);
				}
				var totalNP = 0;
				var isCertified = true;
				//配卡不符合的不显示
				var b = 0,
					q = 0,
					a = 0;
				if ($("#first_card").val() == "0") {
					b++;
				} else if ($("#first_card").val() == "1") {
					q++;
				} else if ($("#first_card").val() == "3") {
					a++;
				}
				if ($("#second_card").val() == "0") {
					b++;
				} else if ($("#second_card").val() == "1.5") {
					q++;
				} else if ($("#second_card").val() == "4.5") {
					a++;
				}
				if ($("#third_card").val() == "0") {
					b++;
				} else if ($("#third_card").val() == "2") {
					q++;
				} else if ($("#third_card").val() == "6") {
					a++;
				}
				if (servants[i].busterCards < b || servants[i].artsCards < a || servants[i].quickCards < q) {
					isCertified = false
				}


				//蓝chain
				if ($("#first_card").val() == "-2") {
					a++
				};
				if (a >= 3) {
					artsChain = 20;
				}
				//如果之后有宝具卡，白打，只在列表计算里算这条
				//同理蓝宝具不计蓝chain，很真实
				if ($("#second_card").val() == "-11") {
					firstNP = 0;
				}
				if ($("#third_card").val() == "-11") {
					firstNP = 0;
					secondNP = 0;
				}
				//保留2位小数
				var totalNP = Math.round((firstNP + secondNP + thirdNP + exNP + artsChain) * 100) / 100;
				firstNP = Math.round(firstNP * 100) / 100;
				secondNP = Math.round(secondNP * 100) / 100;
				thirdNP = Math.round(thirdNP * 100) / 100;
				exNP = Math.round(exNP * 100) / 100;
				var row = {
					id: servants[i].id,
					name: '【' + servants[i]["class"] + '】' + servants[i].name,
					firstNP: firstNP,
					secondNP: secondNP,
					thirdNP: thirdNP,
					exNP: exNP,
					totalNP: totalNP,
					busterCards: servants[i].busterCards,
					artsCards: servants[i].artsCards,
					quickCards: servants[i].quickCards,
					artsChain: artsChain,
					isCertified: isCertified
				};
				npList.push(row);
				npList.sort(function(x, y) {
					return y["totalNP"] - x["totalNP"];
				});
			}
			var rankSeq = 1;
			for (var i in npList) {

				var tds = "<td>" + rankSeq + '</td>';
				tds += "<td>" + npList[i].id + '</td>';
				tds += "<td>" + npList[i].name + '</td>';
				tds += "<td>" + npList[i].firstNP + '</td>';
				tds += "<td>" + npList[i].secondNP + '</td>';
				tds += "<td>" + npList[i].thirdNP + '</td>';
				tds += "<td>" + npList[i].exNP + '</td>';
				tds += "<td>" + npList[i].artsChain + '</td>';
				tds += "<td>" + npList[i].totalNP + '</td>';
				var trs = "";
				if (!npList[i].isCertified) {
					//trs=$('<tr class="err"></tr>');
					continue;
				} else {
					trs = $('<tr></tr>');
				}
				trs.append(tds);
				$("#np_list").append(trs);
				rankSeq++;
			}
		}

		function singleCardNP(card, cardSeq, servantSeq) {
			//无卡或为染色卡
			if (card.val() == "-1" || card.val() == "-2") {
				return 0;
			}
			//红卡宝具
			if (card.val() == "-11" && servants[servantSeq].npCard == "Buster") {
				return 0;
			}
			var np = 0;
			var firstArtsBonus = 0;
			var critBonus = 1;
			var okBonus = 1;
			var mag = toFloat(card.val());
			var npEff = 0;
			var hits = 0;
			var artsUp = (toFloat(servants[servantSeq].artsEff) + toFloat($("#arts_up").val())) / 100;
			var quickUp = (toFloat(servants[servantSeq].quickEff) + toFloat($("#quick_up").val())) / 100;
			var npUp = (toFloat($("#np_up").val())) / 100;
			var classBonus = toFloat($("#enemy_class").val());
			var kindBonus = toFloat($("#enemy_kind").val());

			if (cardSeq == 1) {
				if ($("#first_crit").prop("checked")) {
					critBonus = 2;
				}
				if ($("#first_ok").prop("checked")) {
					okBonus = 1.5;
				}
			} else if (cardSeq == 2) {
				if ($("#second_crit").prop("checked")) {
					critBonus = 2;
				}
				if ($("#second_ok").prop("checked")) {
					okBonus = 1.5;
				}
			} else if (cardSeq == 3) {
				if ($("#third_crit").prop("checked")) {
					critBonus = 2;
				}
				if ($("#third_ok").prop("checked")) {
					okBonus = 1.5;
				}
			} else {
				if ($("#ex_ok").prop("checked")) {
					critBonus = 1.5;
				}
			}
			//首卡染色
			if ($("#first_card").val() == "3" || $("#first_card").val() == "-2" || ($("#first_card").val() == "-11" && servants[servantSeq].npCard == "Arts")) {
				firstArtsBonus = 1;
			}
			//防浮点数误差，多算0.01
			//宝具
			if (mag < -10.99) {
				npEff = toFloat(servants[servantSeq].npNP);
				hits = parseInt(servants[servantSeq].npHits);
				firstArtsBonus = 0;
				critBonus = 1;
				if (servants[servantSeq].npCard == "Arts") {
					mag = 3
					np = npEff * (firstArtsBonus + mag * (1 + artsUp)) * (1 + npUp) * critBonus * okBonus * hits * classBonus * kindBonus;
				} else if (servants[servantSeq].npCard == "Quick") {
					mag = 1
					np = npEff * (firstArtsBonus + mag * (1 + quickUp)) * (1 + npUp) * critBonus * okBonus * hits * classBonus * kindBonus;
				}
			}
			//红卡
			else if (mag < 0.01) {
				npEff = toFloat(servants[servantSeq].busterNP);
				hits = parseInt(servants[servantSeq].busterHits);
				np = npEff * (firstArtsBonus + mag * (1 + 0)) * (1 + npUp) * critBonus * okBonus * hits * classBonus * kindBonus;
			} else if (mag < 2.01) {
				//Q卡
				if (cardSeq <= 3) {
					npEff = toFloat(servants[servantSeq].quickNP);
					hits = parseInt(servants[servantSeq].quickHits);
					np = npEff * (firstArtsBonus + mag * (1 + quickUp)) * (1 + npUp) * critBonus * okBonus * hits * classBonus * kindBonus;
				}
				//EX卡
				else {
					npEff = toFloat(servants[servantSeq].exNP);
					hits = parseInt(servants[servantSeq].exHits);
					np = npEff * (firstArtsBonus + mag * (1 + 0)) * (1 + npUp) * critBonus * okBonus * hits * classBonus * kindBonus;
				}
			}
			//蓝卡
			else {
				npEff = toFloat(servants[servantSeq].artsNP);
				hits = parseInt(servants[servantSeq].artsHits);
				np = npEff * (firstArtsBonus + mag * (1 + artsUp)) * (1 + npUp) * critBonus * okBonus * hits * classBonus * kindBonus;
			}
			return np;
		}

		//基本NP獲得率(Atk) × [首卡加成 + 卡片倍率 x (1 ± 卡片性能Buff)] × (1 + NP獲得量Buff)× Critical補正 × Overkill補正 × 攻擊Hit數 × 伺服器控制參數(假設為1)

		//首卡加成
		//若第一張卡是Arts卡的話為1，其餘為0，寶具卡不受此加成

		//Critical補正
		//有Critical的話為2倍

		//Overkill補正
		//有Overkill的話為1.5倍

		//卡片倍率
		//Extra卡為1，寶具卡視為各顏色第1張

		//倍率	Arts    Buster      Quick
		//第1張	3	    0           1
		//第2張	4.5	    0	        1.5
		//第3張	6	    0	        2
