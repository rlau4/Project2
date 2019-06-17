$(document).ready(function() {
  var $addOwner = $("#addOwner");
  var $inputOwnerName = $("#inputOwnerName");
  var $inputOwnerEmail = $("#inputOwnerEmail");

  var API = {
    saveOwner: function(inputOwner) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/owners",
        data: JSON.stringify(inputOwner)
      });
    },
    getOwners: function() {
      return $.ajax({
        url: "api/owners",
        type: "GET"
      });
    },
    deleteOwner: function(id) {
      return $.ajax({
        url: "api/owners/" + id,
        type: "DELETE"
      });
    }
  };

  //creating the owner variable
  var handleAddOwner = function(event) {
    event.preventDefault();

    var inputOwner = {
      name: $inputOwnerName.val().trim(),
      email: $inputOwnerEmail.val().trim()
    };

    //front end validation for user submitting all necessary owner info
    if (!(inputOwner.name && inputOwner.email)) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveOwner(inputOwner).then(function() {
      refreshExamples(); ///////////////////////will need to fix this
    });

    $inputOwnerName.val("");
    $inputOwnerEmail.val("");
  };

  $addOwner.on("click", handleAddOwner);
});
