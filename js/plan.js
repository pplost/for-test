var svtData = {};
var saveData = {
    lvlInf: {},
};

$(document).ready(function() {
    var data = readJson("data/data.json", "fgoArchiveMainDataVer", "fgoArchiveMainData");
    $.each(data, function(i, info) {
        if (info.id > 0) {
            var servant = {
                id: info.id,
                name: servantNamesDict[info.svtId],
                "class": classNamesDict[info["class"]],
                queryStr: servantNamesDict[info.svtId] + " " + servantnickNamesDict[info.svtId] + " " + info.id,
                priority: -1,
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
            svtData[info.id] = servant;
            var lst = '<option value="' + info.id + '">' + '【' + servant["class"] + "】 " + servant.name + '</option>';
            $("#servants").append(lst);
        }
    });
    if (window.localStorage && window.localStorage.hasOwnProperty("fgoArchivePlanData")) {
        saveData = JSON.parse(window.localStorage.getItem("fgoArchivePlanData"));
        $.each(saveData.lvlInf, function(i, servant) {
            createSvtList(i);
            svtData[i].priority=servant.servants;
        });
        calItemCost();
    }
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
    var id = $("#servants").val();
    $("#input_data").find("tr").eq(0).find("td").eq(0).html("<a href='servant.html?" + id + "'><img src='" + getPicUrl("servant", id) + "' /></a>");
    for (var i = 0; i < 3; i++) {
        $("#input_data").find("tr").eq(i + 1).find("td").eq(1).html("<img src='" + getPicUrl("skill", svtData[id].skills[i].ico) + "' />");
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
            lst += '<option value="' + svtData[i].id + '">' + '【' + svtData[i]["class"] + "】 " + svtData[i].name + '</option>';
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
    var id = $("#servants").val();
    svtData[id].priority = $("#lvl_priority").val();
    var row = {
        id: id,
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
    saveData.lvlInf[id] = row;

    var itemCost = calItemCost();
    createSvtList(id);
    if (window.localStorage) {
        window.localStorage.setItem("fgoArchivePlanData", JSON.stringify(saveData));
    }
}

function calItemCost() {
    var itemCost = {};
    $.each(saveData.lvlInf, function(i, servant) {
        //if(servant.priority>=lvl_priority){
        calSingleCost(itemCost, servant.current_limit, servant.target_limit, svtData[servant.id].limitItems, svtData[servant.id].limitQPs);
        calSingleCost(itemCost, servant.current_skill1, servant.target_skill1, svtData[servant.id].skillItems, svtData[servant.id].skillQPs);
        calSingleCost(itemCost, servant.current_skill2, servant.target_skill2, svtData[servant.id].skillItems, svtData[servant.id].skillQPs);
        calSingleCost(itemCost, servant.current_skill3, servant.target_skill3, svtData[servant.id].skillItems, svtData[servant.id].skillQPs);
        //}
    });
    createCostList(itemCost);
    return itemCost;
}

function calSingleCost(itemCost, cLvl, tLvl, items, qps) {
    for (var i = cLvl; i < tLvl; i++) {
        for (var j in items[i]) {
            resetCost(itemCost, items[i][j]);
            resetCost(itemCost, ["QP", qps[i]]);
        }
    }
}

function resetCost(itemCost, items) {
    if (itemCost.hasOwnProperty(items[0])) {
        itemCost[items[0]] += items[1];
    } else {
        itemCost[items[0]] = items[1];
    }
}

function create_code() {
    $("#code").html(JSON.stringify(saveData));
    $("#code_area").css("display", "block");
}

var q;
function load_code() {
    try {
        q=JSON.parse($("#in_code").val());
    } catch (e) {
        alert("数据不合法");
        return;
    }
    console.log("???");
    saveData=JSON.parse($("#in_code").val());
    if(window.localStorage){
        window.localStorage.setItem("fgoArchivePlanData", JSON.stringify(saveData));
    }
     $("lvl_inf").remove();
     calItemCost();
     for(var i in saveData){
         createSvtList(i);
     }
    $('#in_code_area').css('display','none');
}

function createCostList(itemCost) {
    $("#item_require").empty();
    var e_ul = $("<ul></ul>");
    for (var i in itemCost) {
        var e_li = $("<li></li>");
        var pic_div = $("<div></div>");
        var num_div = $("<div></div>");
        pic_div.attr("class", "bg_pic");
        num_div.attr("class", "float_num");
        if (i == "QP") {
            pic_div.append("<a><img src='" + getPicUrl("others", i) + "'></a>");
            num_div.append("<a>" + itemCost[i] + "</a>");
        } else {
            pic_div.append("<a href='item.html?" + i + "'><img src='" + getPicUrl("item", i) + "'></a>");
            num_div.append("<a href='item.html?" + i + "'>" + itemCost[i] + "</a>");
        }
        pic_div.append(num_div);
        e_li.append(pic_div);
        e_ul.append(e_li);
    }
    $("#item_require").append(e_ul);
}

function createSvtList(id) {
    var e_tr = $("<tr></tr>");
    e_tr.addClass("lvl_inf");
    e_tr.append("<td>" + id + "</td>");
    e_tr.append("<td><a href='servant.html?" + id + "'><img src='" + getPicUrl("servant", id) + "' style='width:auto;height:60px'/></a></td>");
    e_tr.append("<td>" + saveData.lvlInf[id].current_limit + "</td>");
    e_tr.append("<td>" + saveData.lvlInf[id].target_limit + "</td>");
    e_tr.append("<td>" + (parseInt(saveData.lvlInf[id].current_skill1) + 1) + "</td>");
    e_tr.append("<td>" + (parseInt(saveData.lvlInf[id].target_skill1) + 1) + "</td>");
    e_tr.append("<td>" + (parseInt(saveData.lvlInf[id].current_skill2) + 1) + "</td>");
    e_tr.append("<td>" + (parseInt(saveData.lvlInf[id].target_skill2) + 1) + "</td>");
    e_tr.append("<td>" + (parseInt(saveData.lvlInf[id].current_skill3) + 1) + "</td>");
    e_tr.append("<td>" + (parseInt(saveData.lvlInf[id].target_skill3) + 1) + "</td>");
    e_tr.append("<td>" + (parseInt(saveData.lvlInf[id].priority) + 1) + "</td>");
    e_tr.append("<td><input type='button' value='删除' onclick='deleteList(this," + id + ")' ></td>");
    $("#svt_list").append(e_tr);
}


function deleteList(obj,id) {
    obj.parentNode.parentNode.remove();
    delete saveData.lvlInf[id];
    window.localStorage.setItem("fgoArchivePlanData", JSON.stringify(saveData));
    svtData[id].priority=-1;
    calItemCost();
}
