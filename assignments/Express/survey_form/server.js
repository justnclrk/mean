const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 7000; //falsy value
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("static"));
app.use(express.static("stylesheets"));

app.get('/', function(request, response){
    response.render('index');
});

app.post('/result', function(request, response){
    response.render('result', 
    { name: request.body.name, 
    dojo: request.body.dojo, 
    lang: request.body.lang, 
    comm: request.body.comm })
});

app.listen(port, () => console.log(`Listening on port ${port}`));