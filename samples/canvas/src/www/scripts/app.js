/// <reference path="../vendor/jquery.js" />

$(document).ready(function () {
    let canvas = document.querySelector("canvas");
    canvas.style.border = "1px solid #0094ff";
    let context = canvas.getContext("2d");
    context.strokeStyle = "#333";
    context.fillStyle = "#888";
    context.lineWidth = 0.5;
    context.fillRect(10, 10, 100, 100);

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(110, 110);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(200, 150);
    context.lineTo(200, 200);
    context.lineTo(150, 200);
    context.closePath();
    context.stroke();

    context.strokeStyle = "#0094ff";
    context.font = "italic 30px serif";
    context.strokeText("hello world", 120, 110);
    
    $(canvas).on("click", function (e) {
        console.log(JSON.stringify({
            offsetX: e.offsetX,
            offsetY: e.offsetY,
            clientX: e.clientX,
            clientY: e.clientY,
            screenX: e.screenX,
            screenY: e.screenY
        }));
    });
});