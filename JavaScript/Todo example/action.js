$("#addListInput").keyup(function(event){
    let myval = $("#addListInput").val();
    if(event.which === 13){
        $(".listContainer").append("<div class='lister'>" + myval +
            " <input id='" + myval +"' onkeyup='addtheItem(this, this.value, event)'placeholder='Add Item' type='text'>" +
            "<div class='itembox'></div></div>");
        $('#addListInput').val("");
    }
});

function addtheItem(incid, myvalue, event){
    if(event.which === 13){
        $(incid).parent().find(".itembox").append("<div class='myitem'>" + myvalue + "</div>");
        $(incid).val("");
    }
}

addtheItem()

