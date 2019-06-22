// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
//Google Map Api

$("#map").attr(
  "src",
  "https://maps.googleapis.com/maps/api/js?key=" + google.map
);
var map;
var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var parks = [
  [
    "Freedom Barkway",
    "523 Highland Ave NE, Atlanta, GA 30312",
    33.761089,
    -84.370102
  ],
  [
    "Fetch Park & Ice House",
    "520 Daniel St SE, atlanta, GA",
    33.75201,
    -84.37076
  ],
  [
    "Pet Yard Indoor Dog Park",
    "1100 Peachtree St NE, atlanta, GA",
    33.78487,
    -84.3834
  ],
  ["Piedmont Dog Park", "502 Amsterdam Ave, atlanta, GA", 33.78755, -84.34774],
  ["Oakhurst Dog Park", "450 E Lake Dr, Decatur, GA", 33.76039, -84.30917],
  [
    "Brook Run Dog Park",
    "4770 N Peachtree Rd, atlanta, GA",
    33.93452,
    -84.29711
  ],
  [
    "Canine Crossing Dog Park",
    "4951 Camp Dr, atlanta, GA",
    33.77437,
    -84.24003
  ],
  [
    "South Bend Dog park",
    "2002 Lakewood Ave, atlanta, GA",
    33.71935,
    -84.38225
  ],
  [
    "Chattapoochee Dog Park",
    "4291 Rogers Bridge Rd, Duluth, GA",
    34.02894,
    -84.14054
  ],
  ["Lake Court Dog Park", "3500 Lake Dr SE, Smyrna, GA", 33.86373, -84.52854]
];
var image = {
  url:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAaVBMVEX///8jHyAAAAC2tra8u7zw8PAaFRZjYmIcGBmKiYkQCAoNAwdOS0wgGxyOjY4VDxAxMDB5eHnHx8dxcHD4+PhDQEGmpqbe3t7q6urS0tIIAADk5OSgoKCbmppWVVWwr68sKCmAgIA7OTnWb6TjAAAEi0lEQVRoge2b2ZaiMBCGk9JmFcMOIgj4/g85YRHDEghqYC6om+lz2uHrJH/9KcoEoVdEoRdgiRF4YYSG4QYACUgN+vjA7UFjFQywy/R0lhantLQpRI3f1JttwsP1R1Pw4/DdB5j2raNig+SymU3kxMAtN7aN4jb/6d8FHaLdzLNqks2olEtMtfrXBdhohpvIASo9B8ZjSypCDyOgLtHANww6vREKoZCeOf3wCwiRlzjbUhFyEg8FkG2NzSBAGE5bY3PAe2BPB/bAHthfY8t0HyyYqdTdgYMlGJRrPPk/OBGu2js5WANjC7B+F3+QTgvPb7FpYtIi3kqsclzF87CmApez6MpwlHwvtcSiZJM4gmCd/qEaBCcxMDeB7jquwJYBnhC4wlbgZygCnsnb+FqDMQFVoJptsJUkCoEkmLULP7WgAisCcnlhKzC5LoGXXCpXWvDlLIqlkYD+9xUWobMNWr1qxayF9rAYU0nMZZ+IJ7sXUOrJ00Jh7IIkxLYCVwXSgLlyGWErMFcSojvQzQOj0Wk2vWoTWAo2OWDxjS9yTLMBT5r1JJarxTX77b3ElaynzZqD5VjXum0+1osaTD1zCOZia3A4WJm11UWcFbV1jTxzBltNkJ32wOuLGj+tR0x12gPPYiuwwr65f1RL5UXtIDRB3pm5gMUY2Cz+sIRrrYvq9JUgS1il1zD4uHJsravzzCVsv2HwRcF6e1kXPi1j+4P9rk6OOusKaS01P9i+afCx8ztXG/cSkhpsn5uxc0IL+o7Bw8YP+ylUKsd6VQooajfp04Md9L04WF8jFq2LFrb2Fnwt2g5T5BnGJNWyByPgYPN6pTQ2MWfiL1XbnyJHMa0WxQQMX2442CxpBQiqSHhqlx53XWvANhPFUCgc7K3TpSIWEHQLEl+VxCLl7PzwJOWANZsQY60ySvBTEz7DIlebT8QJ3QB+6zX8EEtfhGDJ3cdg0Rb8nEv9lbXtrhzxty8jNCJ17UzT18QiXTa4JU8+J2u5lVNyqktxrL8eKwJewv6tnuUWPN+iloTF5MAe2AN7YA/sgZWB1aaCrTXhKgFbPC4TYTNcT8Y2r0y2mK/dC5B2mYV+jJ187Bs7/fuvsaMXR5lY7f2jRSaqYUnYC1Osm/pWWONcMFKFcdtRDhZuJ2boijr6rCSsiwJmeccnU6RhI2a4VrEZFnlMS2R0SEQe1mfTeKgqeVgUMlwyUJVELAqY5B2oSibWZW2r39KTiZ1RlVTs3WK8SmNVJRWLMmaaDbZ2kYv1Ga+y2LaeXGxPVez5yF9iyRiLVDKN7dpnytIBxsVOzaWbUaWTT9wN12LPDL43qKndeBUWpa9nEWYEnaqAff7bOWGpDb38FcWzWTElYXPl0rSrzOfwK7TxH/Mh1n8AUQjYvQH4KiRG0jvhXEUO9LPJQmkuhqXKdVRv9F1olJXZeCrjzFOvAuc0/qvzUgf259idjs7udFB4p2PROx0C3+nI+14H/He6zoBim+ANL2+Q9vIGullbXlWx3ldkdrmY015DKpzsJC/yzCkG15DQTpeuqtj0itk/7ZRRq/fS9sQAAAAASUVORK5CYII=",
  scaledSize: new google.maps.Size(25, 25), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(0, 0) // anchor
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.748997, lng: -84.387985 },
    zoom: 11,
    zoomControl: true,
    scaleControl: true,
    fullscreenControl: false,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8ec3b9"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1a3646"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#64779e"
          }
        ]
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#334e87"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6f9ba5"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3C7680"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#304a7d"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#2c6675"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#255763"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#b0d5ce"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#3a4762"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#0e1626"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#4e6d70"
          }
        ]
      }
    ]
  });
  setMarkers(map);
}
var shape = {
  coords: [1, 1, 1, 20, 18, 20, 18, 1],
  type: "poly"
};
function setMarkers(map) {
  for (var i = 0; i < parks.length; i++) {
    var park = parks[i];
    var marker = new google.maps.Marker({
      position: { lat: park[2], lng: park[3] },
      map: map,
      icon: image,
      shape: shape,
      title: park[0] + " || " + park[1],
      zIndex: park[3]
    });
  }
}
initMap();

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};
// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);
      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      $li.append($button);
      return $li;
    });
    $exampleList.empty();
    $exampleList.append($examples);
  });
};
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };
  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }
  API.saveExample(example).then(function() {
    refreshExamples();
  });
  $exampleText.val("");
  $exampleDescription.val("");
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");
  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);