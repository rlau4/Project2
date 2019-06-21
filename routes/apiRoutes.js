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
  app.get("/api/age1", function (req, res) {
    db.Dog.findAll({
      where: {
        age: {
          [Op.lt]: 5,
        }
      }
    }).then(function (dbPup) {
      res.json(dbPup);
    });
  });

  app.get("/api/age2", function (req, res) {
    db.Dog.findAll({
      where: {
        age: {
          [Op.between]: [5, 11],
        }
      }
    }).then(function (dbMid) {
      res.json(dbMid);
    });
  });

  app.get("/api/age3", function (req, res) {
    db.Dog.findAll({
      where: {
        age: {
          [Op.gt]: [10],
        }
      }
    }).then(function (dbSnr) {
      res.json(dbSnr);
    });
  });

  //Find dogs based on size
  app.get("/api/sz/:vari", function (req, res) {
    db.Dog.findAll({
      where: {
        size: req.params.vari
      }
    }).then(function (dbMd) {
      res.json(dbMd);
    });
  });


  //Find dogs based on personality
  app.get("/api/pers1", function (req, res) {
    db.Dog.findAll({
      where: {
        personality: 1
      }
    }).then(function (dbPers1) {
      res.json(dbPers1);
    });
  });

  app.get("/api/pers2", function (req, res) {
    db.Dog.findAll({
      where: {
        personality: 2
      }
    }).then(function (dbPers2) {
      res.json(dbPers2);
    });
  });

  app.get("/api/pers3", function (req, res) {
    db.Dog.findAll({
      where: {
        personality: 3
      }
    }).then(function (dbPers3) {
      res.json(dbPers3);
    });
  });

  app.get("/api/pers4", function (req, res) {
    db.Dog.findAll({
      where: {
        personality: 4
      }
    }).then(function (dbPers4) {
      res.json(dbPers4);
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
};