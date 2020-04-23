
// define home.html and survey.html endpoints for export
module.exports = function(app, path) {
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}