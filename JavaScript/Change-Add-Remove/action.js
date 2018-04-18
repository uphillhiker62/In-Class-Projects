// $("ul").on("click", "li", function(){
//     // $(this).css("color", "red");
//     $(this).css("text-decoration", "line-through");
// })

//
// $("li").remove();

//create new list

$("#inputBox").keyup(function(event){
    if(event.which === 13) {
        let addToDo = $(this).val();
        $(this).val("");
        $(this).append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
    }
});



$(function(){
    $(".compBtn").on("click", function() {
        alert("Hello");
        $(this).css("text-decoration", "line-through");
    });
});


function markComplete(myElement) {
    let myDad = $(myElement).parent().parent();
    $(myDad).toggleClass("complete");
    $(myDad).find(".iconSpot").toggleClass("fa fa-check-square");
}

function removeRow(myElement) {
    let grandDad = $(myElement).parent().parent();
    $(grandDad).slideUp("fast", function(){
        $(grandDad).remove();
    });
}

// function removeRow(myElement){
//     let granDad = $(myElement).parent().parent();
//
//     $(granDad).animate({
//         opacity: 0,
//         left: "+=50"
//     }, 800, function() {
//         // Animation complete.
//         $(granDad).remove();
//     });
// }


///some other dom manipulation
//
// let activeList;
//
// function addItem(element){
//     activeList = $(this).parent().parent();
// }
//
// function saveToDOItem(thevalue){
//     $(activeList).find(".todolist").append("<div>" + thevalue + "</div>");
// }