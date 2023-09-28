const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = food.split(",").sort();
let cabinet2 = equipment.split(",").sort();
let cabinet3 = pets.split(",").sort();
let cabinet4 = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
cabinetSelection = input.question("Please select a cabinet by choosing a number 0 - 3. ");
itemSelection = input.question("What item are you looking for in the cabinet? ").toLowerCase();

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetSelection <= 3){
    console.log(`You have selected ${cabinetSelection}. The contents of this cabinet are: ${cargoHold[cabinetSelection]}. `);
} else {
    console.log(`You have selected ${cabinetSelection}. This is an invalid choice. Please choose a number 0 - 3.`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
if (cargoHold[cabinetSelection][itemSelection].includes(itemSelection)){
    console.log(`Cabinet ${cabinetSelection} DOES contain ${itemSelection}`)
} else {
    console.log(`cabinet ${cabinetSelection} DOES NOT contain ${itemSelection}`)
}