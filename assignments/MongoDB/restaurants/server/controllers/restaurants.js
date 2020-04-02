const Restaurant = require('mongoose').model('Restaurant');
const Review = require('mongoose').model('Review');

module.exports = {
  index(request, response) {
    Restaurant.find({})
      .then(restaurants => response.json(restaurants))
      .catch(console.log);
  },

  show(request, response) {
    Restaurant.findById(request.params.restaurant_id)
      .populate('reviews')
      .then(restaurant => response.json(restaurant))
      .catch(console.log);
  },

  update(request, response) {
    Restaurant.findByIdAndUpdate(request.params.restaurant_id, request.body, {
      new: true,
    })
      .then(restaurant => response.json(restaurant))
      .catch(console.log);
  },

  create(request, response) {
    Restaurant.create(request.body)
      .then(restaurant => response.json(restaurant))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        response.json(errors);
      });
  },

  destroy(request, response) {
    Restaurant.findByIdAndRemove(request.params.restaurant_id)
      .then(restaurant => response.json(restaurant))
      .catch(console.log);
  },
};
