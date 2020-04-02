const Restaurant = require('mongoose').model('Restaurant');
const Review = require('mongoose').model('Review');

module.exports = {
  create(request, response) {
    Review.create(request.body)
      .then(review => {
        return Restaurant.findById(review.restaurant)
          .then(restaurant => {
            console.log('Restaurant:', restaurant);
            restaurant.reviews.push(review);
            return restaurant.save();
          })
          .then(() => response.json(review));
      })
      .catch(console.log);
  },
};
