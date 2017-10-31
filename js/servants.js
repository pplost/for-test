var data;
$(document).ready(function() {
    data = readJson("data/data.json", "fgoArchiveMainDataVer", "fgoArchiveMainData");
    if (window.location.search == "") {
        createServantList();
    } else {
        createServantInf();
    }
});

function createServantList() {
    var servantList = [];
    for (var i in data) {
        if (data[i].id > 0) {
            servantList.push(data[i].id);
        }
    }
    var u = $("<ul></ul>");
    u.attr("class", "display");
    for (var i in servantList) {
        var liStr = '<li><a href="servant.html?' + servantList[i] + '"><img src="http://file.fgowiki.fgowiki.com/fgo/head/' + numLenFormat(servantList[i], 3) + '.jpg" /></a></li>';
        u.append(liStr);
    }
    $("#main").append(u);
}

function createServantInf() {
    var servantId = window.location.search.match(/\d+/g)[0];
    var id = 0;
    $.each(data, function(i, info) {
        if (info.id == servantId) {
            id = info.id;
            createPage(id);
            setTableVal(info);
            return false;
        }
    });
    if (id == 0) {
        window.location.href = "servant.html";
    }
}

function createPage(id) {
    document.title = servantNamesDict[info.svtId];
    $("#main").append('<div style="margin-top:30px"><img src="http://file.fgowiki.fgowiki.com/fgo/head/' + numLenFormat(id, 3) + '.jpg"</div>');
    var tb = $("<table></table>");

    tb.append("<tr><th=rowspan='4'>灵基再临</th><td>第1阶段</td><td></td></tr>");
    for (var i = 2; i <= 4; i++) {
        tb.append("<tr><td>第" + i + "阶段</td><td></td></tr>");
    }
    tb.append("<tr><th=rowspan='9'>灵基再临</th><td>Lv1 → Lv2</td><td></td></tr>");
    for (var i = 2; i <= 9; i++) {
        tb.append("<tr><td>Lv" + i + " → Lv" + (i + 1) + "</td><td></td></tr>");
    }
    $("#main").append(tb);
}

function setTableVal(data){
    //$("table tr").eq(m).find("td").eq(n).html(something);  // 将表格第m+1行第n+1列的内容设置为s
    $.each(data.limitItems, function(i, info) {
        $.each(info, function(j, item) {

        });
    });




























}
