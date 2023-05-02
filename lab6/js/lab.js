/**
 * index.js - experiment with JavaScript arrays and objects
 * Author: Evelyn Fu
 * Date: 2 May 2023
 **/

// Define Variables
myTransport = ["Car", " Bike", " Bus"];

// Create Object for myMainRide
myMainRide = {
  make: "Toyota",
  model: "Prius",
  color: "Silver",
  year: 2021,
  // Method, define subject in object
  age: function() {
      return 2023 - this.year;
  }
}

// Output
document.writeln("Forms of Transportation I use: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

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
