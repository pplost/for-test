$(document).ready(function() {
    createItemList();
});

function createItemList() {
    var itemList = [];
    for (var i in itemsDict) {
        if (i >= 6000 && i <= 8000) {
            itemList.push(i);
        }
    }
    itemList.sort();

    for (var i in itemList) {
        var e_div=$("<div></div>");
        e_div.addClass("col-xs-2 col-sm-2 col-md-2");
        var liStr = '<li><a href="item.html?' + itemList[i] + '"><img src="' + getPicUrl("item", itemList[i]) + '" /></a></li>';
        e_div.append(liStr);
        $("ul.display.item div.row").append(e_div);
    }
}
