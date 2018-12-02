var total = 0;

document.getElementById('entry').onsubmit = calculate;

function calculate(){
//1. grab input value
	var newEntry = document.getElementById('newEntry').value;

//2. format it to currency
	var formatted = formatCurrency(newEntry);

//3. add to recpt html table 
	document.getElementById('entries').innerHTML += '<tr><td></td><td>'+formatted+'</td></tr>';


//4. increase the total amount & format value into currency 
	total += parseFloat(newEntry);
	var formattedTotal = formatCurrency(total);
	document.getElementById('total').innerHTML = formattedTotal;

//5. clear the input
	document.getElementById('newEntry').value = '';

	return false;
}

function formatCurrency(number) {

	var currency = parseFloat(number).toFixed(2);

	return "$"+currency;
}

