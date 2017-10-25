$(document).ready(function() {
  if (window.location.search == "") {
    createItemList();
  } else {
    createItemReqInf();
  }
});

function createItemList() {
  let itemList = [];
  for (let i in itemsDict) {
    if (i >= 6500 && i <= 8000) {
      itemList.push(i);
    }
  }
  itemList.sort();
  let u = $("<ul></ul>");
  u.attr("class", "display");
  for (let i in itemList) {
    let liStr = '<li><a href="require.html?' + itemList[i] + '"><img src="resources/items/' + itemList[i] + '.png" onerror="this.src=\'resources/items/0.png\'" /></a></li>';
    u.append(liStr);
  }
  $("#main").append(u);
}

function createItemReqInf() {
  let limitNum = 0;
  let skillNum = 0;
  let totalList = [];
  let itemId = window.location.search.match(/\d+/g);
  if(!itemsDict[itemId]){
    window.location.href="require.html";
    return;
  }
  document.title=itemsDict[itemId];
  $.getJSON("https://pplost.github.io/for-test/data/data.json", function(data) {
    $.each(data, function(i, info) {
      if (info["id"] > 0) {
        let singleLmtNum = 0;
        let singleSklNum = 0;
        let single = [];
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
  let t = $("<table></table>");
  t.attr("class", "no_side_border");
  if (limitNum > 0) {
    let tr = $("<tr></tr>");
    tr.append("<td style='width:100px'>突破总共需要素材：" + limitNum + "</td>");
    let td = $("<td></td>");
    let ul = $("<ul></ul>");
    for (let i in totalList) {
      if (totalList[i][1] > 0) {
        let li = $("<li></li>");
        let pic_div = $("<div></div>");
        let num_div = $("<div></div>");
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
		let tr = $("<tr></tr>");
		tr.append("<td style='width:100px'>技能总共需要素材：" + skillNum + "</td>");
		let td = $("<td></td>");
		let ul = $("<ul></ul>");
		for (let i in totalList) {
			if (totalList[i][2] > 0) {
				let li = $("<li></li>");
				let pic_div = $("<div></div>");
				let num_div = $("<div></div>");
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
