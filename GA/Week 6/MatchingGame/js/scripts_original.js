var cardClasses = Array('king', 'queen');
var numberOfTries = 0;

function findClass() {
	var i = Math.floor(Math.random() * cardClasses.length);   //select random integer between 0 and the last array of the index for cardClasses
	
	var randomClass = cardClasses[i];   //grab the value of the array element at cardClasses[i]
	
	var returnClass = '';   //placeholder for return value later

	if($('.'+randomClass).length < 2 ) {   //check to see if there are less than 2 divs with this class
		returnClass = randomClass;   //if so, return the random class

	} else {
		returnClass = findClass();   //if not, this value has been used, repeat process, can only have 2 of each.
	}

	return returnClass;
}

function randomize() {
	$('div.card').removeClass('active').removeClass('matched');    //reset

	cardClasses.forEach(function(element,index) {   //reset
		$('div.card').removeClass(element);
	});
	
	$('div.card').each(function(){   //loop through cards and assign class randomly
		var currentClass = findClass();  //calls function that will give us a good class
		$(this).addClass(currentClass).attr('data-card', currentClass);   //assign it to the div we are working with
	});

	numberOfTries = 0;
}

function checkMatch() {
	var cardOne = $('div.active').first().attr('data-card');  //grab active divs, get the first one
	var cardTwo = $('div.active').last().attr('data-card');   //grab active divs, get the last one

	console.log('cardone=' + cardOne + ',cardtwo=' + cardTwo);

	if (cardOne == cardTwo) {
		$('div.active').addClass('matched').removeClass('active');
		alertWinner();
	} else { 
		alert("Try again!");
	}
}

function alertWinner() {
	alert('You won in '+numberOfTries+' tries!'); 
}

function initialize() {
	$('div.card').click(function() {   //if the card that's clicked already is matched, increase # of tries
		if($(this).hasClass('matched')) { 
			numberOfTries++;

		} else {

			if($(this).hasClass('active')) {	//if card is not matched, but is active:
				
				if($('div.active').length == 2) {   //and there are already 2 active cards, remove active class, add it to the target
					$('div.active').removeClass('active');
					$(this).addClass('active');
				}


			} else {
				
				/*if($('div.active').length == 2) {   //if we already have 2 active cards, remove active class, add it to the target 
				   $('div.active').removeClass('active');
				   $(this).addClass('active');
					
				}*/
				$(this).addClass('active');
			
				if ($('div.active').length == 2) {
					checkMatch();  
					numberOfTries++; 

					/*if ($('div.card'.length == $('div.matched').length)) {
						alertWinner();  //if the number of cards = number of matched, win.
					}*/
				}
			}
		}
	});
}

$(document).ready(function() {
	randomize();   //when loaded, randomize cards, initialize game start. reset button randomizes cards again.
	initialize();
	$('#reset-game').click(randomize);
});

