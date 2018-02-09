var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var path = require("path");
var PORT = process.env.PORT || 3000;
 

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

require("/../routing/htmlRoutes.js")(app);
require("/../routing/apiRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on port: " + PORT);
})
