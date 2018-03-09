// function Character(){
//     this.jump = function(){
//
//     }
// }
//
// class Character{
//     constructor(data){
//
//     }
//
//     jump(){
//
//     }
// }

/////////

class Pizza{
    constructor(pizzaName){
        this.name = pizzaName;
        // this.ingredients = [];
        this.size = "";

    }

    //this is a method below and what goes inside is a property.
    addingredients(myingredient){
        let ingredients = [];
        ingredients.push(myingredient);
        return ingredients;

    }

    setSize(){

    }

}

var bobsPizza = new Pizza("bobs");