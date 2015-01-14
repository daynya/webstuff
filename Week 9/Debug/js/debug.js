//error thrown example
$("body").append("<h1>Hi world!</h1>");
//console.log example, log each of the pies and the index before the switch 
var pies=["Cherry","Pumpkin","Banana","Apple","Rhubarb"];
$("body").append("There are "+pies.length+" total pies.<br>");
pies.forEach(function(element,index){
	console.log(index+":"+element);
	switch(element){
		case "Cherry":
		case "Apple": $("body").append(index+1+") "+element+": Yum!<br>");
		break;
		case "Rhubarb": $("body").append(index+1+") "+element+": Yuck<br>");
		break;
		case "Banana":
		case "Pumpkin": $("body").append(index+1+") "+element+": meh<br>");
		break;

		default: $("body").append(index+1+") "+element+": IDK!<br>");
	}
});
//breakpoint example, put inside the function
function doSomething(){
	myThing="Cookies";
	$("body").append("<p>Paragraph</p>");
	console.log(myThing)
}

var myThing = "Pies";
doSomething();