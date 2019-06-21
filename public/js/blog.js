$(document).ready(function() {
  /* global moment */

  // blogContainer holds all of our talks
  var blogContainer = $(".blog-container");
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);
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
      console.log("Talks", data);
      talks = data;
      if (!talks || !talks.length) {
        displayEmpty(owner);
      } else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete talks
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/talks/" + id
    }).then(function() {
      getTalks(postCategorySelect.val());
    });
  }

  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    blogContainer.empty();
    var talksToAdd = [];
    for (var i = 0; i < talks.length; i++) {
      talksToAdd.push(createNewRow(talks[i]));
    }
    blogContainer.append(talksToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var updateDate = new Date(post.updatedAt);
    updateDate = moment(updateDate).format("MMMM Do YYYY, h:mm:ss a");
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newUpdateDate = $("<small class='new'>");
    var newPostOwner = $("<h5>");
    newPostOwner.text("Written by: " + post.Owner.name);
    newPostOwner.css({
      float: "right",
      color: "blue",
      "margin-top": "-10px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");

    newPostBody.text(post.body);
    newPostDate.text("posted: " + formattedDate);
    newPostTitle.append(newPostDate);
    if (formattedDate !== updateDate) {
      newUpdateDate.text("\n edited: " + updateDate);
      newPostTitle.append(newUpdateDate);
    }
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostOwner);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }

  // This function figures out which post we want to delete and then calls deletePost
  function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handlePostEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/ADDLATER?talks_id=" + currentPost.id;
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
        ", navigate <a href='/ADDLATER" +
        query +
        "'>here</a> in order to get started."
    );
    blogContainer.append(messageH2);
  }
});
