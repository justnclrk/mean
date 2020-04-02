const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const flash = require('express-flash');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();

mongoose.connect('mongodb://localhost/quoting_dojo')
mongoose.connection.on('connected', () => console.log('connected to mongodb!'))

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("static"));
app.use(express.static("stylesheets"));
app.use(session({secret: 'steve', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 }}))

const QuoteSchema = new Schema({
    user: {
        type: String,
        required: true,
        minlength: 3,
    },
    quote: {
        type: String,
        required: true,
        minlength: 6,
    },
}, {
    timestamps: true,
}); 

const Quote = mongoose.model('Quote', QuoteSchema);

app.use(flash());

app.get('/', function(request, response) {
    response.render('index');
});

app.post('/quotes', function(request, response) {
    console.log(request.body);
    Quote.create(request.body)
        .then(quote => {
            console.log('sucessfully added a quote!', quote);
            response.redirect('/quotes')
        })
        .catch(error => {
            console.log("We have an error!", error);
            for (const key in error.errors){
                request.flash('user_error', error.errors[key].message);
                response.redirect('/')
            }
        })
});

app.get('/quotes', function(request, response) {
    Quote.find({})
        .then(quotes => {
            response.render('quotes', { quotes });
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));