$.get("/api/all", function(data) {
    console.log(data);
      
      for (var i = 0; i < data.length; i++) {
       
        var wellSection = $("<div>");
        
        wellSection.addClass("well");
        
        wellSection.attr("id", "character-well-" + i);
        
        $("#all-dogs").prepend(wellSection);
        $("#character-well-" + i).append("<h2>" + data[i].dogName + "</h2>");
       
        $("#character-well-" + i).append("<h3>Breed: " + data[i].breed + "</h4>");
        
        $("#character-well-" + i).append("<img src= '" + data[i].pic+ "'>");
        
      }
    });