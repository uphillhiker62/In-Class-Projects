
//////////guess a number/////////////////

let userInput = document.querySelector("p");
let genNum = Math.floor(Math.random() * 10) +1 ;

function guessNum(){
    if (userInput === genNum){
        alert("Well done!");
    }
    else {
        alert("Wrong!");
    }
}


////////////multiply or divide////////////

function calculate() {
    let operatorChoice = document.getElementById("chooseOperator");
    let chooseOperator = operatorChoice.options[operatorChoice.selectedIndex].value;

    if (chooseOperator === "multiply")
        multiply();
    else if (chooseOperator === "divide")
        divide();
}

function multiply() {
    let a = document.getElementById("numOne").value;
    let b = document.getElementById("numTwo").value;
    let finalAnswer = a * b;

    document.getElementById("answer").innerHTML = finalAnswer;
}

function divide() {
    let a = document.getElementById("numOne").value;
    let b = document.getElementById("numTwo").value;
    let finalAnswer = a / b;

    document.getElementById("answer").innerHTML = finalAnswer;
}


////////////random future date////////////

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }
//
// console.log(randomDate(new Date(2012, 0, 1), new Date()));

