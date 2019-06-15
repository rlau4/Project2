var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    res.render("index");
=======
    db.Dog.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
>>>>>>> 82b134ba322f92375b831473b74ac817a85672d0
  });

  //Load signup page
  app.get("/signup", function(req, res) {
    res.render("/signup");
  });

  // Load login page
  app.get("/login", function(req, res) {
    res.render("/login");
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
