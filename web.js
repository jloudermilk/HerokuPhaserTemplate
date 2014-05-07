"use strict";

var express = require("express");
var fs = require("fs");

var app = express();

// configure path root
	app.use(express.static(__dirname + "/public"));

// match get requests
app.get("/", function(_req, _res) {
	_res.render("./public/index.html");
});

var port = process.env.PORT || 7000;
app.listen(port, function() {
	console.log("Listening on " + port);
});