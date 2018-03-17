

window.setTimeout(
    function() {
        
    }
)












function capAsync(anArray, callback) {
    window.setTimeout(
        function () {
            callback(array.toString().toUpperCase());
        }, Math.random() * 2000 + 1000);
}
let newCoolStr = capAsync(array, handleModifiedArray);
function handleModifiedArray(modifiedArrayStr) {
    document.getElementById('array3').innerText = modifiedArrayStr;
}