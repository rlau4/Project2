var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    db.Dog.findAll({}).then(function(dbDog) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbDog
      });
    });
=======
    res.render("index");
>>>>>>> 7ac4a10a4accf03b1f89c1cf365872be2f933d94
  });

  //Load signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Load login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
