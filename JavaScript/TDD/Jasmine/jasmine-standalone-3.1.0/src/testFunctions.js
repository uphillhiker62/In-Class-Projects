
function appendWorld(value) {
    return value + ' world';
}

function evens(numbersList) {
    let evenNumbers = [];

    for(let i = 0; i < numbersList.length; i++) {
        let currNum = numbersList[i];

        if(currNum % 2 === 0){
            evenNumbers.push(currNum);
        }
    }
    return evenNumbers;
}