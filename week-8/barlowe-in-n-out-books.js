// Title: barlowe-in-n-out-books.js
// Author: Justin Barlowe
// Date: 6 May 2023
// Description: JavaScript file for assignment 8.2

const book1 = {
  isbn: "0307277887",
  title: "Darkly Dreaming Dexter",
  pages: 288,
};

const book2 = {
  isbn: "1501145037",
  title: "The Operator",
  pages: 368,
};

const book3 = {
  isbn: "031618540X",
  title: "The Outpost",
  pages: 704,
};
//Object literals created for books. 
const author1 = {
  name: "Robert O'Neil",
  genre: "Autobiography",
};

const author2 = {
  name: "Jeff Lindsay",
  genre: "Thriller",
};

const author3 = {
  name: "Jake Tapper",
  genre: "Military History",
};
//Object literals created for authors.
const button = document.getElementById("bookstore-submit"); //Variable created for button. 

function display() {
  const choice = document.getElementById("bookstore").value; //Variable created for user selection. 
  let output = "";

  switch (choice) {
    case "books":
      let tblBooks = "<h3>Top 3 Favorite Books</h3>"; //Book variable created with HTML concatenation.
      tblBooks += "<table class='table'>";
      tblBooks += "<thead><tr><th>ISBN</th><th>Title</th><th>Pages</th></tr></thead>";
      tblBooks += "<tbody>";
      tblBooks += "<tr><td>" + book1.isbn + "</td><td>" + book1.title + "</td><td>" + book1.pages + "</td></tr>";
      tblBooks += "<tr><td>" + book2.isbn + "</td><td>" + book2.title + "</td><td>" + book2.pages + "</td></tr>";
      tblBooks += "<tr><td>" + book3.isbn + "</td><td>" + book3.title + "</td><td>" + book3.pages + "</td></tr>";
      tblBooks += "</tbody>";
      tblBooks += "</table>";
      output = tblBooks;
      break;
    case "authors":
      let tblAuthors = "<h3>Authors Listing</h3>"; //Author variable created with HTML concatenation. 
      tblAuthors += "<table class='table'>";
      tblAuthors += "<thead><tr><th>Name</th><th>Genre</th></tr></thead>";
      tblAuthors += "<tbody>";
      tblAuthors += "<tr><td>" + author1.name + "</td><td>" + author1.genre + "</td></tr>";
      tblAuthors += "<tr><td>" + author2.name + "</td><td>" + author2.genre + "</td></tr>";
      tblAuthors += "<tr><td>" + author3.name + "</td><td>" + author3.genre + "</td></tr>";
      tblAuthors += "</tbody>";
      tblAuthors += "</table>";
      output = tblAuthors;
      break;
    default:
      alert("Invalid selection! Please try again."); //Default error for invalid selection. 
      break;
  }
  document.getElementById("bookstore-results").innerHTML = output; //Output pushed to HTML
}

button.addEventListener("click", display); //Event listener added for button click. 
