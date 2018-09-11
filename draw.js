async function drawDiamond(){
var canvas = document.getElementById('canvas');
var btn = document.getElementById("button"); 
var ctx = canvas.getContext("2d");
var time = 150;
	
//disables button to prevent spamming
btn.disabled = true;
//Clears and resets the canvas
ctx.clearRect(0,0, canvas.width, canvas.height);
ctx.beginPath();
//drawing routine
ctx.moveTo(400,0);
ctx.lineTo(700,300);
ctx.stroke();
ctx.lineTo(400,600);
await slep(time);
ctx.stroke();
ctx.lineTo(100,300);
await slep(time);
ctx.stroke();
ctx.lineTo(400,0);
await slep(time);
ctx.stroke()
//enables button to allow for redrawing
btn.disabled = false;
}

function slep(time){
	//sleeps for "time" milliseconds
	return new Promise(resolve => setTimeout(resolve, time));
}