$(document).ready(function() {
    if (window.location.search == "") {
        window.location.href="items.html";
    } else {
        createItemReqInf();
    }
});
