var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

context.strokeStyle = "gray";
context.fillStyle= "Black";
context.lineWidth = 3;

context.beginPath();
context.moveTo(600,200);
context.lineTo(500,400);
context.lineTo(700,300);
context.lineTo(600,200);
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(200,100);
context.lineTo(600,200);
context.lineTo(500,400);
context.lineTo(100,300);
context.lineTo(200,100);
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(700,300);
context.lineTo(700,500);
context.lineTo(500,600);
context.lineTo(500,400);
context.fillStyle= "pink";
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(500,400);
context.lineTo(500,600);
context.lineTo(100,500);
context.lineTo(100,300);
context.lineTo(500,400);
context.fillStyle= "pink";
context.fill();
context.stroke();
context.closePath();