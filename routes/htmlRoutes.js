var db = require("../models");

module.exports = function(app) {

  // Callback function to return all data in specified table
  const getData = (tableName) => {
    return new Promise((resolve, reject) => {
      db[tableName].findAll({}).then((result) => {
        resolve(result);
      })
    })
  };

  // Load index page
  app.get("/", function(req, res) {
    let returnData = {};

    // Single promise that resolves once all of the promises passed as an iterable have resolved
    Promise.all([
      getData("stories"),
      getData("element")
    ]).then((data) => {
      // Stringifies data
      let jsonString = JSON.stringify(data);

      // Converts data string into object and then places into an array
      let dataArray = JSON.parse(jsonString);

      // Stores returned data into object to be passed to front-end
      returnData = {
        stories: dataArray[0],
        elements: dataArray[1]
      }

      console.log(returnData);
      res.render("Index", returnData);
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
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
