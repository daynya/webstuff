document.onready = function(){
document.getElementById("submit").onclick = convert;
}

function convert() {
	var temp =document.getElementById('tempf').value;
	temp = parseFloat(temp);
	temp = (temp - 32) * (5/9);
	document.getElementById('tempc').innerHTML = temp;
}

