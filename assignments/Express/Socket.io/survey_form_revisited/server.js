const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static("stylesheets"));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(3000, function() {
	console.log("listening on port 3000");
})
const route = require('./routes/index.js')(app, server);