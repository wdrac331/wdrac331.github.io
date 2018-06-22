function Focus(a){
	document.getElementById("i_text").style.backgroundColor="white";
	document.getElementById("i_passwd").style.backgroundColor="white";
	document.getElementById("i_textarea").style.backgroundColor="white";
	a.style.backgroundColor='yellow';
}
var num = 0;
function RotateImage(){
	var img = document.getElementById("face");
	img.style.transform = "rotate("+num+"deg)";
	num = num+6;
}

function GetTime(){
	var d = new Date();
	var data = document.getElementById("nowtime");
	data.innerHTML = d.getFullYear()+"년"+Number(d.getMonth()+1)+"월"+d.getDate()+"일"+d.getHours()+"시"+d.getMinutes()+"분"+d.getSeconds()+"초";
}
window.onload=function(){
		var i = setInterval(RotateImage,100);
		var i2 = setInterval(GetTime,1000);
		
		
};

const UP = 38;
const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
var x = 88;
var y = 0;
function OnKeyDown(){
	var key = event.keyCode;
	var img = document.getElementById("face");
	switch(key){
		case UP: y=y-10;break;
		case DOWN: y=y+10;break;
		case LEFT: x=x-10;break;
		case RIGHT: x=x+10;break;
	}
	img.style.left = x+"px";
	img.style.top = y+"px";
}
