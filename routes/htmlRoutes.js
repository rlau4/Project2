var path = require("path");

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
    // res.render("dashboard");
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

<<<<<<< HEAD
=======
  app.get("/alldogs", function(req, res){
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

>>>>>>> 9e6ca8d77f2fb9084c75f97c0832b73b77466702
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
