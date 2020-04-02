const { petController } = require('../controllers');
const router = require('express').Router();

router
  .get('/', petController.index)
  .post('/', petController.create)
  .get('/:pet_id', petController.show)
  .put('/:pet_id/edit', petController.update)
  .delete('/:pet_id', petController.destroy);

module.exports = router;
