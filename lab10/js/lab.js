/**
 * index.js - experimenting with JS events
 * Author: Evelyn Fu
 * Date: 16 May 2023
 **/

// Attach an event listener to your button
var button = document.getElementById('my-button');
button.addEventListener('click', function() {

  // Gets the value of your input field
  var input = document.getElementById('user-name');
  var userName = input.value;

  // Call the sortUserName() function with the user input and store the result
  var nameSorted = sortUserName(userName);
  
  // Replaces the html in <div id=output> with the results.
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = nameSorted;
});

// nameSort() function from lab 7
function sortUserName(userName) {
  var nameArray = userName.split('');
  var nameSortArray = nameArray.sort(function(a, b) {
    return a.localeCompare(b, undefined, {sensitivity: 'base'});
  });
  var nameSorted = nameSortArray.join('');
  return nameSorted;
}

// Main
function main() {
  console.log("Main function started.");
}

main();

