$(document).ready(function(){
	var pages = {
		'/index' : '首页',
		'/index/fcraft.html' : '羁绊礼装表',
		'/index/fcraft.html?no_pic' : '羁绊礼装表(无图版)',
		'/index/np_cal.html' : 'NP计算器',
		'/index/exp_cal.html' : '狗粮计算器'
	};
	var page = window.location.pathname + window.location.search;
	
	for(var i in pages){
		if(page == i){
			continue;
		}
		$(#"title_link").append('<a href="' + i + '">' + pages[i] + '</a>');
	}
});
