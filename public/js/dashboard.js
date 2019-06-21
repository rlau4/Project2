$.get("/api/all", function (data) {
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
$(document).ready(function () {
    //Age search
    $("#age1").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/age1", function (data) {
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

    $("#age2").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/age2", function (data) {
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

    $("#age3").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/age3", function (data) {
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
    $("#sz1").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/sz1", function (data) {
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

    $("#sz2").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/sz2", function (data) {
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

    $("#sz3").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/sz3", function (data) {
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
    $("#pers1").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/pers1", function (data) {
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

    $("#pers2").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/pers2", function (data) {
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

    $("#pers3").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/pers3", function (data) {
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

    $("#pers4").on("click", function () {
        console.log("click!");
        $("#all-dogs").empty();
        $.get("/api/pers4", function (data) {
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






});
