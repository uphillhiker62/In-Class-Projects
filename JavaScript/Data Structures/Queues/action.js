
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.printOut = printOut;
    this.empty = empty;
}

//this can connect with Queue bc of the property enqueue//
function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    return this.dataStore.shift()
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length - 1];
}

function printOut(){
    let retStr = "";
    for(let i = 0; i < this.dataStore.length; i++){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty(){
    if(this.dataStore.length === 0){
        return true;
    } else {
        return false;
    }
}

let q = new Queue();
// q.enqueue("Bob");
// q.enqueue("Fredo");
// q.enqueue("Charles");
//
// console.log(q.printOut());
//
// q.dequeue();
//
// console.log(q.printOut());
//
// console.log("Front of queue: " + q.front());
// console.log("Back of queue: " + q.back());
//
// console.log(q.empty());

function putInQ(){
    let theName = $(".myInput").val();
    q.enqueue(theName);
    console.log(q.printOut());
    $(".back").html("Oldest: " + q.back());
}