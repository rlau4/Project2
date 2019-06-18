$(document).ready(function() {
  var $addDog = $("#addDog");
  var $inputDogName = $("#input-dog-name");
  var $inputDogBreed = $("#input-dog-breed");
  var $inputDogSize = $("#input-dog-size");
  var $inputDogPic = $("#input-dog-pic");
  var $inputDogPersonality = $("#input-dog-personality");
  var $inputDogAge = $("#input-dog-age");

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
    getDogs: function() {
      return $.ajax({
        url: "api/dogs",
        type: "GET"
      });
    },
    deleteDogs: function(id) {
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
