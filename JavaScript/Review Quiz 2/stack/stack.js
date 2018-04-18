
// Use the debugging tools of the browser (set breakpoints, use the console to check values of variables, and
// look for errors) to help you find where the bugs in the code are.
// -----------------------------------------------------------------------------------------------------------------------------
//
//     5.  A broken implementation of a Stack has been provided along with tests.  Fix all of the broken
// tests without breaking any of the others.

class Stack {

  constructor() {
    this.array = [];
    this.index = 0;
  }

  push(val) {
    this.array[this.index] = val;
  }

  pop() {
    if (this.index === 0) {
      return null;
    }

    let poppedValue = this.array[--this.index];
    this.array.length = this.array.length-1;
  }

  peek() {
    if (this.index === 0) {
      return null;
    }
    
    return this.array[this.index-1];
  }

  size() {
    
  }
}