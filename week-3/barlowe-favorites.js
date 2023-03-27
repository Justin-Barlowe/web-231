// ; Title: barlowe-favorites.js
// ; Author: Justin Barlowe
// ; Date: 27 Mar 2023
// ; Description: Javascript file for exercise 3.2



document.getElementById("btnSports").onclick = function() {
    let btnSports = document.getElementById("btnSports").value;
    alert(`New Orleans Saints`)
}
//Added on click function for sports team. 
document.getElementById("btnBook").onclick = function() {
    let btnBook = document.getElementById("btnBook").value;
    alert(`Darkly Dreaming Dexter`)
}
//Added on click function for favorite book
document.getElementById("btnAuthor").onclick = function() {
    let btnAuthor = document.getElementById("btnAuthor").value;
    alert(`Jeff Lindsay`)
}
//Added on click function for Author
document.getElementById("btnLanguage").onclick = function() {
    let btnLanguage = document.getElementById("btnLanguage").value;
    alert(`Javascript`)
}
//Added on click function for programming language