const router = require('express').Router();

module.exports = router
  .use('/movies', require('./movie.routes'))
  .use('/reviews', require('./review.routes'));
