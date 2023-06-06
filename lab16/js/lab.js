/**
 * index.js - experimenting with processing JSON from an API
 * Author: Evelyn Fu
 * Date: 6 June 2023
 **/

// URL Variables
var URL = "https://xkcd.com/info.0.json";
var frontURL = "https://xkcd.com/";
var endURL = "info.0.json";

function comic(num) {
  // Checking if comic number is provided, otherwise set it as an empty string
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  // Making new URL
  var newURL = frontURL + numStr + endURL;
  console.log("Current URL:", newURL);

  // AJAX request to retrieve the comic data
  $.ajax({
    url: newURL,
    type: "GET",
    data: {},
    dataType: "json",
  })

  .done(function(data) {
    console.log(data);

    // Data Extraction
    var title = data.title;
    var image = data.img;
    var alt = data.alt; // Extracting alt text
    var dataNum = data.num;

    // Building the HTML
    var output = "";
    output += "<h3>" + title + "</h3>";
    output += "<img src='" + image + "' title='" + alt + "'><br>";
    output += "<button id='previous'>Previous</button> <button id='next'>Next</button>";
    output += "</div>";

    $("#output").html(output);

    // Display comic HTML
    $("#output").html(output);

    // Previous Button Event Listener
    $("#previous").click(function(){
      comic(dataNum - 1);
    });

    // Next Button Event Listener
    $("#next").click(function(){
      comic(dataNum + 1);
    });
    
  });
}

comic();


// Main
function main() {
  console.log("Main function started.");
}

main();