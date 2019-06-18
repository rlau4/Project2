var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  //Load signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Load login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Load dashboard
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
