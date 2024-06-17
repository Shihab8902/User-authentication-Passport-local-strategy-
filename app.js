const express = require("express");
const app = express();
const applyMiddlewares = require("./middlewares");
const viewRoutes = require("./routes/view");


//Middlewares
app.set("view engine", "ejs");
applyMiddlewares(app);


//Routes
app.use(viewRoutes);





module.exports = app;