// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

//Google Map Api
var geocoder;
var map;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var parks = [
  ["Freedom Barkway", "523 Highland Ave NE, Atlanta, GA 30312", 33.761089, -84.370102],
  ["Fetch Park & Ice House", "520 Daniel St SE, atlanta, GA", 33.752010, -84.370760],
  ["Pet Yard Indoor Dog Park", "1100 Peachtree St NE, atlanta, GA", 33.784870, -84.383400],
  ["Piedmont Dog Park", "502 Amsterdam Ave, atlanta, GA", 33.787550, -84.347740],
  ["Oakhurst Dog Park", "450 E Lake Dr, Decatur, GA", 33.760390, -84.309170],
  ["Brook Run Dog Park", "4770 N Peachtree Rd, atlanta, GA", 33.934520, -84.297110],
  ["Canine Crossing Dog Park", "4951 Camp Dr, atlanta, GA", 33.774370, -84.240030],
  ["South Bend Dog park", "2002 Lakewood Ave, atlanta, GA", 33.719350, -84.382250],
  ["Chattapoochee Dog Park", "4291 Rogers Bridge Rd, Duluth, GA", 34.028940, -84.140540],
  ["Lake Court Dog Park", "3500 Lake Dr SE, Smyrna, GA", 33.863730, -84.528540]
];
var image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAY1BMVEX///8AAACbm5uMjIxNTU15eXnKysrCwsIbGxtJSUksLCwEBAT19fXPz89TU1Pd3d3p6emkpKSysrJmZmZxcXEVFRUODg7W1tZaWlo8PDy4uLjv7+/j4+OsrKyEhIQmJiYzMzP+j2LqAAAEw0lEQVRoge1aiXKjOhDMcGPA3IdkDP7/r1wdgIWMBUTO22w9dVUqY0rqRmJm1CH++jIwMDAw+H8gKe5+/DE2/373jo7tXWC4Hp6hQlJytrI9MtoPyNCooRNsfe2c8jSM7b4/uqB3iZPWt0ng6mpbhGTw29anu2ntjW4bCHwe9t2B8WpgADRtd3IB8HeGVwDLo76R8XriEUA/xz1AqB6drbba01w6WXjx/JQL69oEGZAIHxGUOuIDXISC7S8wKIe7gDLhYwXo9n3tuARH/NztLKUCR2wu5Nazt2P3xa/QiZ/LHXFp5aV65XF2u90UnbBcp9jeyu/rpHhAtSHZ+oXdPRpYUD86G/vpy0gbAmEpabDTtW4g3l0ht6U484bro4ZNBKi8Z6t9WFcL6Vo7LZZ0IjzHWb2u88TuFiVU2jnG2Cc/OB/Kx3LdFjvJKBRPQk4LtfZXRsZb/PbxKPSkmzcdN2M55FsLiD3LDfkQexFsySkx7R15oM3rg5HgkXMlJE/QKoVu3NuMt0F22yvm3tKiY8/kmk/bT0+KzvKxdQVhS98T4GDZW5uni893uyqOlF2M+RblrEwyK1rY7nvTvTAYlzSOxmDMbxjRsCuWVIo3i0u4esvpPo12hi/BGAlsSLl2/JrDLJWG51P2KscZXvY+HRynejbm2KfyzSub4qiISb3YOYHdQEl/W5QDiTMGTlKsJxb8qti6mYNBFmUhcxir9RAOua2Fc9a+ngqc3E4n9jiiEpRdJJGkZJVdF0j3ZM+j2rnAvUaxdGvuSGkNOb8UroozfkBD7gWTjenTBX0JNanJrAEksrlzl0iW7nJR9LhNcfFgiqeWRyxHEy1oJhNASlnMRReiT4uztmPLicQ4/R8Wn3f2LoFdRFD/pDhd8tvpg1RJHxcn9XB9c4DHodRAz4v3MUVbk0XQQN52srPs9oRcZ/lOr71me8Q5PHq2sUgtHjlXijCCR0cDck5ICcd2xK+DFWqfT5cSDjrORo4qFnSNUnwDW9nuyoNYqb1k+waUK+/KNYK1eMR6To8A5QIQd36OnO0gkZXqlQeyX3TWCUcyusKFI6UWTUOMK2ldS8I9cSjbn5CyPXZej5Cv5bhZ2e7Pi39lbk2PanmmTSxX464nf16cujlvo9Jjz5Of2E+IH8Y/L468b6I8Lf5aaho4KV7nxQr4sS+hAJbYVH+tbbZX5H8T3RabRm8/hdO9vfZbCuIQ7ZQGKdIRbxhHSyxvwYJ0PJJw/TszcU78w07GiBtxI74t3vDAW14L7VjncLHOLLjWWh2Oc6DZOl+1rPNZ8XPttSmrFdxAS9yV2Got63xO/B+3UUbciP+g+N8stQ3rrNNktK3zf9de5xeL9P/I08tFHfEn2/yqcsc6J0nCrDMNEj3rHKWUo71T68wiY52NuBH/DeJLqU3/hdTq7ZN1bgHSI+IRCimI2b2wINSzzs7MxmmJI/+1vb2p3BWGUUt8kNiMdTbiRvw3iBvr/HesM4cQaFnnFza1daYWNylqGLjZ1bPOjCMh1vmeGOtsxI34rxH/qHWexA9b52tH4USAWNDpvXvlHCFpkzw6/dZ559vRSvEzvT3jXy1ZY+974W+RbLEpvnwab+C72p9mMzAwMDA4ij9VI2/VwvluTwAAAABJRU5ErkJggg=="

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 33.748997, lng: -84.387985 },
    zoom: 11,
    zoomControl: true,
    scaleControl: true,
    fullscreenControl: false,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b0d5ce"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0e1626"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }
    ]
  });
  setMarkers(map);
};
var shape = {
  coords: [1, 1, 1, 20, 18, 20, 18, 1],
  type: 'poly'
};

function setMarkers(map) {
  for (var i = 0; i < parks.length; i++) {
    var park = parks[i];
    var marker = new google.maps.Marker({
      position: { lat: park[2], lng: park[3] },
      map: map,
      icon: Image,
      label: labels[labelIndex++ % labels.length],
      shape: shape,
      title: park[0] + " || " + park[1],
      zIndex: park[3]
    });
  }
}
initMap();

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
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
var handleFormSubmit = function (event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);