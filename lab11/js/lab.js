/**
 * index.js - experimenting with libraries and jQuery
 * Author: Evelyn Fu
 * Date: 18 May 2023
 **/

// Adding button to challenge section
$(document).ready(function() {
  var challengeButton = document.getElementById('c-button');

  challengeButton.addEventListener('click', function() {
    challengeButton.parentElement.classList.toggle('special');
  });
});

// Adding button to problem section
$(document).ready(function() {
  var problemButton = document.getElementById('p-button');

  problemButton.addEventListener('click', function() {
    problemButton.parentElement.classList.toggle('special');
  });
});

// Adding button to result section
$(document).ready(function() {
  var resultButton = document.getElementById('r-button');

  resultButton.addEventListener('click', function() {
    resultButton.parentElement.classList.toggle('special');
  });

});


// Main
function main() {
  console.log("Main function started.");
}

main();

