/**
 * index.js - experimenting with DOM manipulation
 * Author: Evelyn Fu
 * Date: 11 May 2023
 **/

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "Test Element no.1";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "Test Element no.2";

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.color = "#f6b3d3";
new2El.style.backgroundColor = "#f180b7";

// Task Bonus:
var myDiv = document.getElementById("myDiv");
var newEl = document.createElement("p");
newEl.innerHTML = "New Element";

myDiv.insertBefore(newEl, myDiv.firstChild);


// Main
function main() {
  console.log("Main function started.");
}

main();
