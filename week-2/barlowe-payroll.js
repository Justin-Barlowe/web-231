const ludwigFirstName = "Ludwig"
const bachFirstName = "Johann"
const wolfgangFirstName = "Wolfgang"
//Assigned variables to first names, used const as name shouldn't change

const ludwigLastName = "Beethoven"
const bachLastName = "Bach"
const wolfgangLastName = "Mozart"
//Assigned variables to last names, used const as name shouldn't change

let ludwigAddress = "505 main street"
let bachAddress = "512 main street"
let wolfgangAddress = "600 main street"
//Assigned variables to addresses, used let instead of const since address could change

const bachDate = new Date().toLocaleDateString('en-US');
const ludwigDate = new Date().toLocaleDateString('en-US');
const wolfgangDate = new Date().toLocaleDateString('en-US');
//Assigned variables to dates

let ludwigPayRate = 18.9.toFixed(1)
let bachPayRate = 25.5.toFixed(1)
let wolfgangPayRate = 50.1.toFixed(1)
//Assigned variables to pay rates, used let as pay rate could change


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