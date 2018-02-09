var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var path = require("path");
var PORT = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(function (req, res) {
	res.setHeader("content-type", "text-plain")
	res.write("you posted:\n")
	res.end(JSON.stringify(req.body, null, 2))
})
app.listen(PORT, function() {
	console.log("App listening on port: " + PORT);
})
