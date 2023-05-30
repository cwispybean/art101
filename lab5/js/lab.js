/**
 * index.js - experimenting with basic JavaScript data types and variables
 * Author: Evelyn Fu
 * Date: 27 April 2023
 **/

// Define Variables
var make = "Toyota";
var model = "Prius";
var color = "Silver";
var year = 2021;

// Calculate
var age = 2023 - year;

// Retrieve Output ID
var outputDiv = document.getElementById("output");
outputDiv.innerHTML += "Make: " + make + "<br>";
outputDiv.innerHTML += "Model: " + model + "<br>";
outputDiv.innerHTML += "Color: " + color + "<br>";
outputDiv.innerHTML += "Year: " + year + "<br>";
outputDiv.innerHTML += "Age: " + age + " years<br>";

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
