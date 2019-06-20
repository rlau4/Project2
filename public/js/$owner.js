$(document).ready(function() {
  var API = {
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
});
