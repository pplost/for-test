var itemList=[];
$(document).ready(function () {
	for(let i in itemsDict){
		if(i.length<=4){
			itemList.push(i);
		}
	}
	itemList.sort();
	for(let i in itemList){
		var liStr='<li style="float:left;"><a href="resources/items/'+itemList[i]+'"><img src="resources/items/'+itemList[i]+'.png" onerror="this.src=\'resources/items/0.png\'" /></a></li>';
		$("#items_list").append(liStr);
		console.log("https://kazemai.github.io/fgo-vz/common/images/icon/items/"+itemList[i]+".png")
	}
});