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
                skills: {
                    skill1: {
                        ico: 0,
                    },
                    skill2: {
                        ico: 0,
                    },
                    skill3: {
                        ico: 0,
                    },
                },
            };
            $.each(info.skills, function(j, skill) {
                if (skill.num == 1) {
                    servant.skills.skill1.ico = skill.icoId;
                } else if (skill.num == 2) {
                    servant.skills.skill2.ico = skill.icoId;
                } else if (skill.num == 3) {
                    servantskills.skill3.ico = skill.icoId;
                }
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
    $("#input_data").find("tr").eq(0).find("td").eq(0).html("<a href=servant?'" + svtData[seq].id + "'><img src='" + getPicUrl("servant", svtData[seq].id) + "' /></a>");
}

$("#servants").change(function() {
    updateStatus();
});
