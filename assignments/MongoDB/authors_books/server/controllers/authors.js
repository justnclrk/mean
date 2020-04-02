const Author = require('mongoose').model('Author');

module.exports = {
    index(request, response) {
        Author.find({})
            .populate('books')
            .then(authors => {
                 response.render('authors/index', { authors });
            })
            .catch(error => {
                console.log(error);
            })
    },
    
    show(request, response) {
        Author.findById(request.params.id)
            .populate('books')
            .then(author => {
                console.log(author);
        
                response.render('authors/show', {author})
            })
            .catch(console.log);
    },

    edit(request, response) {
        Author.findById(request.params.id)
            .populate('books')
            .then(author => {
                console.log(author);
        
                response.render('authors/edit', { author })
            })
            .catch(console.log);
    },

    new(request, response) {
        response.render('authors/new');
    },

    update(request, response) {
        Author.findByIdAndUpdate(request.params.id, request.body)
            .then(() => {
                response.redirect('/authors');
            })
            .catch(console.log);
    },

    create(request, response) {
        console.log(request.body);
        Author.create(request.body)
            .then(author => {
                console.log('author', author);
                response.redirect('/authors');
            })
            .catch(error => {
                console.log('error'. error);
            });
    },

    destroy(request, response) {
        Author.findByIdAndRemove(request.params.id)
            .then(author => response.redirect('/authors'))
            .catch(console.log);
    },
};