// Title: barlowe-bookstore.js
// Author: Justin Barlowe
// Date: 18 April 2023
// Description: JavaScript file for assignment 6.2

const books = ["Darkly Dreaming Dexter", "The Operator", "The Outpost"]; //Books Array
const authors = ["Robert O'Neil", "Jeff Lindsay", "Jake Tapper"]; //Authors Array
authors.sort(); //Sorting Authors array in ascending order
const publishers = ["Chronicle Books", "Skyhorse Publishing", "Beacon Press"]; //publishers array
publishers.sort(); //Sorting publishers in order
publishers.reverse(); // Reversing sort order to sort in descending order.
const button = document.getElementById("bookstore-submit"); //Button variable pulled from HTML

function display() {
  const choice = document.getElementById("bookstore").value;// Created choice output variable to get value from drop down box in html
  let output = ""; // Create output variable

  switch (choice) {
    case "books":
      output += "<h3>Books Listing</h3>"; //Added header for books, will do same for authors and publishers.
      output += "<table class='table'>"; //Created table for books
      output += "<thead><tr><th>Title</th></tr></thead>"; 
      output += "<tbody>";
      for (let i = 0; i < books.length; i++) {
        output += "<tr><td>" + books[i] + "</td></tr>";
      }
      //Looped through array and added table rows. 
      output += "</tbody>";
      output += "</table>";
      break;
    case "authors":
      output += "<h3>Authors Listing</h3>";
      output += "<table class='table'>";
      output += "<thead><tr><th>Full Name</th></tr></thead>";
      output += "<tbody>";
      for (let i = 0; i < authors.length; i++) {
        output += "<tr><td>" + authors[i] + "</td></tr>";
      }//Looped through array and added table rows. 
      output += "</tbody>";
      output += "</table>";
      break;
    case "publishers":
      output += "<h3>Publishers listing</h3>";
      output += "<table class='table'>";
      output += "<thead><tr><th>Company</th></tr></thead>";
      output += "<tbody>";
      for (let i = 0; i < publishers.length; i++) {
        output += "<tr><td>" + publishers[i] + "</td></tr>";
      }//Looped through array and added table rows. 
      output += "</tbody>";
      output += "</table>";
      break;
    default: 
      alert("Invalid selection! Please try again."); // Created default alert pop-up for invalid selection. 
      break;

  }
  document.getElementById("bookstore-results").innerHTML = output; //Output from function displayed in HTML.
}

button.addEventListener("click", display); // Added event listener for clicking submit button. 
