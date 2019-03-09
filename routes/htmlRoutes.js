var db = require("../models");

// Callback function to return all data in specified table
const getAll = (tableName) => {
  return new Promise((resolve, reject) => {
    db[tableName].findAll({}).then((result) => {
      resolve(result);
    })
  })
};

// Callback function to return one data to specified table
const getElementStory = (tableName, id) => {
  return new Promise((resolve, reject) => {
    db[tableName].findAll({
      where: {
        story_id: id
      }
    }).then((result) => {
      resolve(result);
    })
  })
};

const getOneStory = (tableName, id) => {
  return new Promise((resolve, reject) => {
    db[tableName].findOne({
      where: {
        id: id
      }
    }).then((result) => {
      resolve(result);
    })
  })
}

module.exports = function (app) {
  // Load index page
  app.get("/:id?", function (req, res) {
    let returnData = {};
    let id;

    if (req.params.id) {
      id = req.params.id;
    } else {
      id = 1;
    }

    // Single promise that resolves once all of the promises passed as an iterable have resolved
    Promise.all([
      getOneStory("stories", id),
      getAll("stories"),
      getElementStory("element", id)
    ]).then((data) => {
      // Stringifies data
      let jsonString = JSON.stringify(data);

      // Converts data string into object and then places into an array
      let dataArray = JSON.parse(jsonString);

      // Stores returned data into object to be passed to front-end
      returnData = {
        oneStory: dataArray[0],
        allStories: dataArray[1],
        elements: dataArray[2],
      }

      console.log(returnData);
      res.render("Index", returnData);
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
