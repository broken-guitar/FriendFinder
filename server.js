
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

// include api routes
require("./app/routing/apiRoutes.js")(app, path);
// include html routes
require("./app/routing/htmlRoutes.js")(app, path);


app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
})