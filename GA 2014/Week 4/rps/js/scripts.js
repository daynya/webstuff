var myTotal = 0;
var botTotal = 0;

document.getElementById('rock').onclick = clickRock; 
document.getElementById('paper').onclick = clickPaper;
document.getElementById('scissors').onclick = clickScissors; 
document.getElementById('play-again').onclick = playAgain;

function playAgain () {
	// Resets the results
	document.getElementById('results').innerHTML = '';
	document.getElementById('your-choice').innerHTML = '';
	document.getElementById('bot-choice').innerHTML = '';

	hideResultsBox();

	// Sets buttons up for play
	document.getElementById('rock').className = 'active';
	document.getElementById('paper').className = 'active';
	document.getElementById('scissors').className = 'active';
	document.getElementById('play-again').className = 'hidden';
}

function hideRulesShowResultsBox() {
	document.getElementById('rules').className = 'hidden';
	document.getElementById('results-box').className = '';
}

function hideResultsBox() {
	document.getElementById('results-box').className = 'hidden';
}

function disableButtons() {
	document.getElementById('rock').className = '';
	document.getElementById('paper').className = '';
	document.getElementById('scissors').className = '';
	document.getElementById('play-again').className = 'visible';
}

function clickRock() {
	if(document.getElementById('rock').className == 'active') {
		var botChoice = getBotChoice();
		scoreGame('rock', botChoice);		
	}
}

function clickPaper() {
	if(document.getElementById('paper').className == 'active') {
		var botChoice = getBotChoice();
		scoreGame('paper', botChoice);
	}
}

function clickScissors() {
	if(document.getElementById('scissors').className == 'active') {
		var botChoice = getBotChoice();
		scoreGame('scissors', botChoice);
	}
}

function getBotChoice( ){
	var choices = Array('rock', 'paper', 'scissors');
	var choice = choices[Math.floor(Math.random()*choices.length)];
	return choice;
}

function scoreGame (myChoice, botChoice) {
	disableButtons();
	hideRulesShowResultsBox();

	document.getElementById('your-choice').innerHTML = myChoice;
	document.getElementById('bot-choice').innerHTML = botChoice;

	if (myChoice == botChoice) {
		document.getElementById('results').innerHTML = "It\'s a Tie!";
	} else if (myChoice == 'rock' && botChoice == 'scissors') {
		updateMyScore();
	} else if (myChoice == 'scissors' && botChoice == 'paper') {
		updateMyScore();
	} else if (myChoice == 'paper'&& botChoice == 'rock') {
		updateMyScore();
	} else {
		updateBotScore();
	}
}

function updateMyScore() {
	myTotal += 1;
	document.getElementById('your-score').innerHTML = myTotal;
	document.getElementById('results').innerHTML = 'You Won!';
}

function updateBotScore() {
	botTotal += 1;
	document.getElementById('bot-score').innerHTML = botTotal;
	document.getElementById('results').innerHTML = 'You Lose!';
}