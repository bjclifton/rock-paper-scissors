let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let output = document.querySelector('.output');
let scoreboard = document.querySelector('.score');

let compScore = 0;
let userScore = 0;

//Generate a random number between one and three
//Based on the number, outputText(either rock, paper, or scissors
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
//outputText(whether the user wins or loses and what the two moves were

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outputText(`It's a Draw! ${playerSelection} ties ${computerSelection}`);
    }
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        outputText(`You Win! Rock beats Scissors`);
        userScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        outputText(`You Lose! Paper beats Rock`);
        compScore++;
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        outputText(`You Win! Paper beats Rock`);
        userScore++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        outputText(`You Lose! Scissors beats Paper`);
        compScore++;
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        outputText(`You Win! Scissors beats Paper`);
        userScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        outputText(`You Lose! Rock beats Scissors`);
        compScore++;
    }
    scoreUpdate();
}

let outputText = function(str) {
    output.textContent = str;
}

let scoreUpdate = function() {
    scoreboard.textContent = `User: ${userScore}    Computer: ${compScore}`;
}

scoreUpdate();
outputText(`Select a move`)
rock.addEventListener('click', () => singleRound('rock', computerPlay()));
paper.addEventListener('click', () => singleRound('paper', computerPlay()));
scissors.addEventListener('click', () => singleRound('scissors', computerPlay()));
