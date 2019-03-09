var db = require("../models");

module.exports = function (app) {
  // CURRENT USER Posts a Paragraph Once Varified
  app.get("/api/editor", function (req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.element
      .findAll({
        where: query,
        include: [db.user_id]
      })
      .then(function (dbelement) {
        res.json(dbelement);
      });

  });

  // a Paragraph Once Varified
  app.get("/api/editor", function (req, res) {
    db.element
      .findOne({
        where: {
          id: req.params.id
        },
        include: [db.user_id]
      })
      .then(function (dbelement) {
        res.json(dbelement);
      });
  });

  // DELETE route for deleting posts inbody of editor 
  app.delete("/api/editor", function (req, res) {
    db.element.destroy({
      where: {
        id: req.body.id
      }
    }).then(function (dbelement) {
      res.json(dbelement);
    });
  });

  // PUT route for updating body of editor
  app.put("/api/editor", function (req, res) {
    db.element.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbelement) {
        res.json(dbelement);
      });
  });
};