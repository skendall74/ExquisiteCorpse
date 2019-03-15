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

const createNew = (tableName, newItem) => {
  return new Promise((resolve, reject) => {
    db[tableName].create(newItem).then((result) => {
      resolve(result);
    })
  })
}

const userVerification = (tableName, email) => {
  return new Promise((resolve, reject) => {
    db[tableName].count({
      where: {
        email: email
      }
    }).then((result) => {
      resolve(result);
    })
  })
}

module.exports = function (app) {
  // CURRENT USER Posts a Paragraph Once Varified
  app.get("/api/ecorpse/:id?", (req, res) => {
    let returnData = {};
    let id;
    // console.log(req.params.id);

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

      // console.log(returnData);
      res.json(returnData);
    });
  });

  app.post("/api/users", (req, res) => {
    let user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }
    let userResult;

    Promise.all([
      userVerification("user", user.email)
    ]).then((data) => {
      userResult = data[0];

      if (userResult === 0) {
        Promise.all([
          createNew("user", user)
        ]).then((data) => {
          res.json(data);
        })
      } else if (userResult === 1) {
        console.log("Do nothing")
      } else {
        // console.log("Console duplicates")
      }
    });

  });

  // GET route for getting all of the posts
  app.get("/api/editor", function (req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Elements.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbElements) {
      res.json(dbElements);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/editor/:id", function (req, res) {
    db.Elements.findOne({
      where: {
        body: req.params.body,
        story: req.params.story_id
      },
      include: [db.User]
    }).then(function(dbElements) {
      res.json(dbElements);
    });
  });

  //POST route for saving a new post in editor to db
  app.post("/api/editor", function (req, res) {
    console.log(req.body);
    response = { one:"two" };
    res.json(response);
    // db.element.create(req.body).then(function (dbElements) {
    //   console.log(req.body)
    //   res.json(dbElements);
    // });
  });

  // DELETE route for deleting  users in db
  app.delete("/api/editor/:id", function (req, res) {
    db.Elements.destroy({
      where: {
        id: req.params.user_id
      }
    }).then(function(dbElements) {
      res.json(dbElements);
    });
  });

  // PUT route for updating users in db
  app.put("/api/editor", function (req, res) {
    db.Elements.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbElements) {
      res.json(dbElements);
    });
  });
};