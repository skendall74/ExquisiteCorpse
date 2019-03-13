var db = require("../models");

// Callback function to return all data from specified database table
const getAll = (tableName) => {
  return new Promise((resolve, reject) => {
    db[tableName].findAll({}).then((result) => {
      resolve(result);
    })
  })
};

// Callback function to return one data from specified database table
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

// Callback function to return one story from specified database table
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
};

module.exports = function (app) {
  // CURRENT USER Posts a Paragraph Once Varified
  app.get("/api/ecorpse/:id?", (req, res) => {
    let returnData = {};
    let id;
    console.log(req.params.id);

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
      res.json(returnData);
    });
  });

  app.post("/api/users", (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;

    console.log(first_name, last_name, email);
  });
  
  // /POST to Editor
  app.get("/api/editor", function (req, res) {
    db.Post.create({
      where: {
        id: id,
        story_id: id
      }
    }).then(function (dbelement) {
      res.json(dbelement);
    });
  });

  // DELETE route for deleting posts body of editor 
  app.delete("/api/editor", function (req, res) {
    db.element.destroy({
      where: {
        id: req.body.id,
        story_id: req.body.story
      }
    }).then(function (dbelement) {
      res.json(dbelement);
    });
  });

  // DELETE route for deleting posts inbody of editor
  app.delete("/api/editor", function (req, res) {
    db.element
      .destroy({
        where: {
          id: req.body.id
        }
      })
      .then(function (dbelement) {
        res.json(dbelement);
      });
  });

  // PUT route for updating body of editor
  app.put("/api/editor", function (req, res) {
    db.element
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbelement) {
        res.json(dbelement);
      });
  });
};