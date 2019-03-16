# Exquisite Corpse - Full Stack Application
## Overview
What is it? Exquisite Corpse. Exquisite corpse, also know as exquisite cadaver (from the original French term cadavre exquis), is a method by which a collection of images or words is collectiveley assembled from various users. The application uses Google Authentication to login/verify the user. Once the user logins, they can either create a new story or add to an existing story. 

The application uses HTML/CSS/Javascript/Bootstrap on the front end and Node/Express on the backend.

## Links
* [Live Heroku Site](https://ecorpse.herokuapp.com/ "Live Heroku Site")
* [GitHub for application](https://github.com/matking4509/Project2_eCorpse "GitHub for application")

## Technologies Used
- [x] HTML5/CSS3/Bootstrap/Handlebars/API
- [x] Javascript/jQuery/AJAX/Google Authentication
- [x] Node.js/Express
- [x] SQL/Sequelize
- [x] Node (dotenv, express, express-handlebars, mysql2, sequelize)
- [x] Heroku

## Design
1. The user logins to the application using the Google Authentication functionality.

2. `htmlRoutes.js` serves up the front-end handlebars of `index.handlebars`, `editor.handlebars`, `about.handlebars`, and `404.handlebars` pages.

3. `apiRoutes.js` handles all the API routes for the applications. There are three different APIs that are used to perform various functions. 
    * The `api/ecorpse` API allows the application to recieve all data from the database in the form of `getAll`,       `getElementStory`, and `getOneStory`.
    * The `api/users` API allows the application to either create a new user if no users already exists in the database or if the users already exists then the application allows them to login.
    * The `api/editor` API allows the user to either create a new story or add on to an existing story. When the API is called, it first takes the user's email and returns that user's associated user_id. This user_id is then associated to that users new story commit or their new commit to an existing story.
    
4. The application uses `.env` to store the database passwords adding a layer of security to the application. Preventing unwanted outside tampering to the application.

*![Main Page](https://raw.githubusercontent.com/matking4509/Project2_eCorpse/master/wireframe/img/main.png "Main Page")
*![Side Bar Page](https://raw.githubusercontent.com/matking4509/Project2_eCorpse/master/wireframe/img/sidebar.png "Side Bar Page")
*![Editor Page](https://raw.githubusercontent.com/matking4509/Project2_eCorpse/master/wireframe/img/editor.png "Editor Page")
*![About Page](https://raw.githubusercontent.com/matking4509/Project2_eCorpse/master/wireframe/img/about.png "About Page")
