

// create an array of food items for the monster to eat
var foodarr = ["chicken", "ham", "pizza", "ice cream", "apple", "cherry pie"];
var currentfood = "";

// start the game with a function
function rungame(){
    getfood();
}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    setfood(foodarr[randomfood]);
}

// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
    //if the food is good
    if(currentfood == "chicken" || currentfood == "ham" || currentfood == "pizza"){
        document.getElementById("commentbox").innerHTML = "Yum!";
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Nasty!";
    }
    getfood();

}

function trashit(){
    //if the food is good
    if(currentfood == "ice cream" || currentfood == "apple" || currentfood == "cherry pie"){
        document.getElementById("commentbox").innerHTML = "Not there!";

    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "That's not where that goes!";
    }
    getfood();

}

