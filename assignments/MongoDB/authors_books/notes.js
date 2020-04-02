const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const port = process.env.PORT || 8000;

const app = express();

mongoose.connect('mongodb://localhost/books_and_authors');
mongoose.connection.on('connected', () => console.log('Connected to MongoDB!'));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

const

const { Schema } = mongoose;
// const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A book title is required'],
        trim: true,
        minlength: [3, 'Book title length must be at least 3 chars']
    },
    author: {
        type: String,
        default: 'Unknown',
    },
    pages: {
        type: Number,
        required: [true, 'You must supply a page count!'],
},  }, {
        timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

mongoose.model('Book', bookSchema);
const Book = mongoose.model('Book');

const book = new Book({
    title: 'Catcher',
    author: 'J.K.',
    pages: 1,
});

// book.save()
//     .then(book => {
//         console.log('saved book', book);
//     })
//         .catch(error => {
//     //     if (error.errors.pages){

//     //     }
//     //     console.log('failed to save', error.errors.pages.message);
//     const errors = [];

//     Object.keys(error.errors).forEach(key => {
//         errors.push(error.errors[key].message);
//     });
//     //const errors = [];

//     //console.log(keys);
    
//     // for (let index = 0; index < keys.length; index++) {
//     //     errors.push(error.errors[keys[index]].message);
//     // }
//     console.log(errors);
//     // in express -- response.render('index', { errors })
//     });

app.get('/', function(request, response){
    Book.find({})
        .then(books => {
            console.log(books);

            response.send(books);
        })
        .catch(console.log);
});

app.listen(port, () => console.log(`Express server listening on port ${ port }`));