// Title: barlowe-bookstore.js
// Author: Justin barlowe
// Date: 18 April 2023
// Description: JavaScript file for assignment 6.2

const books = ["Darkly Dreaming Dexter", "The Operator", "The Outpost"];
const authors = ["Robert O'Neil", "Jeff Lindsay", "Jake Tapper"];
authors.sort();
const publishers = ["Chronicle Books", "Skyhorse Publishing", "Beacon Press"];
publishers.sort();
publishers.reverse();
const button = document.getElementById("bookstore-submit");

function display() {
  const choice = document.getElementById("bookstore").value;
  let output = "";

  switch (choice) {
    case "books":
      output += "<h3>Books Listing</h3>";
      output += "<table class='table'>";
      output += "<thead><tr><th>Title</th></tr></thead>";
      output += "<tbody>";
      for (let i = 0; i < books.length; i++) {
        output += "<tr><td>" + books[i] + "</td></tr>";
      }
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
      }
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
      }
      output += "</tbody>";
      output += "</table>";
      break;
    default: 
      alert("Invalid selection! Please try again.");
      break;

  }
  document.getElementById("bookstore-results").innerHTML = output;
}

button.addEventListener("click", display);
