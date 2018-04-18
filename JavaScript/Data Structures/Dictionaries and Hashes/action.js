
class Dictionary {
    constructor() {
        this.dataStore = {};
        this.add = function(key, value){
            this.dataStore[key] = value;
        };
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
    }
}

// $(document).ready(function find(key){
//     $(document).on('click', 'findBtn', function() {
//         let empVal = $('#findId').val(this.dataStore[key]);
//         $('.value').append('<div class="value">' + empVal + '</div>');
//     })
// });


function find(){
    let myValue = $("#findId").val();
    $(".value").html(this.dataStore[myValue]);
    //console.log(this.dataStore[myValue]);
}


function remove(key){
    delete this.dataStore[key];
}

function showAll(){
    for(var key in this.dataStore){
        console.log(key + " -> " + this.dataStore[key]);
    }
}

let pBook = new Dictionary();
pBook.add("Fred", "123");
pBook.add("Lyle", "456");
pBook.add("Steve", "789");
pBook.add("Amanda", "743");
pBook.showAll();

pBook.find("Fred");
pBook.remove("Amanda");
pBook.showAll();