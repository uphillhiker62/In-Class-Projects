class LinkedList {
  
  constructor() {
    this.start;
    this.size = 0;
  }

  // list.insert(5);
  // list.insert(7);

  insert(value) {

    // Make a new node, and set 5 as the value
      var newNode = new Node(value);
      this.size++;

      if (!this.start) {
          this.start = newNode;
          return;
      }

      var currentNode = this.start;
      while (currentNode.next !== null) {
          currentNode = currentNode.next;
      }

      currentNode.next = newNode;
  }

  remove(value) {
      // var currentNode = this.start;
      // var previousNode;
      // var nextNode;
      //
      // var foundValue = value === currentNode.value;
      // while(!foundValue) {
      //     previousNode = currentNode;
      //     currentNode = currentNode.next;
      //
      //     if (!currentNode) {
      //         return;
      //     }
      //     foundValue = value === currentNode.value;
      // }
      //
      // nextNode = currentNode.next;
      //
      // if (currentNode === this.start) {
      //     this.start = nextNode
      // }

  }

  contains(value) {

      var nextNode = this.start;

      while (value !==)


      //if the value of the start node equals value, then return true;
      if (nextNode.value === value){
          return true;
      }

      // while we haven't found the value, get the next node and check it's value
      // start.next
      while (currentNode)


      if (nextNode.value !== value) {
          nextNode = nextNode.next;
      } else if (nextNode.value === null) {
          return false;
      }



      //if the value is found, return true
      //if the next node is null, then we've reached the end of the list without finding the value then return false
  }

  size() {
    return this.size;
    
  }
}

