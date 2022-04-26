//Generate a random number between one and three
//Based on the number, return either rock, paper, or scissors
function computerPlay() {
    let move = Math.floor(Math.random() * 3) + 1;
    switch (move) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

//take user play and computer play as inputs
//make them case insensitive using .toLowerCase()
//compare the two moves using if else statements
//return whether the user wins or loses and what the two moves were

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) return `It's a Draw! ${playerSelection} ties ${computerSelection}`;

    if (!(playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper')) return `Invalid Option!`;

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! Rock beats Scissors`;
    }
    else if (playerSelection === 'rock') {
        return `You Lose! Paper beats Rock`;
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! Paper beats Rock`;
    }
    else if (playerSelection === 'paper') {
        return `You Lose! Scissors beats Paper`;
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! Scissors beats Paper`;
    }
    else if (playerSelection === 'scissors') {
        return `You Lose! Rock beats Scissors`;
    }
}

//use a for loop to play 5 rounds of rock paper scissors
//use prompt to get the user input
//output result in console.log

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(singleRound(prompt('Choose: Rock, Paper, or Scissors'), computerPlay()));
    }
}

game();