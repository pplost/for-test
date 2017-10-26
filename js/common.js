function numLenFormat(num, length) {
	var s = Array(length).join(0) + num;
	return s.slice(-length);
}

function readLocalJson(timeProperty,dataProperty,url) {
	var currTimeStamp = Date.parse(new Date()) / 1000;
	if (window.localStorage && window.localStorage.hasOwnProperty(dataProperty)&& window.localStorage.hasOwnProperty(timeProperty)) {
		var lastTimeStamp=window.localStorage.getItem(timeProperty);
		//1星期内直接读本机缓存
		if(currTimeStamp-lastTimeStamp<604800){
			console.log("读取本机缓存");
			return JSON.parse(window.localStorage.getItem(dataProperty));
		}
	}
	$.getJSON(url, function(data) {
		window.localStorage.setItem(timeProperty, currTimeStamp);
		window.localStorage.setItem(dataProperty, JSON.stringify(data));
		console.log("读取json");
		return data;
	});
}
