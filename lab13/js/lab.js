/**
 * index.js - experimenting with loops
 * Author: Evelyn Fu
 * Date: 25 May 2023
 **/

$(document).ready(function() {

  //FizzBuzz Function {3: "Fizz", 5: "Buzz", 7: "Boom"}
  function fizzBuzzBoom() {
    $("#output").empty(); // Clears Previous Outputs
    var max = parseInt($("#max").val());

    for (var i = 1; i <= max; i++) {
      var str = ""; // Initialize Empty String
      
      // Print Fizz if number is multiple of 3
      if (i % 3 == 0) {
        str += "Fizz";
      }

      // Print Buzz if number is multiple of 5
      if (i % 5 == 0) {
        str += "Buzz";
      }

      // Print Boom if number is multiple of 7
      if (i % 7 == 0) {
        str += "Boom";
      }

      // If string still empty, prints the number
      if (str == "") {
        str = i;
      }

      // Add "!" to Fizz Buzz Boom
      else {
        str += "!";
      }
      $("#output").append("<div>" + str + "</div>");
    }
  }

  $("#submit").click(function() {
    fizzBuzzBoom();
    console.log("Button Clicked.");
  });
});

// Main
function main() {
  console.log("Main function started.");
}

main();

