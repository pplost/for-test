var svtData = [];

function testLS() {
    if (window.localStorage) {
        alert("你的浏览器可以支持本地缓存。");
    } else {
        alert("你的浏览器不支持本地缓存！");
    }
}

$(document).ready(function() {
    data = readJson("data/data.json", "fgoArchiveMainDataVer", "fgoArchiveMainData");
    var seq = 0;
    $.each(data, function(i, info) {
        if (info.id > 0) {
            var servant = {
                id: info.id,
                "class": classNamesDict[info["class"]],
                queryStr: servantNamesDict[info.svtId] + servantnickNamesDict[info.svtId],
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
            var lst = '<option value="' + seq + '">' + '【' + classNamesDict[info["class"]] + "】 " + servantNamesDict[info.svtId] + '</option>';
            $("#servants").append(lst);
            seq++;
        }
    });
    updateStatus();
});

function updateStatus() {
    var seq = $("#servants").val();
    $("#input_data").find("tr").eq(0).find("td").eq(0).html("<a href='servant.html?" + svtData[seq].id + "'><img src='" + getPicUrl("servant", svtData[seq].id) + "' /></a>");
    for (var i = 0; i < 3; i++) {
        $("#input_data").find("tr").eq(i + 1).find("td").eq(1).html("<img src='" + getPicUrl("skill", svtData[seq].skills[i].ico) + "' />");
    }
}

$("#servants").change(function() {
    updateStatus();
});
