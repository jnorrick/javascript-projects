let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
      return Math.floor(Math.random()*11)}
};


let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {
      return Math.floor(Math.random()*11)}
};

let chimpanzeeTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {
      return Math.floor(Math.random()*11)}
}

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14, 
   age: 5,
   astronautID: 4,
   move: function () {
      return Math.floor(Math.random()*11)}
}

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {
      return Math.floor(Math.random()*11)}
}


let crew = [superChimpOne, salamander, chimpanzeeTwo, dog, waterBear];


function crewReports(array) {
   for (item in array) {
         console.log(`${array[item].name} is a ${array[item].species}. They are ${array[item].age} years old and ${array[item].mass} kilograms. Their ID is ${array[item].astronautID}.`);
      }
}
// crewReports(crew);

// function crewReportsActual(object) {
//    console.log(`${object.name} is a ${object.species}. They are ${object.age} years old and ${object.mass} kilograms. Their ID is ${object.astronautID}.`);
// }

// // crewReportsActual(dog);

// // for (item in crew){
// //    crewReportsActual(crew[item]);
// // }
// // Before these animal astronauts can get ready for launch, they need to take a physical fitness test. Define a fitnessTest function that takes an array as a parameter.

// // Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result. Create a new array to store how many turns it takes each animal to complete the race.

// // Return the array from the function, then print the results to the console (one animal per line).

// // HINT: There are a lot of different ways to approach this problem. One way that works well is to see how many iterations of the move method it will take for each animal to reach 20 steps.
// // Print out the relevant information about each animal.

// // Start an animal race!
// // function fitnessTest(array) {
// //    acumulator = 0
// //    while (acumulator <= 20) {

// //   }
// //}
// let resultString = ""
// let acumulator = 0
// let numOfMoves = 0
// while (acumulator <= 19) {
//    acumulator += chimpanzeeTwo.move();
//    numOfMoves += 1
//    resultString = `${chimpanzeeTwo.name} took ${numOfMoves} turns to take 20 steps.`
//    console.log(resultString)
//    }
//    resultString = `${chimpanzeeTwo.name} took ${numOfMoves} turns to take 20 steps.`
//    console.log(resultString)


   let output = [];
   let students = {
      names: ["Gerard Darris", "Banana Cat", "Apple Dog", "Mango Zebra", "Kiwi Kiwi"],
      scores: [100, 95, 74, 82, 91]
   };

for (let i = 0; i < students.names.length; i++) {
   let output = "";

   for (items in students) {
      output += `${students[items][i]}: `;

      console.log(output.slice(0, -2));
   }
}
