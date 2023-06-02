/**
 * index.js - to experiment with jQuery and AJAX
 * Author: Evelyn Fu
 * Date: 1 June 2023
 **/

function pyukumuku() {
  $.ajax({
    // URL for request
    url: "https://pokeapi.co/api/v2/pokemon/pyukumuku/",
    // POST or GET request
    type: "GET",
    data: {
      id: 771,
    },
    dataType: "json",
  })

  .done(function(data) {
    console.log(data);
    var output = "";
    output += "<p>Name: " + data.name + "</p>";
    output += "<p>ID: " + data.id + "</p>";
    output += "<img src='" + data.sprites.front_default + "'>";
    output += "<p>Types: " + data.types.map(type => type.type.name).join(", ") + "</p>";
    output += "<p>Height: " + data.height + "</p>";
    output += "<p>Weight: " + data.weight + "</p>";
    output += "<p>Base Experience: " + data.base_experience + "</p>";
    output += "<p>Stats: </p>";
    output += "<ul>";
      data.stats.forEach(function(stat) {
        output += "<li>" + stat.stat.name + ": " + stat.base_stat + "</li>";
      });
    output += "</ul>";
    output += "<p>Abilities: " + data.abilities.map(ability => ability.ability.name).join(", ") + "</p>";
    output += "<p>Moves: " + data.moves.map(move => move.move.name).join(", ") + "</p>";

    $("#output").html(output);
  });
}

// Event Listener to get Pyukumuku data
$("#activate").click(pyukumuku);

// Main
function main() {
  console.log("Main function started.");
}

main();