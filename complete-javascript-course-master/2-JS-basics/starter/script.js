/*
Multi Line Comments
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Comments on Variable Naming Rules
var _3years = 3;
var johnMark = 'John and Mark';
var function = 23;


var firstName = 'John';
var age = 28;


// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/***Basic Operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;


// Math operators
yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*****************************
* Operator Precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge= 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y =  (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x ++;
console.log(x);
x--;
console.log(x);
*/

/*******************************
 * Coding Challenge 1
 */

/*
 var markMass = 90;
 var johnMass = 67;
 var markHeight = 1.83;
 var johnHeight = 1.73;

 var johnBMI = johnMass / johnHeight ^ 2;
 console.log(johnBMI);
 var markBMI = markMass / markHeight ^ 2;
 console.log(markBMI);

 var isMarkFat = markBMI > johnBMI;
 console.log( ' Is Mark fatter than John? ' + isMarkFat);
*/

/**************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}



var markMass = 90;
 var johnMass = 67;
 var markHeight = 1.83;
 var johnHeight = 1.73;

 var johnBMI = johnMass / johnHeight ^ 2;
 console.log(johnBMI);
 var markBMI = markMass / markHeight ^ 2;
 console.log(markBMI);

if (markBMI > johnBMI) {
	console.log('Mark\'s BMI is higher than John\'s'); 
} else {
	console.log('John\'s BMI is higher than Mark\'s');
}

 // var isMarkFat = markBMI > johnBMI;
 // nsole.log( ' Is Mark fatter than John? ' + isMarkFat);

*/

/**************************
* Boolean Logic
*/
/*
var firstName = 'John';
var age= 20;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { 
	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
	console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man. ');
}

*/

/************************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 17;

age >= 18 ? console.log(firstName + ' drinks beer.') 
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
	var drink = 'beer';
} else {
	var drink = 'juice';	
}
console.log(drink);
*/

// Switch Statement
/*
var job = 'instructor';
switch (job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		break;
		console.log(firstName + ' drives an uber in Lisbon');
	case 'designer':
		break;
		console.log(firstName + 'designs beautiful websites.');
		break;
	default:
		console.log(firstName+ ' does something else.');
}

age = 42;
switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager.');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log(firstName + ' is a man. ');
}

*/

/***********************************
* Truthy and Falsy values and equality operators
*/
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0) {
	console.log('Variable is defined');
} else {
	console.log('Variable has NOT been defined');
}


// Equality Operators
if (height == '23') {
	console.log('The == operator does type coercion!');
}
*/

/******** Coding Challenge 2
*/

/*
var johnGame1 = 92;
var johnGame2 = 223;
var johnGame3 = 103;
var mikeGame1 = 189;
var mikeGame2 = 234;
var mikeGame3 = 209;
var maryGame1 = 189;
var maryGame2 = 234;
var maryGame3 = 209;

var johnAverage = (johnGame1 + johnGame2 + johnGame3) / 3;
	console.log(johnAverage);
var mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3) / 3;
	console.log(mikeAverage);
var maryAverage = (maryGame1 + maryGame2 + maryGame3) / 3;
	console.log(maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
	console.log('John is the winner!');
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
	console.log('Mike is the winner!');
} else if (maryAverage > mikeAverage && maryAverage > johnAverage) {
	console.log('Mary is the winner!');
} else {
	if (mikeAverage === johnAverage) {
		console.log('Mike and John are tied');
	}
	if (mikeAverage === maryAverage) {
		console.log('Mike and Mary are tied');
	}
	if (johnAverage === maryAverage) {
		console.log('John and Mary are tied');
	}
}
*/ 


/******************************************
* FUNCTIONS
*/
/*
function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageBob = calculateAge(1936);
var agePhoebe = calculateAge(1987);
console.log(ageJohn, ageBob, agePhoebe);

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year); 
	var retirement = 65 - age;

	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years.');
	} else {
		console.log(firstName + ' is already retired.');
	}
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1949, 'Bob');
yearsUntilRetirement(1999, 'Phoebe');
*/

/***************************
* Function Statements and Expressions
*/

// Function Declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
/*
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code.';
		case 'driver':
			return firstName + ' drives an Uber in Lisbon.'
		case 'designer':
			return firstName + ' designs alright websites.'
		default:
			return firstName + ' does something else.'
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driverer', 'Bill'));
console.log(whatDoYouDo('designer', 'Phoebe'));
console.log(whatDoYouDo('chef', 'Dee'));
*/

/*****************************
* ARRAYS
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(32));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/************************** 
* CODING CHALLENGE - Tip Calculator
*/

/*
function calculateTip(bill) {
	if (bill < 50) {
		return (bill * .2);
	} else if (bill > 50 && bill < 200) {
		return (bill * .15);
	} else if (bill > 200) {
		return (bill * .1);
	}
}

var bills = [124, 48, 268];
var tips = [];
var totalBill = [];

tips.push(calculateTip(bills[0]));
tips.push(calculateTip(bills[1]));
tips.push(calculateTip(bills[2]));

console.log(tips);

totalBill.push(bills[0] + calculateTip(bills[0]));
totalBill.push(bills[1] + calculateTip(bills[1]));
totalBill.push(bills[2] + calculateTip(bills[2]));

console.log(totalBill);

*/

/****************
** OBJECTS
*/

/*
// Object literal
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false, 
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1975;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/***************************
* Object Methods
*/

/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1991,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false, 
	calcAge: function() {
		this.age = 2018 - this.birthYear;
	}
};

john.calcAge();
console.log(john);
*/

/****************
** CODING CHALLENGE
*/

/*var john = {
	firstName: 'John',
	lastName: 'Smith',
	height: 1.53,
	mass: 59,
	calcBMI: function() {
		this.BMI = this.mass / this.height ^ 2;
	}
};

john.calcBMI();
console.log(john.BMI);

var mark = {
	firstName: 'Mark',
	lastName: 'Jones',
	height: 1.53,
	mass: 69,
	calcBMI: function() {
		this.BMI = this.mass / this.height ^ 2;
	}
};

mark.calcBMI();
console.log(mark.BMI);


if (mark.BMI > john.BMI) {
	console.log (mark.firstName + ' ' + mark.lastName + ' has the highest BMI with ' + mark.BMI);
} else if (john.BMI > mark.BMI) {
	console.log (john.firstName + ' ' + john.lastName + ' has the highest BMI with ' + john.BMI);
} else {
	console.log (' Mark and John have the same BMI');
}

*/


/************************
** LOOPS
*/

// For loop
/*
for (var i = 0; i < 10; i++) {
	 console.log(i);
}

// i = o, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 10, 10 < 10 false, exit the loop, it no longer works. 

var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}

// While Loop
var i = 0;
while (i < john.length) {
	console.log(john[i]);
	i++;
}
*/

// Continue and break statements
/*
var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}
*/

// Looping backwards
/*
var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}
*/

/************************
** Coding Challenge 
*/
/*
array [124, 48, 268, 180, 42]
method to calculate tip, including a loop to iterate over the bills and calculate tip
20% when < 50
15% when >= 50 and < 200
10% when > 200
create a new array containing all tips []
create a new array containing total amount paid []
create second set of info for mark and his tips
then create a function to calculate the average of an array of tips - loop over array, store the current sum in a variable (then divide by number of tiems in the array)
calculate average tips for each family, log which family paid highest tips on average
*/

/*
function average(a) {
	var sum = 0;
	for (var i = 0; i < a.length; i++) {
		sum = sum + a[i];
	}
	return sum / a.length;
};

var john = {
	bills: [124, 48, 268, 180, 42], 
	tips: [], 
	totals: [],	
	calcTip: function() {
		for (var i = 0; i < this.bills.length; i++) {
			if (this.bills[i] < 50) {
				var tip = this.bills[i] * .2;
				this.tips.push(tip);
				this.totals.push(tip + this.bills[i]);

			} else if (this.bills[i] >= 50 && this.bills[i] < 200) {
				var tip = this.bills[i] * .15;
				this.tips.push(tip);
				this.totals.push(tip + this.bills[i]);

			} else {
				var tip = this.bills[i] * .1;
				this.tips.push(tip);
				this.totals.push(tip + this.bills[i]);
			}
		}
	}
};
john.calcTip();
console.log(john);

var mark = {
	bills: [77, 375, 110, 45], 
	tips: [], 
	totals: [],	
	calcTip: function() {
		for (var i = 0; i < this.bills.length; i++) {
			if (this.bills[i] < 100) {
				var tip = this.bills[i] * .2;
				this.tips.push(tip);
				this.totals.push(tip + this.bills[i]);

			} else if (this.bills[i] >= 10 && this.bills[i] < 300) {
				var tip = this.bills[i] * .15;
				this.tips.push(tip);
				this.totals.push(tip + this.bills[i]);

			} else {
				var tip = this.bills[i] * .25;
				this.tips.push(tip);
				this.totals.push(tip + this.bills[i]);
			}
		}
	}
};
mark.calcTip();
console.log(mark);

var johnAvg = average(john.tips);
var markAvg = average(mark.tips);
console.log(johnAvg, markAvg);

if (johnAvg > markAvg) {
	console.log('John wins at tipping');
} else if (markAvg > johnAvg) {
	console.log('Mark wins at tipping');
} else {
	console.log('It\'s a tipping tie');
};
*/

var john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42], 
	calcTips: function() {
		this.tips = [];
		this.finalValues = [];

		for (var i = 0; i < this.bills.length; i++)
		{
			var percentage;
			var bill = this.bills[i];

			if (bill < 50) {
				percentage = .2;
			} else if (bill >= 50 && bill < 200) {
				percentage = .15
			} else {
					percentage = .1;
				}

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + (bill * percentage);
			}
		}
	}


var mark = {
	fullName: 'Mark Miller',
	bills: [77, 475, 110, 45], 
	calcTips: function() {
		this.tips = [];
		this.finalValues = [];

		for (var i = 0; i < this.bills.length; i++)
		{
			var percentage;
			var bill = this.bills[i];

			if (bill < 100) {
				percentage = .2;
			} else if (bill >= 100 && bill < 300) {
				percentage = .1
			} else {
					percentage = .25;
				}

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + (bill * percentage);
			}
		}
	}


function calcAverage(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
	console.log(john.fullName + '\'s family pays higher tips with an average of $' + john.average);
	} else if (mark.average > john.average) {
		console.log(mark.fullName + '\'s family paid higher tips wtih an average of $' + mark.average);
	}







































