window.onload = function(){
    var rand = Math.floor(Math.random()*5);
    var url = "url('files/";
    url = url.concat(rand,".jpg')");
    console.log(url);
    document.body.style.backgroundImage = url;
}
