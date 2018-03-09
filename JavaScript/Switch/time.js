// function checkMonth() {
//     var myuserinput = document.getElementById("userinput").value;
//     var myoutput = document.getElementById("output");
//
//     switch(myuserinput) {
//         case "jan":
//             myoutput.innerHTML = "You will win money if you play video games";
//             break;
//         case "feb":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "mar":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "apr":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "may":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "june":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "july":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "aug":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "sept":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "oct":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "nov":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//         case "dec":
//             myoutput.innerHTML = "You will lose money if you play video games";
//             break;
//     }
// }
//
// var timeNow = new Date;
// var hour = timeNow.getHours();
// var minutes = timeNow.getMinutes();
// console.log(hour + ":" + minutes);
// number(hour);
//
//
//
//
// function number(timeOfDay) {
//     if (timeOfDay === 1 || timeOfDay === 2) {
//         alert("Good Afternoon");
//     } else if (timeOfDay === 6) {
//         alert("Good Evening");
//     } else {
//         alert("nevermind");
//     }
//
//     switch(timeOfDay) {
//         case 1:
//         case 2:
//         case 3:
//             console.log("What are you doing up?");
//             break;
//         case 9:
//             console.log("Good morning");
//             break;
//         case 3:
//             //fire different block of code;
//             break;
//         default:
//             //
//     }
// }
//
// var d = new Date();
// var weekday = new Array(7);
// var today = timeNow.getDay();
//
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
//
//
// switch(today) {
//     case 1:
//         console.log("Today will be a great day");
//         break;
//     case 2:
//         console.log("Tomorrow might be a better day, it's Monday")
//         break;
//     default:
//         console.log("Today never comes")
// }

var myDate = new Date();
var dayOfWeek = myDate.getDay();
var dayHolder = document.getElementById("weekDay");
var quoteBox = document.getElementById("quoteBox");
var todayImg = document.getElementById("imgBox");

switch(dayOfWeek){
    case 0:
        dayHolder.innerHTML = "Sunday";
        quoteBox.innerHTML = "Cool, it's not Monday";
        todayImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYR6a4CqqoSVrTlGW9FJfmxHAS069_BhynVHKZpzo7UpDauVf";
        break;
    case 1:
        dayHolder.innerHTML = "Monday";
        quoteBox.innerHTML = "Bummer, it's Monday";
        todayImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYR6a4CqqoSVrTlGW9FJfmxHAS069_BhynVHKZpzo7UpDauVf";
        break;
    case 2:
        dayHolder.innerHTML = "Tuesday";
        quoteBox.innerHTML = "One down, 4 to go";
        break;
    case 3:
        dayHolder.innerHTML = "Wednesday";
        quoteBox.innerHTML = "Hump day!";
        break;
    case 4:
        dayHolder.innerHTML = "Thursday";
        quoteBox.innerHTML = "Today will be awesome!";
        break;
    case 5:
        dayHolder.innerHTML = "Friday";
        quoteBox.innerHTML = "Yay!";
        break;
    case 6:
        dayHolder.innerHTML = "Saturday";
        quoteBox.innerHTML = "Party!";
        break;
    default:
}








