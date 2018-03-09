

var Menu = function() {

    this.stopMusic = function(){
        bgMusic.pause();
    };
    this.playGame = function(){

    };
    this.addWords = function() {

    };
};

var Reflector = function(obj) {

    var methods = [];
    for(var method in obj){
        if(typeof obj[method] === "function"){
            methods.push(method);
        }
    };
    return methods;
};

var mymenu = new Menu();
var mirror = new Reflector(mymenu);

let bgMusic = new Audio('Goat.mp3');
bgMusic.play();

$(".introbtn").draggable();

$(".introbtn").click(function() {
    $(".intro").hide();
    $(".menupage").show();
    var menuArray = mirror;

    for(var i = 0; i < menuArray.length; i++){
        $(".menupage").append("<a href='javascript: mymenu.'>" + menuArray[i] + "</a>");
    }
});

