function loadtable(){  
	$.getJSON("data/fcraft.json",function(data){
		var line = 1
		alert('hhh')
		$.each(data,function(infoIndex,info){
			var sty=""
			if((line % 2) == 1){
				sty=' class="odd"';
			}
			var clink = 'href="http://fgowiki.com/guide/equipdetail/' + info["id"] + '"';
			var slink = 'href="http://fgowiki.com/guide/petdetail/' + info["serventId"] + '"';
			var tr = $('<tr' + sty + '></tr>');
			var tds = '<td><a ' + clink + ' target="_blank">' + info["id"] + '</a></td>';
			tds += '<td><a ' + clink + ' target="_blank"><img src="http://fgowiki.com/fgo/equip/' + info["id"] + '.jpg" style="width: 60px; height: auto"></a></td>';
			tds += '<td><a ' + clink + ' target="_blank">' + info["name"] + '</a></td>';
			tds += '<td><a ' + slink + ' target="_blank">' + info["servent"] + '</a></td>';
			tds += '<td><a ' + slink + ' target="_blank"><img src="http://file.fgowiki.fgowiki.com/fgo/head/' + (Array(3).join('0') + info["serventId"]).slice(-3) + '.jpg" style="width: 60px; height: auto"></a></td>';
			tds += '<td>' + info["friendship"]["0-5"] + '</td>';
			tds += '<td>' + info["friendship"]["5-6"] + '</td>';
			tds += '<td>' + info["friendship"]["6-7"] + '</td>';
			tds += '<td>' + info["friendship"]["7-8"] + '</td>';
			tds += '<td>' + info["friendship"]["8-9"] + '</td>';
			tds += '<td>' + info["friendship"]["9-10"] + '</td>';
			tds += '<td>' + info["friendship"]["total"] + '</td>';
			tds += '<td style="text-align:left">' + info["desc"] + '</td>';
			tr.append(tds);
			$("#cftable").append(tr);
			line+=1;
		})
	})  
}
