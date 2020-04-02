const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000; //falsy value
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("static"));
app.use(express.static("stylesheets"));
app.use(session({secret: 'steve', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 }}))

const views = session.views;

app.get('/', function(request, response, next){
    request.session.views = (request.session.views || 0) + 1;
    response.render('index', { views: request.session.views});
});

app.get('/addtwo', function(request, response){
    request.session.views = (request.session.views || 0) + 1;
    response.redirect('/');
});

app.get('/reset', function(request, response){
    request.session.destroy();
    response.redirect('/');
});

app.listen(port, () => console.log(`Listening on port ${port}`));