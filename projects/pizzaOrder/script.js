const nameTextBox = document.getElementById("nameTextBox");
const smallSize = document.getElementById("smallSize");
const mediumSize = document.getElementById("mediumSize");
const largeSize = document.getElementById("largeSize");
// checkbox
const cheeseCheckBox= document.getElementById("cheeseCheckBox");
const pepperoniCheckBox = document.getElementById("pepperoniCheckBox");
const mushroomsCheckBox = document.getElementById("mushroomsCheckBox");

const orderDisplayName = document.getElementById("orderDisplayName");
const submitButton = document.getElementById("submitButton");
const orderDisplay = document.getElementById("orderDisplay");
const orderDisplay2 = document.getElementById("orderDisplay2");

let outputName;
let output;
let output2;

submitButton.onclick = function () {
    output = orderDisplay;
    output2 = orderDisplay2;
    outputName = orderDisplayName;
    
    const name =nameTextBox.value.trim()
    outputName.textContent  = `Name : ${name}`;
   if (smallSize.checked){

    output.textContent = "size : small";
   } else if(mediumSize.checked){
    output.textContent = "size : medium";
   } else if (largeSize.checked){
    output.textContent = "size : large";
   } else {
    output.textContent = "you have not yet selected any size of the pizza";
   }

   let toppings = [];

    if (cheeseCheckBox.checked) toppings.push("cheese");
    if (pepperoniCheckBox.checked) toppings.push("pepperoni");
    if (mushroomsCheckBox.checked) toppings.push("mushrooms");
   
    if (toppings.length > 0) {
        output2.textContent = `Toppings: ${toppings.join(", ")}`;
    } else {
        output2.textContent = "You must select at least one topping.";
    }

    // to clear the form after the submit
    nameTextBox.value = "";
    smallSize.checked = mediumSize.checked = largeSize.checked = false;
    cheeseCheckBox.checked =pepperoniCheckBox.checked = mushroomsCheckBox.checked = false;
    
}