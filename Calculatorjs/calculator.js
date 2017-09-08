function clickdisplay(number)
{
	var screen = document.getElementById("screen");
if(screen.innerHTML==0)
{
 screen.innerHTML=number.innerHTML;
}
else{
	screen.innerHTML+=number.innerHTML;
}
}

function clearscreen()
{
document.getElementById("screen").innerHTML=0;	
}

function evalu(number)
{
	var evalo = eval(document.getElementById("screen").innerHTML)
	document.getElementById("screen").innerHTML = evalo;
}