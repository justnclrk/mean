const { restaurantController } = require('../controllers');
const router = require('express').Router();

router
  .get('/', restaurantController.index)
  .post('/', restaurantController.create)
  .get('/:restaurant_id', restaurantController.show)
  .put('/:restaurant_id/edit', restaurantController.update)
  .delete('/:restaurant_id', restaurantController.destroy);

module.exports = router;
