const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000; //falsy value
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(request, response){
    console.log('routing root', request);
    response.render('index');
});
app.get('/cars', function(request, response){
    console.log('routing root', request);
    response.render('cars');
});
app.get('/cats', function(request, response){
    console.log('routing root', request);
    response.render('cats');
});
app.get('/form', function(request, response){
    console.log('routing root', request);
    response.render('form');
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));