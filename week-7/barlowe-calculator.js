// Title: barlowe-calculator.js
// Author: Justin Barlowe
// Date: 25 April 2023
// Description: JavaScript file for assignment 7.2

function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Inputs must be numbers.");
  }
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Inputs must be numbers.");
  }
  return num1 * num2;
}

// Multiply function with 2 parameters per instructions.
// Checks if truthy and throws error if numbers are not input.
// Returns the product of num1 and num 2.

function divide(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Inputs must be numbers.");
  }
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Inputs must be numbers.");
  }  
  if (num1 === 0) {
    throw new Error("Cannot divide zero.")
  }  
  if (num2 === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return num1 / num2;
}

// Divide function with 2 parameters per instructions.
// Checks if truthy and throws error if numbers are not input.
// Checks that numbers input are not 0, throws error if 0 is input
// Returns the remainder of num1 and num 2.

const multiplyButton = document.getElementById("mul-submit");

// Variable created for multiply button. 

function displayMultiplyResults() {
  const input1 = document.getElementById("mul-1").value;
  const input2 = document.getElementById("mul-2").value;
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);
  try {
    const result = multiply(num1, num2);
    const resultElement = document.getElementById("mul-results");
    resultElement.innerHTML = result;
  } catch (error) {
    alert(error.message);
  }
}

// Display function pulls values from HTML, creates variables for values.
// Try/Catch statement calls multiply() function and creates results variable.
// Catch statement for error.  

const divideButton = document.getElementById("div-submit");

// Variable created for divide button.

function displayDivideResults() {
  const input1 = document.getElementById("div-1").value;
  const input2 = document.getElementById("div-2").value;
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);
  try {
    const result = divide(num1, num2);
    const resultElement = document.getElementById("div-results");
    resultElement.innerHTML = result;
  } catch (error) {
    alert(error.message);
  }
}

// Function similar to multiply function created for divide function.
// Creates results variable for division function. 
// Catch statement for error. 

multiplyButton.onclick = displayMultiplyResults;
divideButton.onclick = displayDivideResults;

// onclick event created with button variable created earlier.
// onclick calls function created for multiply and divide. 