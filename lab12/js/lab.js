/**
 * index.js - creating a function that depends on conditionals
 * Author: Evelyn Fu
 * Date: 23 May 2023
 **/

// Return Hogwarts House depending on length
function sortingHat(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 0) {
    return "Gryffindor"
  }

  else if (mod == 1) {
    return "Hufflepuff"
  }

  else if (mod == 2) {
    return "Ravenclaw"
  }

  else if (mod == 3) {
    return "Slytherin"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  
  var houseText = "";
  if (house == "Gryffindor") {
    houseText = "Gryffindor is known for its courageous and brave members. Students sorted into Gryffindor exhibit qualities such as bravery, chivalry, and daring. Gryffindors are often known for their willingness to stand up for what is right, even in the face of adversity. Notable Gryffindor members include Harry Potter, Hermione Granger, and Ron Weasley.";
  } else if (house == "Hufflepuff") {
    houseText = "Hufflepuff values loyalty, patience, and dedication. Students sorted into Hufflepuff are known for their strong work ethic and genuine kindness towards others. Hufflepuffs are often loyal friends and reliable individuals who believe in fairness and hard work. Notable Hufflepuff members include Cedric Diggory and Nymphadora Tonks.";
  } else if (house == "Ravenclaw") {
    houseText = "Ravenclaw is associated with intelligence, creativity, and wisdom. Students sorted into Ravenclaw possess a thirst for knowledge and are known for their wit and cleverness. Ravenclaws appreciate learning and tend to excel academically. Notable Ravenclaw members include Luna Lovegood and Cho Chang.";
  } else if (house == "Slytherin") {
    houseText = "Slytherin values ambition, cunning, and resourcefulness. Students sorted into Slytherin are known for their determination and strong leadership qualities. While Slytherins have often been associated with negative traits, such as a thirst for power, they can also exhibit great loyalty to those close to them. Notable Slytherin members include Severus Snape and Draco Malfoy.";
  }

  newText = "<p style='color: rgb(149, 149, 223);'> The Sorting Hat has sorted you into " + house + ".</p>" + "<p style='color: rgb(149, 149, 223);'>" + houseText + "</p>";
  document.getElementById("output").innerHTML = newText;
})


// Main
function main() {
  console.log("Main function started.");
}

main();

