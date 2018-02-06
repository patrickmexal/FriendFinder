var express = require("express");
var app = express();
var bodyParser = require("body-parser")
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(function (req, res) {
	res.setHeader("content-type", "text-plain")
	res.write("you posted:\n")
	res.end(JSON.stringify(req.body, null, 2))
})

