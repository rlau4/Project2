var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
  // Get all dogs
  app.get("/api/all", function (req, res) {
    db.Dog.findAll({}).then(function (dbDog) {
      res.json(dbDog);
    });
  });

  //Get All Owners
  app.get("/api/owners", function (req, res) {
    db.Owner.findAll({}).then(function (dbOwners) {
      res.json(dbOwners);
    });
  });

  //Pull the info of 1 specific Owner
  app.get("/api/owners/:id", function (req, res) {
    db.Owner.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbOwner) {
      res.json(dbOwner);
    });
  });

  //Pull the info of 1 specific dog
  app.get("/api/dogs/:id", function (req, res) {
    db.Dog.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDog) {
      res.json(dbDog);
    });
  });

  //Pull dogs based on age
  app.get("/api/age/:category", function (req, res) {
    db.Dog.findAll({
      where: {
        age: req.params.category
      }
    }).then(function (dbPup) {
      res.json(dbPup);
    });
  });

  //Find dogs based on size
  app.get("/api/sz/:category", function (req, res) {
    db.Dog.findAll({
      where: {
        size: req.params.category
      }
    }).then(function (dbMd) {
      res.json(dbMd);
    });
  });


  //Find dogs based on personality
  app.get("/api/pers/:category", function (req, res) {
    db.Dog.findAll({
      where: {
        personality: req.params.category
      }
    }).then(function (dbPers1) {
      res.json(dbPers1);
    });
  });

  // Owners Post
  app.post("/api/owners", function (req, res) {
    db.Owner.create(req.body).then(function (dbOwner) {
      res.json(dbOwner);
    });
  });




  //Dog post
  app.post("/api/dogs", function (req, res) {
    db.Dog.create(req.body).then(function (dbDog) {
      res.json(dbDog);
    });
  });

  // Delete a dog entry
  app.delete("/api/dogs/:id", function (req, res) {
    db.Dog.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbDog) {
      res.json(dbDog);
    });
  });

  //Talk GET Route
  app.get("/api/talks", function(req, res) {
    var query = {};
    if (req.query.OwnerId) {
      query.OwnerId = req.query.OwnerId;
    }
    db.Talk.findAll({
      where: query,
      include: [db.Owner]
    }).then(function(result) {
      res.json(result);
    });
  });
  
  //Talk POST route
  app.post("/api/talks", function (req, res) {
    console.log("test");
    db.Owner.create(req.body).then(function (dbOwner) {
      res.json(dbOwner);
    });
  });
  
  //Talk DELETE route
  app.delete("/api/posts/:id", function(req, res) {
    db.Talk.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTalk) {
      res.json(dbTalk);
    });
  });
};