const Review = require('mongoose').model('Review');
const Movie = require('mongoose').model('Movie');

module.exports = {
  create(request, response) {
    Review.create(request.body)
      .then(review => {
        return Movie.findById(review.movie)
          .then(movie => {
            console.log('Movie:', movie);
            movie.reviews.push(review);
            console.log('pushed');
            return movie.save();
          })
          .then(() => response.json(review));
      })
      .catch(console.log);
  },
};
