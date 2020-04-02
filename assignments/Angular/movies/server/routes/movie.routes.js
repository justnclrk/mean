const { movieController } = require('../controllers');
const router = require('express').Router();

router
  .get('/', movieController.index)
  .post('/', movieController.create)
  .get('/:movie_id', movieController.show)
  .delete('/:movie_id', movieController.destroy);

module.exports = router;
