const express = require("express");
const app = express();
const applyMiddlewares = require("./middlewares");
const viewRoutes = require("./routes/view");
const userRoutes = require("./routes/userRoutes");


//Middlewares
app.set("view engine", "ejs");
applyMiddlewares(app);


//Routes
app.use(viewRoutes);
app.use(userRoutes);






module.exports = app;