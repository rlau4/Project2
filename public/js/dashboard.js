<<<<<<< HEAD
$.get("/api/all", function(data) {
=======
$.get("/api/all", function (data) {
>>>>>>> d9279fa85e6fb51018fb517d06bd4ea7869e478d
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "character-well-" + i);
    $("#all-dogs").prepend(wellSection);
    $("#character-well-" + i).append("<h2>" + data[i].dogName + "</h2>");
    $("#character-well-" + i).append("<h3>Breed: " + data[i].breed + "</h4>");
    $("#character-well-" + i).append("<img src= '" + data[i].pic + "' id='dog-pic'>"
    );
  }
});
<<<<<<< HEAD

$(document).ready(function() {
  //Age search
  $("#age1").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/age/1", function(data) {
=======
$(document).ready(function() {
  $(".filter").on("click", function() {
    criteria = this.id;
    console.log("criteria");
    console.log(criteria);

    $("#all-dogs").empty();
    $.get("/api/" + criteria, function(data) {
      console.log("DATA VVV");
>>>>>>> d9279fa85e6fb51018fb517d06bd4ea7869e478d
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
<<<<<<< HEAD
    });
  });

  $("#age2").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/age/2", function(data) {
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

  $("#age3").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/age/3", function(data) {
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

  //Size search
  $("#sz1").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/sz/1", function(data) {
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

  $("#sz2").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/sz/2", function(data) {
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

  $("#sz3").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/sz/3", function(data) {
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

  //Personality Search
  $("#pers1").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/pers/1", function(data) {
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

  $("#pers2").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/pers/2", function(data) {
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

  $("#pers3").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/pers/3", function(data) {
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

  $("#pers4").on("click", function() {
    console.log("click!");
    $("#all-dogs").empty();
    $.get("/api/pers/4", function(data) {
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

  // $(".filter").on("click", function() {
  //   criteria = this.id;
  //   // $("#all-dogs").empty()
  //   $.get("/api/" + CRITRE, function(data) {
  //     console.log(data);
  //     for (var i = 0; i < data.length; i++) {
  //       var wellSection = $("<div>");
  //       wellSection.addClass("well");
  //       wellSection.attr("id", "character-well-" + i);
  //       $("#all-dogs").prepend(wellSection);
  //       $("#character-well-" + i).append("<h2>" + data[i].dogName + "</h2>");
  //       $("#character-well-" + i).append("<h3>Breed: " + data[i].breed + "</h4>");
  //       $("#character-well-" + i).append("<img src= '" + data[i].pic + "' id='dog-pic'>");
  //     }
    });
  });
=======
    });
  });
>>>>>>> d9279fa85e6fb51018fb517d06bd4ea7869e478d
});