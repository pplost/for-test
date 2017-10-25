var itemList = [];

$(document).ready(function () {
	if (window.location.search == "") {
		for (let i in itemsDict) {
			if (i >= 6500 && i <= 8000) {
				itemList.push(i);
			}
		}
		itemList.sort();
		let u = $('<ul></ul>');
		u.attr("class", "display");
		for (let i in itemList) {
			let liStr = '<li style="float:left;"><a href="require.html?' + itemList[i] + '"><img src="resources/items/' + itemList[i] + '.png" onerror="this.src=\'resources/items/0.png\'" /></a></li>';
			u.append(liStr);
		}
		$("#main").append(u);
	} else {
		let itemId = window.location.search.match(/\d+/g);
		$.getJSON("data/data.json", function (data) {
			$.each(data, function (i, info) {
				console.log(i);
			});
		});
	}
});
