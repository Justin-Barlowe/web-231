// Title: barlowe-dino-app.js
// Author: Justin Barlowe
// Date: 10 May 2023
// Description: JavaScript file for assignment 9.2

class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }
  roar() {
    return this.name + " says: Rooooar";
  }
}
//Gigantosaurus class created with constructor, string variable and method. 
class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);
  }
  growl() {
    return this.name + " says: Groooowl";
  }
}
//Tyrannosaurus child class created with constructor, string variable and method. 
class Velociraptor extends Tyrannosaurus {
  constructor(name) {
    super(name);
  }
  awk() {
    return this.name + " says: Awk Awk Awwwwk";
  }
}
//Velociraptor child class created with constructor, string variable and method. 

const giga = new Gigantosaurus("Gigantosaurus"); //Variable created from Gigantosaurus class.
const rex = new Tyrannosaurus("Tyrannosaurus"); //Variable created from Tyrannosaurus class. 
const raptor = new Velociraptor("Velociraptor"); //Variable created from Velociraptor class. 

function display() { //Display function with decision tree for selected radio box. 
    const selection = document.querySelector('input[name="selection"]:checked'); //Variable with query selector from selected radio box. 
    const resultContainer = document.getElementById("dino-results"); //Variable created for results DOM element.
    let message = "";

  switch (selection?.id) {
    case "roar":
      message = giga.roar();
      break;
    case "growl":
      message = rex.growl();
      break;
    case "awk":
      message = raptor.awk();
      break;
    default:
      alert("Invalid selection, please try again");
      return;
  }
//Switch statement dependent on radio button selected and message created. 

  resultContainer.textContent = message;
}

const submitButton = document.getElementById("submit");//Variable created to retrieve DOM submit button element. 
submitButton.addEventListener("click", display);//Event listener added for button click with display function.