
localStorage.setItem("listArray", []);

function createList() {
    let info = $(".myinput").val();
    let mArray = localStorage.getItem("listArray");
    localStorage.setItem("List 1", info);
}
