var svtData = [];
var saveData = {
    svtLvl: {},
    itemCost: {}
};

$(document).ready(function() {
    data = readJson("data/data.json", "fgoArchiveMainDataVer", "fgoArchiveMainData");
    var seq = 0;
    $.each(data, function(i, info) {
        if (info.id > 0) {
            var servant = {
                seq: seq,
                id: info.id,
                name: servantNamesDict[info.svtId],
                "class": classNamesDict[info["class"]],
                queryStr: servantNamesDict[info.svtId] + " " + servantnickNamesDict[info.svtId] + " " + info.id,
                limitItems: info.limitItems,
                limitQPs: info.limitQPs,
                skillItems: info.skillItems,
                skillQPs: info.skillQPs,
                skills: [{
                        name: "",
                        ico: 0
                    },
                    {
                        name: "",
                        ico: 0
                    },
                    {
                        name: "",
                        ico: 0
                    }
                ],
            };
            $.each(info.skills, function(j, skill) {
                servant.skills[skill.num - 1].name = skill.name;
                servant.skills[skill.num - 1].ico = skill.icoId;
            });
            svtData.push(servant);
            var lst = '<option value="' + seq + '">' + '【' + servant["class"] + "】 " + servant.name + '</option>';
            $("#servants").append(lst);
            seq++;
        }
    });
    updateStatus();
});

function testLS() {
    if (window.localStorage) {
        window.localStorage.setItem("testLS", "test");
        if (window.localStorage.getItem("testLS") == "test") {
            alert("你的浏览器可以支持本地缓存。");
            window.localStorage.removeItem("testLS");
        } else {
            alert("你的浏览器不支持本地缓存！");
        }
    } else {
        alert("你的浏览器不支持本地缓存！");
    }
}

function updateStatus() {
    var seq = $("#servants").val();
    $("#input_data").find("tr").eq(0).find("td").eq(0).html("<a href='servant.html?" + svtData[seq].id + "'><img src='" + getPicUrl("servant", svtData[seq].id) + "' /></a>");
    for (var i = 0; i < 3; i++) {
        $("#input_data").find("tr").eq(i + 1).find("td").eq(1).html("<img src='" + getPicUrl("skill", svtData[seq].skills[i].ico) + "' />");
    }
    $("select.num").val(0);
}

$("#servants").change(function() {
    updateStatus();
});

$("#search_str").on("input propertychange", function() {
    var searchStr = $("#search_str").val();
    var lst = "";
    for (var i in svtData) {
        if (svtData[i].queryStr.match(searchStr)) {
            lst += '<option value="' + svtData[i].seq + '">' + '【' + svtData[i]["class"] + "】 " + svtData[i].name + '</option>';
        }
    }

    $("#servants").html(lst);
    updateStatus();
});

function addLine() {
    if ($("#current_limit").val() > $("#target_limit").val()) {
        alert("当前灵基等级不能大于目标灵基等级！");
        return;
    }
    if ($("#current_skill1").val() > $("#target_skill1").val()) {
        alert("一技能当前等级不能大于目标等级！");
        return;
    }
    if ($("#current_skill2").val() > $("#target_skill2").val()) {
        alert("二技能当前等级不能大于目标等级！");
        return;
    }
    if ($("#current_skill3").val() > $("#target_skill3").val()) {
        alert("三技能当前等级不能大于目标等级！");
        return;
    }
    var seq = $("#servants").val();
    var row = {
        id: svtData[seq].id,
        current_limit: $("#current_limit").val(),
        target_limit: $("#target_limit").val(),
        current_skill1: $("#current_skill1").val(),
        current_skill2: $("#current_skill2").val(),
        current_skill3: $("#current_skill3").val(),
        target_skill1: $("#target_skill1").val(),
        target_skill2: $("#target_skill2").val(),
        target_skill3: $("#target_skill3").val(),
        priority: $("#lvl_priority").val()
    };
    saveData.svtLvl[seq] = row;
    calMaterialNum(svtData[seq].limitItems, svtData[seq].limitQPs, $("#current_limit").val(), $("#target_limit").val(), "+");
    calMaterialNum(svtData[seq].skillItems, svtData[seq].skillQPs, $("#current_skill1").val(), $("#target_skill1").val(), "+");
    calMaterialNum(svtData[seq].skillItems, svtData[seq].skillQPs, $("#current_skill2").val(), $("#target_skill2").val(), "+");
    calMaterialNum(svtData[seq].skillItems, svtData[seq].skillQPs, $("#current_skill3").val(), $("#target_skill3").val(), "+");
}

function calMaterialNum(items, qps, cLvl, tLvl, optSymbol) {
    for (var i = cLvl; i < tLvl; i++) {
        for (var j in items[i]) {
            resetCost(optSymbol, items[i][j]);
            resetCost(optSymbol, ["QP", qps[i]]);
        }
    }
}

function resetCost(optSymbol, items) {
    if (optSymbol == "+") {
        if (saveData.itemCost.hasOwnProperty(items[0])) {
            saveData.itemCost[items[0]] += items[1];
        } else {
            saveData.itemCost[items[0]] = items[1];
        }
    } else if (optSymbol == "-") {
        saveData.itemCost[items[0]] -= items[1];
        if (saveData.itemCost[items[0]] <= 0) {
            delete saveData.itemCost[items[0]];
        }
    }
}

function create_code() {
    $("#code").html(JSON.stringify(saveData));
    $("#code_area").css("display", "block");
}
