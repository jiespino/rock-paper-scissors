game()


function game() {
	
	let playerSelectionRound;
	let computerSelectionRound;
	
	for (i = 0; i < 5; i++) {
		playerSelectionRound = window.prompt("Rock, Paper, or Scissors?");
		computerSelectionRound = computerPlay();
		console.log(roundRockPaperScissors(playerSelectionRound, computerSelectionRound));
	}
}


function roundRockPaperScissors(playerSelection, computerSelection) {
	
	//Fix word case
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