function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
}
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
let combinedArray = [happiness, words];
let newArray = [];

let selectedCombinedArray = [];

// for (i=0; i < 3; i++){
//   console.log(randomSelection(happiness));
// }
// for (i=0; i < 3; i++){
//   console.log(randomSelection(words));
// // }

// for (i=0; i < 1; i++){
//   newArray.push(randomSelection(words));
//   newArray.push(randomSelection(happiness));
//   console.log(newArray);
// }


 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
//  console.log(randomSelection(happiness));
//  console.log(randomSelection(words));


 //b) Have the code randomly pick one array, and then print 2 random items from it.
for (i=0; i < 1; i++) {
  selectedCombinedArray = randomSelection(combinedArray);
}

for (i=0; i < 2; i++){
  console.log(randomSelection(selectedCombinedArray));
}

 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.