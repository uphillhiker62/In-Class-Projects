
let drawCanvas = document.getElementById("myCanvas");
let ctx = drawCanvas.getContext("2d");
let shapeArray = [];

drawCanvas.addEventListener("click", onPress);

function onPress(evt) {
    let mouseX = evt.offsetX;
    let mouseY = evt.offsetY;

    console.log(mouseX, mouseY);
    let vertexArray = [mouseX, mouseY];
    shapeArray.push(vertexArray);

    ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);

    for(let i = 0; i < shapeArray.length; i++) {
        let spotX = shapeArray[i][0];
        let spotY = shapeArray[i][1];

        if(i === 0){
            ctx.beginPath();
            ctx.moveTo(spotX, spotY);
        }
        else {
            ctx.lineTo(spotX, spotY);
        }
    }

    ctx.stroke();
    ctx.fillStyle = "rgba(20,60,50,0.2)";
    ctx.fill();

}

function closeShape(){

    ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);

    for(let i = 0; i < shapeArray.length; i++) {
        let spotX = shapeArray[i][0];
        let spotY = shapeArray[i][1];

        if(i === 0){
            ctx.beginPath();
            ctx.moveTo(spotX, spotY);
        }
        else {
            ctx.lineTo(spotX, spotY);
        }
    }

    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "rgba(20,60,50,0.2)";
    ctx.fill();


}



/*ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(350, 75);
ctx.lineTo(250, 250);
ctx.stroke();
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0.5)";
ctx.fill();*/