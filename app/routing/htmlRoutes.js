var path = require("path");

module.exports = function(app) {

	app.get("/home.html", function(req, res) {
		res.sendFile(path.join(__dirname + "/home.html"));
	});

	app.get("/survey.html", function(req, res) {
		res.sendFile(path.join(__dirname + "/survey.html"));
	});

	app.get("/home.html", function(req, res) {
		res.sendFile(path.join(__dirname + "/home.html"));
	});
}