// ; Title: barlowe-payroll.js
// ; Author: Justin Barlowe
// ; Date: 22 Mar 2023
// ; Description: JavaScript page for exercise 2.2

const ludwigFirstName = "Ludwig"
const bachFirstName = "Johann"
const wolfgangFirstName = "Wolfgang"
//Assigned variables to first names

const ludwigLastName = "Beethoven"
const bachLastName = "Bach"
const wolfgangLastName = "Mozart"
//Assigned variables to last names

const ludwigAddress = "505 main street"
const bachAddress = "512 main street"
const wolfgangAddress = "600 main street"
//Assigned variables to addresses

const bachDate = new Date().toLocaleDateString('en-US');
const ludwigDate = new Date().toLocaleDateString('en-US');
const wolfgangDate = new Date().toLocaleDateString('en-US');
//Assigned variables to dates

const ludwigPayRate = 18.9.toFixed(1)
const bachPayRate = 25.5.toFixed(1)
const wolfgangPayRate = 50.1.toFixed(1)
//Assigned variables to pay rates


document.getElementById("ludwig-firstName").innerHTML = ludwigFirstName;
document.getElementById("ludwig-lastName").innerHTML = ludwigLastName;
document.getElementById("ludwig-address").innerHTML = ludwigAddress;
document.getElementById("ludwig-date").innerHTML = ludwigDate;
document.getElementById("ludwig-payRate").innerHTML = ludwigPayRate
//Modified HTML DOM elements for first card

document.getElementById("bach-firstName").innerHTML = bachFirstName;
document.getElementById("bach-lastName").innerHTML = bachLastName;
document.getElementById("bach-address").innerHTML = bachAddress;
document.getElementById("bach-date").innerHTML = bachDate;
document.getElementById("bach-payRate").innerHTML = bachPayRate;
//Modified HTML DOM elements for second card

document.getElementById("wolfgang-firstName").innerHTML = wolfgangFirstName;
document.getElementById("wolfgang-lastName").innerHTML = wolfgangLastName;
document.getElementById("wolfgang-address").innerHTML = wolfgangAddress;
document.getElementById("wolfgang-date").innerHTML = wolfgangDate;
document.getElementById("wolfgang-payRate").innerHTML = wolfgangPayRate;
//modified HTML DOM elements for third card