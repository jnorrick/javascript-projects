const input = require('readline-sync');
let str = "LaunchCode";
let finalStr = ""

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let lettersToMove = input.question("How many letters would you like to move? ");
let newStr = str.slice(0, lettersToMove);
let newStr2 = str.slice(lettersToMove);
if (lettersToMove > str.length) {
    lettersToMove = 3};
finalStr = newStr2.concat(newStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
if (lettersToMove > str.length) {
    console.log(`${lettersToMove} is too long. Moving 3 letters...`)
    console.log(`The original string ${str} has been transformed into ${finalStr}!`);
} else{
    console.log(`The original string ${str} has been transformed into ${finalStr}!`);

}
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// in above text

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

