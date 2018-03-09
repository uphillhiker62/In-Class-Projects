// let value = result(0);

function calculation1() {
    let firstInput = document.getElementById("plus1").value;
    let secondInput = document.getElementById("plus2").value;
    let finalAnswer = Number(firstInput) + Number(secondInput);
    document.getElementById("plusAnswer").innerHTML = finalAnswer;
}

function calculation2() {
    let firstInput = document.getElementById("subtract1").value;
    let secondInput = document.getElementById("subtract2").value;
    let finalAnswer = Number(firstInput) - Number(secondInput);
    document.getElementById("subtractAnswer").innerHTML = finalAnswer;
}

function calculation3() {
    let firstInput = document.getElementById("multiply1").value;
    let secondInput = document.getElementById("multiply2").value;
    let finalAnswer = Number(firstInput) * Number(secondInput);
    document.getElementById("multiplyAnswer").innerHTML = finalAnswer;
}


//writeToDocument
//getInputValue