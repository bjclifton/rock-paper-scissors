//Generate a random number between one and three
//Based on the number, return either rock, paper, or scissors
function computerPlay() {
    let move = Math.floor(Math.random()*3) + 1;
    switch(move) {
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

function singleRound(userPlay, computerPlay) {
    userPlay = userPlay.toLowerCase();
    if(userPlay === computerPlay) return `It's a Draw! ${userPlay} ties ${computerPlay}`

    if(userPlay === 'rock' && computerPlay === 'scissors') {
        return `You Win! Rock beats Scissors`;
    }
    else {
        return `You Lose! Paper beats Rock`;
    }

    if(userPlay === 'paper' && computerPlay === 'rock') {
        return `You Win! Paper beats Rock`;
    }
    else {
        return `You Lose! Scissors beats Paper`;
    }

    if(userPlay === 'scissors' && computerPlay === 'paper') {
        return `You Win! Scissors beats Paper`;
    }
    else {
        return `You Lose! Rock beats Scissors`;
    }
}