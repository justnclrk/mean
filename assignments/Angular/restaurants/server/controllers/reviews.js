const Restaurant = require('mongoose').model('Restaurant');
const Review = require('mongoose').model('Review');

module.exports = {
  create(request, response) {
    Review.create(request.body)
      .then(review => {
        return Restaurant.findOne({})
          .then(restaurant => {
            console.log('Restaurant:', restaurant);
            restaurant.reviews.push(review);
            return restaurant.save();
          })
          .then(() => response.json(review));
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        response.json(errors);
      });
  },
};
