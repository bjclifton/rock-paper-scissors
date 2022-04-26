//Generate a random number between one and three
//Based on the number, return either rock, paper, or scissors
function computerPlay() {
    let move = Math.floor(Math.random()*3) + 1;
    switch(move) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}