const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.static("static"));
app.use(express.static("stylesheets"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views'))); //get index in views

require('./server/config/database');
app.use(require('./server/config/routes'));

app.get('/', (request, response) => {
    response.render('index');
});

app.listen(port, () => console.log(`Express server listening on port ${ port }`));