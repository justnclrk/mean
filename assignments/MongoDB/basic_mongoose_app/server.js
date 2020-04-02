const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


const port = process.env.PORT || 8000; //falsy value
const app = express();

mongoose.connect('mongodb://localhost/basic_mongoose')
mongoose.connection.on('connected', () => console.log('connected to mongodb!'))

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("static"));
app.use(express.static("stylesheets"));

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
const User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

app.get('/', function(request, response) {
    User.find({})
        .then(users =>{
            response.render('index', { users });
        })
        .catch(error => {
            //handle error
            console.log(error);
        });
});

app.post('/users', function(request, response) {

    User.create(request.body)
        .then(user => {
            console.log('sucessfully added a user!', user);
            response.redirect('/');
        })
        .catch(error => {
            console.log('something went wrong', error);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));