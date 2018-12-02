var cardClasses = Array('king', 'queen');
var numberOfTries = 0;

function allocateRandomClass() {
	var i = Math.floor(Math.random() * cardClasses.length);
	var randomClass = cardClasses[i];
	
	var returnClass = '';
	if($('.' + randomClass).length < 2 ) {
		returnClass = randomClass;

	} else {
		returnClass = allocateRandomClass();
	}

	return returnClass;
}

function resetGame() {
	$('div.card').removeClass('active').removeClass('matched');

	cardClasses.forEach(function(element,index) {
		$('div.card').removeClass(element);
	});
	
	$('div.card').each(function() {
		var currentClass = allocateRandomClass();
		$(this).addClass(currentClass).attr('data-card', currentClass);
	});

	numberOfTries = 0;
}

function doSelectedCardsWin() {
	var cardOne = $('div.active').first().attr('data-card');
	var cardTwo = $('div.active').last().attr('data-card');

	if(cardOne == cardTwo) {
		return true;
	} else {
		return false;
	}
}

function alertWinner() {
	alert('You won in ' + numberOfTries + ' tries!'); 
}

$(document).ready(function() {
	resetGame();

	$('div.card').click(function() {
		if(!$(this).hasClass('active')) {
			// Flip over one of the already active cards
			if($('div.active').length == 2) {
				$('div.active').first().removeClass('active');
			}

			// Make the clicked card active
			$(this).addClass('active');

			// Check for win/loss
			if($('div.active').length == 2) {
				numberOfTries++;

				var isWinner = doSelectedCardsWin();
				if(isWinner) {
					alertWinner();
				}
			}
		}
	});

	$('#reset-game').click(resetGame);
});