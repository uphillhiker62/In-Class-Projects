
function loadDoc(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            let data = this.responseText;
            let myobj = JSON.parse(data);
            console.log(myobj);
            document.getElementById("demo").innerHTML += "<img src='http://openweathermap.org/img/w/"+ myobj.weather[0].icon +".png'>";
            document.getElementById("demo").innerHTML += myobj.weather[0].description;
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=provo&appid=cc8ef8e5c209d938ab3801daa42b5e31", true);
    xhttp.send();
}
//
// function jqCall(){
//
//     $.ajax({
//         url: "http://api.openweathermap.org/data/2.5/weather?q=provo&appid=cc8ef8e5c209d938ab3801daa42b5e31",
//         type: "GET",
//         success: function(data, status){
//             console.log(data);
//             let myobj = JSON.parse(data);
//             $("#demo").append(myobj).weather[0].description;
//
//         }
//     });
//
// }

