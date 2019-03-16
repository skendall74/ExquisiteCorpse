var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("login");
  });

  // Load editor page
  app.get("/editor/", function (req, res) {
    res.render("editor");
  });

  // Load about page
  app.get("/about", function (req, res) {
    res.render("about");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
