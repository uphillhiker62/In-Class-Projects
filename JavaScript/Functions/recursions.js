let function1 = function(a) {
    let returnValue = a + a;
    return returnValue;
}

function yourFunction(fn, a) {
    let functionResult = fn(a);
    return functionResult;
}

let result = yourFunction(function1, "hi");
console.log(result);

///////////////////////////////////

function fib(n) {
    if (n <= 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }

    let nminus1 = fib(n-1);
    let nminus2 = fib(n-2);

    return nminus1 + nminus2;
}

///////////////////////////////////

function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n-1);
    }
    /* Or you can do:
  return n === 1 ? 1 : n * factorial(n-1);
   */
}

let n = 5;
let factorialAnswer = factorial(5);
console.log(factorialAnswer);