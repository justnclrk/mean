const Author = require('mongoose').model('Author');
const Book = require('mongoose').model('Book');

module.exports = {
    index(request, response) {
        Book.find({})
            .populate('author')
            .then(books => {
                response.render('books/index', { books });
            }) 
            .catch(console.log);
    },

    show(request, response) {
        Book.findById(request.params.id)
        .populate('authors')
        .then(book => {
            console.log(book);
    
            response.render('books/show', {book})
        })
        .catch(console.log);
    },

    edit(request, response) {
        Book.findById(request.params.book_id)
            .then(book => {
                response.render('books/edit', { book });
            })
            .catch(console.log);
    },

    new(request, response) {
        Author.find({})
            .then(authors => {
                response.render('books/new', { authors });
            })
    },

    update(request, response) {
        Book.findByIdAndUpdate(request.params.book_id, request.body)
            .then(() => {
                response.redirect('/books');
            })
            .catch(console.log);
    },

    create(request, response) {
        Book.create(request.body)
            .then(book => {

                return Author.findById(book.author)
                    .then(author => {
                        console.log('author', author);
                        
                        author.books.push(book);

                        return author.save()
                            .then(() => response.redirect('/books'))
                    })
                console.log('book', book);
            })
            .catch(console.log);
    },

    destroy(request, response) {
        Book.findByIdAndRemove(request.params.id)
            .then(book => response.redirect('/books'))
            .catch(console.log);         
    },
};