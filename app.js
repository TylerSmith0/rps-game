// JavaScript source code
let userScore = 0;
let compScore = 0;

// These are the objects returned by the Document Object Model of the HTML page... They're not quite what we want yet!
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

main();

function main() {
    rock_div.addEventListener('click', () => {
        game('r');
    });

    paper_div.addEventListener('click', () => {
        game('p');
    });

    scissors_div.addEventListener('click', () => {
        game('s');
    });
}


function game(choice) {
    comp = compChoice()
    switch (comp) {
        case 'r':
            if (choice == 'r') {
                tieGame(choice, comp);
            }
            else if (choice == 'p') {
                userWin(choice, comp);
            }
            else if (choice == 's') {
                compWin(choice, comp);
            }
            break;
        case 'p':
            if (choice == 'r') {
                compWin(choice, comp);
            }
            else if (choice == 'p') {
                tieGame(choice, comp);
            }
            else if (choice == 's') {
                userWin(choice, comp);
            }
            break;
        case 's':
            if (choice == 'r') {
                userWin(choice, comp);
            }
            else if (choice == 'p') {
                compWin(choice, comp);
            }
            else if (choice == 's') {
                tieGame(choice, comp);
            }
            break;
    }
}

function compChoice() {
    compChoices = ['r', 'p', 's'];
    return compChoices[Math.floor(Math.random() * 3)];
}

function userWin(choice, comp) {
    el = document.getElementById(choice);
    el.classList.add('green-glow');
    setTimeout(() => el.classList.remove('green-glow'), 300);
    if (choice == 'r') {
        choice = 'Rock'
    }
    else if (choice == 'p') {
        choice = 'Paper'
    }
    else if (choice == 's') {
        choice = 'Scissors'
    }

    if (comp == 'r') {
        comp = 'Rock'
    }
    else if (comp == 'p') {
        comp = 'Paper'
    }
    else if (comp == 's') {
        comp = 'Scissors'
    }
    
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `User chose: ${choice}&emsp;&emsp;COM chose: ${comp}<br />You WIN!`
}

function compWin(choice, comp) {
    el = document.getElementById(choice);
    el.classList.add('red-glow');
    setTimeout(() => el.classList.remove('red-glow'), 300);
    if (choice == 'r') {
        choice = 'Rock'
    }
    else if (choice == 'p') {
        choice = 'Paper'
    }
    else if (choice == 's') {
        choice = 'Scissors'
    }

    if (comp == 'r') {
        comp = 'Rock'
    }
    else if (comp == 'p') {
        comp = 'Paper'
    }
    else if (comp == 's') {
        comp = 'Scissors'
    }
    result_div.innerHTML = `User chose: ${choice}&emsp;&emsp;COM chose: ${comp}<br />You Lose...`
    compScore++;
    compScore_span.innerHTML = compScore;
}

function tieGame(choice, comp) {
    el = document.getElementById(choice);
    el.classList.add('grey-glow');
    setTimeout(() => el.classList.remove('grey-glow'), 300);
    if (choice == 'r') {
        choice = 'Rock'
    }
    else if (choice == 'p') {
        choice = 'Paper'
    }
    else if (choice == 's') {
        choice = 'Scissors'
    }

    if (comp == 'r') {
        comp = 'Rock'
    }
    else if (comp == 'p') {
        comp = 'Paper'
    }
    else if (comp == 's') {
        comp = 'Scissors'
    }

    result_div.innerHTML = `User chose: ${choice}&emsp;&emsp;COM chose: ${comp}<br />It's a Tie!`


}