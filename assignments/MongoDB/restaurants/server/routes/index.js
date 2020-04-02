const router = require('express').Router();

module.exports = router
  .use('/restaurants', require('./restaurant.routes'))
  .use('/reviews', require('./review.routes'));
