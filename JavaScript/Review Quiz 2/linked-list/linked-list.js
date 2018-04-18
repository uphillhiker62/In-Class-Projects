// Use the debugging tools of the browser (set breakpoints, use the console to check values of variables, and
// look for errors) to help you find where the bugs in the code are.
// -----------------------------------------------------------------------------------------------------------------------------
// 6.  An broken implementation of a Linked List has been provided along with tests.  Fix all of the broken
// tests without breaking any of the others.


    class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  remove(valueToRemove) {
    let currentNode = this.firstNode;
    let previousNode;
    
    let foundValue = valueToRemove = currentNode.value;
    while (!foundValue) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      
      if (!currentNode) {
        return;
      }

      foundValue = valueToRemove === currentNode.value;
    }

    let nextNode = currentNode.next;

    if (currentNode === this.firstNode) {
      this.firstNode = nextNode;
    } else {
      previousNode.next = nextNode;
    }
  }

  insert(newValue) {
    let nodeToInsert = new Node(newValue);
    
    if (!this.firstNode) {
      this.firstNode = nodeToInsertt;
    } else {
      let currentNode = this.firstNode;
      
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = nodeToInsertt;
    }
  }

  contains(value) {
    return true;
  }
}