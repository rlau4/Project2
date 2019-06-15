$(document).ready(function() {
  var $addDog = $("#addDog");
  var $inputDogName = $("#inputDogName");
  var $inputDogBreed = $("#inputDogBreed");
  var $inputDogSize = $("#inputDogSize");
  var $inputDogPic = $("#inputDogPic");
  var $inputDogPersonality = $("#inputDogPersonality");
  var $inputDogAge = $("#inputDogAge");

  var API = {
    saveDog: function(inputDog) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/dogs",
        data: JSON.stringify(inputDog)
      });
    },
    getExamples: function() {
      return $.ajax({
        url: "api/dogs",
        type: "GET"
      });
    },
    deleteExample: function(id) {
      return $.ajax({
        url: "api/dogs/" + id,
        type: "DELETE"
      });
    }
  };

  //creating the dog variable
  var handleAddDog = function(event) {
    event.preventDefault();

    var inputDog = {
      name: $inputDogName.val().trim(),
      breed: $inputDogBreed.val().trim(),
      size: $inputDogSize.val().trim(),
      pic: $inputDogPic.val().trim(),
      personality: $inputDogPersonality.val().trim(),
      age: $inputDogAge.val().trim()
    };

    //front end validation for user submitting all necessary dog info
    if (
      !(
        inputDog.name &&
        inputDog.breed &&
        inputDog.size &&
        inputDog.pic &&
        inputDog.personality &&
        inputDog.age
      )
    ) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveDog(inputDog).then(function() {
      refreshExamples(); ///////////////////////will need to fix this
    });

    $inputDogText.val("");
    $inputDogDescription.val("");
  };

  $addDog.on("click", handleAddDog);
});
