/**
 * index.js - experimenting with DOM manipulation
 * Author: Evelyn Fu
 * Date: 11 May 2023
 **/

// Find the output <div> and assign it to a variable
var outputEl = document.getElementById("output");

// Create a new element and assign it to a variable
var new1El = document.createElement("p");

// Set the HTML of the new element
new1El.innerHTML = "Test Element no.1";

// Append the new element to the output <div>
outputEl.appendChild(new1El);

// Create another new element and assign it to a variable
var new2El = document.createElement("p");

// Set the HTML of the second new element
new2El.innerHTML = "Test Element no.2";

// Append the second new element to the output <div>
outputEl.appendChild(new2El);

// Change the CSS attributes of at least two elements
new1El.style.color = "#f6b3d3";
new2El.style.backgroundColor = "#f180b7";


// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
