/**
 * index.js - working with my partner to experiment with anonymous functions and callbacks
 * Author: Evelyn Fu
 * Date: 9 May 2023
 **/

// Array of Numbers
array = [1, 2, 3, 4, 5];
console.log("My Array: ", array)

// Function
function square(x){
  return (x * x);
}

// Testing
console.log("What is the square of 10?", square(10));
console.log("What is the square of 15?", square(15));

var result = array.map(square);
console.log("Square of Array: ", result)

// Anonymous Function
var results = array.map(function(x){
  return x + 1;
})

// Test, should return 2, 3, 4, 5, 6
console.log("Array with incremented numbers: ", results)

// Print in HTML
var outputEl = document.getElementById("output");
outputEl.innerHTML = "My Array: " + array.join(", ") + "<br>" +
                     "Square of 10: " + square(10) + "<br>" +
                     "Square of 15: " + square(15) + "<br>" +
                     "Square of Array: " + result.join(", ") + "<br>" +
                     "Array with incremented numbers: " + results.join(", ");