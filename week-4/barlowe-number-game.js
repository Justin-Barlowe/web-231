// ; Title: barlowe-number-game.js
// ; Author: Justin Barlowe
// ; Date: 6 Apr 2023
// ; Description: JavaScript page for exercise 4.2


const guess = document.getElementById('guessed-number');
const results = document.getElementById('guessed-number-results');
const guessButton = document.getElementById('guessed-number-submit');

let rnd;

function generateRndNum() {
    rnd = Math.floor((Math.random() * 10) + 1);
};

// Calling function to generate random number

function chkguess() {

    const msgLessThan = "Your number is less than " + guess.value;
    const msgMoreThan = "Your number is more than " + guess.value;
    const msgCongrats = "Congratulations, you picked the right number!";

    generateRndNum();
    if (rnd < guess.value) results.innerHTML = msgLessThan;
    else if (rnd > guess.value) results.innerHTML = msgMoreThan;
    else if (rnd = guess.value) results.innerHTML = msgCongrats;
    else results.innerHTML = "Error";
};

// Calling function to check random number against the number that was input by the user

guessButton.addEventListener("click", chkguess);

// Added event listener to listen for for submit button and compare numbers

