function numLenFormat(num, length) {
	var s = Array(length).join(0) + num;
	return s.slice(-length);
}

function readLocalJson(url) {
	$.ajax({
            type: "get",
			url:url,
            async: false,
            dataType: "json",
            cache: true,
            success: function (data) {
				console.log(data)
                return data;
            },
        });
}
