$(document).ready(function() {
  if (window.location.search == "") {
    createItemList();
  } else {
    createItemReqInf();
  }
});

function createItemList() {
  var itemList = [];
  for (var i in itemsDict) {
    if (i >= 6500 && i <= 8000) {
      itemList.push(i);
    }
  }
  itemList.sort();
  var u = $("<ul></ul>");
  u.attr("class", "display");
  for (var i in itemList) {
    var liStr = '<li><a href="require.html?' + itemList[i] + '"><img src="resources/items/' + itemList[i] + '.png" onerror="this.src=\'resources/items/0.png\'" /></a></li>';
    u.append(liStr);
  }
  $("#main").append(u);
}

function createItemReqInf() {
  var limitNum = 0;
  var skillNum = 0;
  var totalList = [];
  var itemId = window.location.search.match(/\d+/g);
  if(!itemsDict[itemId]){
    window.location.href="require.html";
    return;
  }
  document.title=itemsDict[itemId];
  $.getJSON("https://pplost.github.io/for-test/data/data.json", function(data) {
    $.each(data, function(i, info) {
      if (info["id"] > 0) {
        var singleLmtNum = 0;
        var singleSklNum = 0;
        var single = [];
        $.each(info["limitItems"], function(j, items) {
          $.each(items, function(k, item) {
            if (item[0] == itemId) {
              limitNum += item[2];
              singleLmtNum += item[2];
            }
          });
        });
        $.each(info["SkillItems"], function(j, items) {
          $.each(items, function(k, item) {
            if (item[0] == itemId) {
              skillNum += (item[2]*3);
              singleSklNum += item[2];
            }
          });
        });
        if (singleLmtNum > 0 || singleSklNum > 0) {
          single.push(info["id"], singleLmtNum, singleSklNum*3);
          totalList.push(single);
        }
      }
    });
    createItemReqList(totalList, limitNum, skillNum);
  });
}

function createItemReqList(totalList, limitNum, skillNum) {
  var t = $("<table></table>");
  t.attr("class", "no_side_border");
  if (limitNum > 0) {
    var tr = $("<tr></tr>");
    tr.append("<td style='width:100px'>突破总共需要素材：" + limitNum + "</td>");
    var td = $("<td></td>");
    var ul = $("<ul></ul>");
    for (var i in totalList) {
      if (totalList[i][1] > 0) {
        var li = $("<li></li>");
        var pic_div = $("<div></div>");
        var num_div = $("<div></div>");
        pic_div.attr("class", "bg_pic");
        num_div.attr("class", "float_num");
        pic_div.append("<a href='http://fgowiki.com/guide/petdetail/"+ totalList[i][0]+"'><img src='http://file.fgowiki.fgowiki.com/fgo/head/" + numLenFormat(totalList[i][0], 3) + ".jpg'></a>");
        num_div.append(totalList[i][1]);
        pic_div.append(num_div);
        li.append(pic_div);
        ul.append(li);
      }
    }
    td.append(ul);
    tr.append(td);
    t.append(tr);
  }
  if (skillNum > 0) {
		var tr = $("<tr></tr>");
		tr.append("<td style='width:100px'>技能总共需要素材：" + skillNum + "</td>");
		var td = $("<td></td>");
		var ul = $("<ul></ul>");
		for (var i in totalList) {
			if (totalList[i][2] > 0) {
				var li = $("<li></li>");
				var pic_div = $("<div></div>");
				var num_div = $("<div></div>");
				pic_div.attr("class", "bg_pic");
				num_div.attr("class", "float_num");
				 pic_div.append("<a href='http://fgowiki.com/guide/petdetail/"+ numLenFormat(totalList[i][0], 3)+"'><img src='http://file.fgowiki.fgowiki.com/fgo/head/" + numLenFormat(totalList[i][0], 3) + ".jpg'></a>");
				num_div.append(totalList[i][2]);
				pic_div.append(num_div);
				li.append(pic_div);
				ul.append(li);
			}
		}
		td.append(ul);
		tr.append(td);
		t.append(tr);
  }
  $("#main").append(t);
}