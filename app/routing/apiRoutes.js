var friendData = require("/data/friends.js");

module.exports = function(app) {
	app.get("/data/friends.js", function(req, res) {
		res.json(friendData);
	})
}
console.log(friendData);