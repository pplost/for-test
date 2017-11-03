$(document).ready(function() {
    var pages = {
        'index.html': '首页',
        'fcraft.html': '羁绊礼装表',
        'fcraft.html?no_pic': '羁绊礼装表(无图版)',
        'np_cal.html': 'NP计算器',
        'exp_cal.html': '狗粮计算器',
        'item.html': '素材查询',
        'drop_chance.html': '效率剧场'
    };
    var page = window.location.pathname + window.location.search;
    page = page.split('/')[2];
    var e_ul = $("<ul></ul>");
    e_ul.attr("class", "nav navbar-nav");
    for (var i in pages) {
        var e_li = $("<li></li>");
        if (page == i) {
            $("#page_name").html(pages[i]);
            e_li.attr("class", "active");
        }
        e_li.append("<a href='" + i + "'>" + pages[i] + "</a>");
        e_ul.append(e_li);
    }
    $("#navbar").append(e_ul);
});
