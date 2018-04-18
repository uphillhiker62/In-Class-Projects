
// setTimeout(function(){
//     console.log("it ran");
// }, 300;

var myDate = new Date();
var myTime = myDate.toLocaleTimeString();
document.getElementById("currentTime").innerHTML = myTime;


var timer = setInterval("tick()", 1000);

function tick(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("currentTime").innerHTML = t;
}

function stopTime() {
    clearInterval(timer);
}