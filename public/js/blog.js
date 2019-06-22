$(document).ready(function() {
  /* global moment */
  // Getting jQuery references to the Talk body, title, form, and Owner select
  var bodyInput = $("#talk-body");
  // Adding an event listener for when the form is submitted
  $("#add-dog").on("click", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a Talk)
  var url = window.location.search;
  var TalkId;
  // Sets a flag for whether or not we're updating a Talk to be false initially
  var updating = false;
  var OwnerId = 1;
  // If we have this section in our url, we pull out the Talk id from the url
  // In '?Talk_id=1', TalkId is 1
  if (url.indexOf("?Talk_id=") !== -1) {
    TalkId = url.split("=")[1];
    getTalkData(TalkId, "Talk ");
  }
  // Otherwise if we have an Owner_id in our url, preset the Owner select box to be our Owner
  else if (url.indexOf("?owner_id=") !== -1) {
    ownerId = url.split("=")[1];
  }

  // Getting the owners, and their Talks
  getTalks();

  // A function for handling what happens when the form to create a new Talk  is submitted
  function handleFormSubmit(event) {
    console.log("test");
    event.preventDefault();
    // Wont submit the Talk  if we are missing a body, title, or owner
    if (!bodyInput.val().trim()) {
      console.log("no bodyinput");
      return;
    }
    // Constructing a newTalk  object to hand to the database
    var newTalk = {
      body: bodyInput.val().trim(),
      OwnerId: window.sessionStorage.sessionName
    };

    // If we're updating a Talk  run updateTalk  to update a Talk
    // Otherwise run submitTalk  to create a whole new Talk
    if (updating) {
      newTalk.id = TalkId;
      updateTalk(newTalk);
    } else {
      submitTalk(newTalk);
    }
  }

  // Submits a new Talk  and brings user to blog page upon completion
  function submitTalk(Talk) {
    $.post("/api/talks", Talk, function() {
      window.location.href = "/blog";
    });
  }

  // Gets Talk  data for the current Talk  if we're editing, or if we're adding to an owner's existing Talk s
  function getTalkData(id, type) {
    var queryUrl;
    switch (type) {
      case "Talk ":
        queryUrl = "/api/Talks/" + id;
        break;
      case "owner":
        queryUrl = "/api/owners/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.OwnerId || data.id);
        // If this Talk exists, prefill our cms forms with its data
        bodyInput.val(data.body);
        ownerId = data.OwnerId || data.id;
        // If we have a Talk  with this id, set a flag for us to know to update the Talk
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given Talk , bring user to the blog page when done
  function updateTalk(Talk) {
    $.ajax({
      method: "PUT",
      url: "/api/Talks",
      data: Talk
    }).then(function() {
      window.location.href = "/blog";
    });
  }
  // blogContainer holds all of our talks
  var blogContainer = $(".blog-container");
  var talkCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleTalkDelete);
  $(document).on("click", "button.edit", handleTalkEdit);
  // Variable to hold our talks
  var talks;

  // The code below handles the case where we want to get blog talks for a specific owwner
  // Looks for a query param in the url for OwnerId
  var url = window.location.search;
  var OwnerId;
  if (url.indexOf("?OwnerId=") !== -1) {
    OwnerId = url.split("=")[1];
    getTalks(OwnerId);
  }
  // If there's no OwnerId we just get all talks as usual
  else {
    getTalks();
  }

  // This function grabs talks from the database and updates the view
  function getTalks(owner) {
    OwnerId = owner || "";
    if (OwnerId) {
      OwnerId = "/?OwnerId=" + OwnerId;
    }
    $.get("/api/talks" + OwnerId, function(data) {
      // console.log("Talks", data);
      talks = data;
      if (!talks || !talks.length) {
        displayEmpty(owner);
      } else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete talks
  function deleteTalk(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/talks/" + id
    }).then(function() {
      getTalks(talkCategorySelect.val());
    });
  }

  // InitializeRows handles appending all of our constructed Talk HTML inside blogContainer
  function initializeRows() {
    blogContainer.empty();
    var talksToAdd = [];
    for (var i = 0; i < talks.length; i++) {
      talksToAdd.push(createNewRow(talks[i]));
    }
    blogContainer.append(talksToAdd);
  }

  // This function constructs a Talk's HTML
  function createNewRow(Talk) {
    var formattedDate = new Date(Talk.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var updateDate = new Date(Talk.updatedAt);
    updateDate = moment(updateDate).format("MMMM Do YYYY, h:mm:ss a");
    var newTalkCard = $("<div>");
    newTalkCard.addClass("card");
    var newTalkCardHeading = $("<div>");
    newTalkCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newTalkTitle = $("<h2>");
    var newTalkDate = $("<small>");
    var newUpdateDate = $("<small class='new'>");
    var newTalkOwner = $("<h5>");
    newTalkOwner.text("Written by: " + Talk.Owner.name);
    newTalkOwner.css({
      float: "right",
      color: "blue",
      "margin-top": "-10px"
    });
    var newTalkCardBody = $("<div>");
    newTalkCardBody.addClass("card-body");
    var newTalkBody = $("<p>");

    newTalkBody.text(Talk.body);
    newTalkDate.text("Talked: " + formattedDate);
    newTalkTitle.append(newTalkDate);
    if (formattedDate !== updateDate) {
      newUpdateDate.text("\n edited: " + updateDate);
      newTalkTitle.append(newUpdateDate);
    }
    newTalkCardHeading.append(deleteBtn);
    newTalkCardHeading.append(editBtn);
    newTalkCardHeading.append(newTalkTitle);
    newTalkCardHeading.append(newTalkOwner);
    newTalkCardBody.append(newTalkBody);
    newTalkCard.append(newTalkCardHeading);
    newTalkCard.append(newTalkCardBody);
    newTalkCard.data("Talk", Talk);
    return newTalkCard;
  }

  // This function figures out which Talk we want to delete and then calls deleteTalk
  function handleTalkDelete() {
    var currentTalk = $(this)
      .parent()
      .parent()
      .data("Talk");
    deleteTalk(currentTalk.id);
  }

  // This function figures out which Talk we want to edit and takes it to the appropriate url
  function handleTalkEdit() {
    var currentTalk = $(this)
      .parent()
      .parent()
      .data("Talk");
    window.location.href = "/message?talks_id=" + currentTalk.id;
  }

  // This function displays a message when there are no talks
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Owner #" + id;
    }
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html(
      "No talks yet" +
        partial +
        ", navigate <a href='/message" +
        query +
        "'>here</a> in order to get started."
    );
    blogContainer.append(messageH2);
  }
});

//ADDLATER needs to be filled in with "message"