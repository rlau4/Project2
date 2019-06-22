$.get("/api/all", function(data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "character-well-" + i);
    $("#all-dogs").prepend(wellSection);
    $("#character-well-" + i).append("<h2>" + data[i].dogName + "</h2>");
    $("#character-well-" + i).append("<h3>Breed: " + data[i].breed + "</h4>");
    $("#character-well-" + i).append(
      "<img src= '" + data[i].pic + "' id='dog-pic'>"
    );
  }
});

$(document).ready(function() {
  //Age search
    $(".filter").on("click", function() {
      criteria = this.id;
      console.log("criteria");
      console.log(criteria);
  
      $("#all-dogs").empty();
      $.get("/api/" + criteria, function(data) {
        console.log("DATA VVV");
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var wellSection = $("<div>");
          wellSection.addClass("well");
          wellSection.attr("id", "character-well-" + i);
          $("#all-dogs").prepend(wellSection);
          $("#character-well-" + i).append("<h2>" + data[i].dogName + "</h2>");
          $("#character-well-" + i).append("<h3>Breed: " + data[i].breed + "</h4>");
          $("#character-well-" + i).append("<img src= '" + data[i].pic + "' id='dog-pic'>");
        }
      });
});
