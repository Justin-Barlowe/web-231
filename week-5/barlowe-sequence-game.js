// ; Title: barlowe-sequence-game.js
// ; Author: Justin Barlowe
// ; Date: 10 Apr 2023
// ; Description: JavaScript page for exercise 5.2

const sequenceButton = document.getElementById('sequence-submit')
// Created variable to access the Sequence Submit button within HTML

function displaySequence() {
    let choice = document.getElementById('sequence').value;
    if (choice == "numbers") {
        let txtNumSequence = "";
        let index = 0;
        while (index <= 10) {
            txtNumSequence += index + ", ";
            index++;
        }
document.getElementById('sequence-results').innerHTML = txtNumSequence.slice(0, -2);

/**Gets the users selection from drop down,
 * If the user selects numbers code will create variable 
 * and loop through numbers 0-10 and display the sequence
*/

    } 
    else if (choice == "even-numbers") {
        let txtEvenSequence = "";
        let nextNumber;
        let index = 0;
        do {
            txtEvenSequence += index + ", ";
            nextNumber = index + 2;
            index = nextNumber;
        }
        while (index < 21);
document.getElementById("sequence-results").innerHTML = txtEvenSequence.slice(0, -2);       
    }

/**If the user selects even numbers from the
 * drop down creates even variable and loops
 * through even numbers through 20.
*/

    else if (choice == "odd-numbers") { 
        txtOddSequence = "";
        for (let index = 1; index < 20; index++) {
            if ((index % 2) !== 0) {
                txtOddSequence += index + ", ";
            }
        }  

/**If the user selects odd numbers from the
 * drop down creates odd variable and loops
 * through even numbers through 20.
*/

document.getElementById("sequence-results").innerHTML = txtOddSequence.slice(0, -2);
    } 
    
    else {
       alert("Invalid selection, please try again.");
    }

    //Added alert if the user selects the --Select-- option on drop down
}
    
sequenceButton.addEventListener("click", displaySequence);
// Added event listener for Sequence Submit button