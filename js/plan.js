function testLS(){
    if(window.localStorage){
        alert("你的浏览器可以支持本地缓存。");
    }else{
        alert("你的浏览器不支持本地缓存！");
    }
}
