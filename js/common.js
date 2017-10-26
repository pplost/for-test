function numLenFormat(num, length) {
  var s = Array(length).join(0) + num;
  return s.slice(-length);
}

function readJson(url) {
  var readData;
  $.ajax({
    url: url,
    type: "get",
    async: false,
    dataType: "json",
    cache: true,
    success: function(data) {
      readData=data;
    },
  });
  return readData;;
}
