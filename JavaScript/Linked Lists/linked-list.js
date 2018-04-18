
class LinkedList {

    constructor(){
        this.start; //node
        this.size = 0;
    }

    // list.insert(5);
    // list.insert(7);

    insert(value) {

        // Make a new node, and set 5 as the value

        // if start is null, then set start equal to the new node

        // otherwise
        // get the last node in the list
        // set the last node's next property equal to the new node

    }

    remove(value) {


    }

    contains(value) {
        // if the value of the start node equals value, then return true;

        // while we haven't found the value, get the next node and check it's value
        // start.next
        var nextNode = this.start;

        // if nextNode.value !== value
        nextNode = nextNode.next;

        // if the value is found, return true
        // if the next node is null, then we've reached the end of the list without finding the value then return false
    }

    size() {
        return this.size();
    }

}