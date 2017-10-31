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

}
