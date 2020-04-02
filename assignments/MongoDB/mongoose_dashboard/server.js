const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const flash = require('express-flash');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();

mongoose.connect('mongodb://localhost/mongoose_dashboard')
mongoose.connection.on('connected', () => console.log('connected to mongodb!'))

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("static"));
app.use(express.static("stylesheets"));
app.use(session({secret: 'steve', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 }}))

const EmeraldSchema = new Schema({
    color: {
        type: String,
        required: true,
        minlength: 3,
    },
    location: {
        type: String,
        required: true,
        minlength: 6,
    },
}); 

const Emerald = mongoose.model('Emerald', EmeraldSchema);

app.use(flash());

//READ ALL (INDEX)
app.get('/', function(request, response) {
    Emerald.find({})
        .then(emeralds => {
            response.render('index', { emeralds });
        })
        .catch(error => {
            console.log(error);
        });
});

//READ
app.post('/:id', function(request, response){
    Emerald.find({_id: request.params.id })
    .then(emeralds => {
        response.render('info', { emeralds });
    })
    .catch(error => {
        console.log(error);
    });
});

//CREATE ROUTE
app.get('/new', function(request, response){
    response.render('new');
});

//CREATE FUNCTION
app.post('/', function(request, response) {
    console.log(request.body)
    Emerald.create(request.body)
    .then(emerald => {
        console.log('successfully added an emerald!', emerald);
        response.redirect('/')
    })
    .catch(error => {
        console.log('We have an error!', error);
        for (const key in error.errors){
            request.flash('user_error', error.errors[key].message);
            response.redirect('/')
        }
    })
});

//EDIT
app.get('/:id/edit', function(request, response){
    Emerald.find({ _id: request.params.id })
    .then(emerald => {
        response.render('edit', { emerald });
    })
    .catch(error => {
        console.log(error);
    });
});

//EDIT ROUTE
app.post('/:id', function(request, response){
    Emerald.update({ _id: request.params.id}. request.body, function(){
        console.log('edit')
        response.redirect('/')
    })
});
//     Emerald.update({ _id: request.params.id })
//         .then(emerald => {
//             console.log('successfully updated emerald!', emerald);
//             response.redirect('/')
//         })
//         .catch(error => {
//             console.log('We have an editing error!', error);
//             for (const key in error.errors){
//                 request.flash('user_error', error.errors[key].message);
//                 response.redirect('/edit')
//             }
//         })
// });

//DESTROY
app.post('/:id/delete/', function(request, response){
    Emerald.remove({ _id: request.params.id })
    console.log('destroyed!!')
    response.redirect('/');
});

app.listen(port, () => console.log(`Listening on port ${port}`));