let pineapple = 3;
let dog = "cat";
let login = "username";
console.log(login);

function dothis(){
    console.log();
    let mydiv = document.getElementById("mycontainer");
    document.getElementById("mycontainer").style.color = "#bae777";
    document.getElementById("mycontainer").style.fontSize = "50px";

    for(let i = 0; i < 5; i++) {
        mydiv.innerHTML += "<div>WOW!</div>"
    }
}


