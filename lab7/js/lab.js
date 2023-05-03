/**
 * index.js - write functions that take user input and manipulate a string
 * Author: Evelyn Fu
 * Date: 4 May 2023
 **/

//Function sortUserName, function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hello, please tell me your name so I can fix it.");
  console.log("userName =", userName);

  //splitting string into an array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  //sorting the array
  var nameSortArray = nameArray.sort();
  console.log("nameSortArray =", nameSortArray);

  //join array back into a string
  var nameSorted = nameSortArray.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

//Output
document.writeln("I fixed your name: ", sortUserName(), "<br>");







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
