
const buttons = document.querySelectorAll("button")
let button;
// Setup event listeners for rock/paper/scissor buttons
for (i = 0; i < buttons.length; i++) {
	button = buttons[i];
	button.addEventListener("click", playRound);
}

function playRound() {
	let playerSelectionRound = this.textContent;
	let computerSelectionRound = computerPlay();

	let roundResult = roundRockPaperScissors(playerSelectionRound, computerSelectionRound);

	let resultDiv = document.getElementById('resultString');
	
	// Print off round result
	if (resultDiv.hasChildNodes()) {
		const resultContent = resultDiv.childNodes[0];
		resultContent.textContent = roundResult;
	}
	else {
		const resultContent = document.createElement("p");
		resultContent.textContent = roundResult;
		resultDiv.appendChild(resultContent);
	}
	

	let resultString = roundResult.split(" ")[1]
	let winner;
	if (resultString === "Win!") {
		winner = "p";
	}
	else if (resultString === "Lose!") {
		winner = "c";
	}
	else {
		return;
	}

	updateScore(winner);

	return;
}

function updateScore(winner) {
	
	if (winner == "p") {
		winnerID = "playerScore"
	}
	else if (winner === "c") {
		winnerID = "computerScore"
	}

	else {
		return;
	}

	// Update scoreboard
	let winnerSpan = document.getElementById(winnerID);
	let score = winnerSpan.textContent;
	score = Number(score) + 1;

	winnerSpan.textContent = score;

	// Game over when score hits 5
	if (score === 5 && winner == "p") {
		let resultDiv = document.getElementById('resultString');
		resultDiv.childNodes[0].textContent = "Congratulations you won!"
		for (i = 0; i < buttons.length; i++) {
			button = buttons[i];
			button.removeEventListener("click", playRound);
		}
	}
	else if (score === 5 && winner == "c") {
		let resultDiv = document.getElementById('resultString');
		resultDiv.childNodes[0].textContent = "Sorry the computer has won."
		for (i = 0; i < buttons.length; i++) {
			button = buttons[i];
			button.removeEventListener("click", playRound);
		}
	}

}


function roundRockPaperScissors(playerSelection, computerSelection) {
	
	// Fix word case
	let correctPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
	
	let winnerString = `You Win! ${playerSelection} beats ${computerSelection}`
	let loserString = `You Lose! ${playerSelection} loses to ${computerSelection}`
	let tieString = `You Tie! ${playerSelection} ties to ${computerSelection}`
	
	switch (true) {
		case correctPlayerSelection === "Rock" && computerSelection === "Scissors":
			return winnerString;
			
		case correctPlayerSelection === "Scissors" && computerSelection === "Rock":
			return loserString;
		
		case correctPlayerSelection === "Paper" && computerSelection === "Rock":
			return winnerString;
			
		case correctPlayerSelection === "Rock" && computerSelection === "Paper":
			return loserString;

		case correctPlayerSelection === "Scissors" && computerSelection === "Paper":
			return winnerString;

		case correctPlayerSelection === "Paper" && computerSelection === "Scissors":
			return loserString;
		
		default:
			return tieString;
		
	}
}

function computerPlay() {

	let computerHand = getRandomInt(0, 2);
	// Arbitrarily map numbers to rock, paper, and scissors
	if (computerHand === 0) {
		return "Rock"
	}
	else if (computerHand === 1) {
		return "Paper"
	}
	else {
		return "Scissors"
	}
	
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}