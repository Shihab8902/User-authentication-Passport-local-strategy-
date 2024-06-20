const express = require("express");

require("./config/passport")
const app = express();
const applyMiddlewares = require("./middlewares");
const viewRoutes = require("./routes/view");
const userRoutes = require("./routes/userRoutes");
const createSession = require("./config/session");
const session = require("express-session");
const passport = require("passport");


//Middlewares
app.set("view engine", "ejs");
applyMiddlewares(app);


//Use express session
createSession(app);
//Initialize passport js
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use(viewRoutes);
app.use(userRoutes);




module.exports = app;