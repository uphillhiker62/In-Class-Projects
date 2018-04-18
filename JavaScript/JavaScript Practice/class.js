// let myNumber;
//
// function myFunction (myNumber) {
//
//     if (myNumber%3 === 0 && myNumber !== 0) {
//         console.log("Fizz");
//     }
//     if (myNumber%5 === 0 && myNumber !== 0) {
//         console.log("Buzz");
//     }
//     if (myNumber%5 === 0 && myNumber%3 === 0) {
//         console.log("FizzBuzz");
//     }
//     else {
//         console.log(myNumber);
//     }
// }
// myFunction(25);
// myFunction(15);
// myFunction(34);
// myFunction(38);

//option 1

// let input = 15;
// let  output = "";
//
// if (input % 3 === 0) {
//     output += "Fizz";
// }
//
// if (input % 5 === 0) {
//     output += "Buzz";
// }
//
// document.write('<div>Input: ' + input + '</div>');
// document.write('<div>Result: ' + output + '</div>');


//option 2

function goButtonClick() {
    let inputString = document.getElementById('input').value;
    let inputNumber = parseInt(inpoutString, 10);

    let output = '';

    if (inputNumber % 3 === 0) {
        output += "Fizz";
    }

    if (inputNumber % 5 === 0) {
        output += "Buzz";
    }
}

document.getElementById("output").innerHTML = output;

