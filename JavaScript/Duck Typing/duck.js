
class Sparrow {
    constructor(name){
        this.name = name;
    }

    fly(){
        console.log(this.name + " is flying");
    }
}

class Duck {
    constructor(name){
        this.name = name;
    }

    fly(){
        console.log(this.name + " is flying");
    }
}

class Penguin {
    constructor(name){
        this.name = name;
    }

    swim(){
        console.log(this.name + " is swimming");
    }
}

let charlie = new Sparrow("charlie");
let daffy = new Duck("daffy");
let billy = new Penguin("billy");

liftOff(charlie);
liftOff(daffy);
diveOff(billy);

function liftOff(animal) {
    animal.fly();
}

function diveOff(animal) {
    animal.swim();
}
