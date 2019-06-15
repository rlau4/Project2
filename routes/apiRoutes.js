var db = require("../models");

module.exports = function(app) {
  // Get all dogs
  app.get("/api/all", function(req, res) {
    db.Dog.findAll({}).then(function(dbDog) {
      res.json(dbDog);
    });
  });

  // Owners Post
  app.post("/api/owners", function(req, res) {
    db.Owner.create(req.body).then(function(dbOwner) {
      res.json(dbOwner);
    });
  });

  //Dog post
  app.post("/api/dogs", function(req, res) {
    db.Example.create(req.body).then(function(dbDog) {
      res.json(dbDog);
    });
  });

  // Delete a dog entry
  app.delete("/api/dogs/:id", function(req, res) {
    db.Dog.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });
};
