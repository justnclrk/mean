const bookController = require('../../controllers/books');
const router = require('express').Router();

router.get('/', bookController.index);
router.get('/new', bookController.new);
router.post('/', bookController.create);
router.get('/:id/', bookController.show);
router.get('/:id/edit', bookController.edit);
router.post('/:id/update', bookController.update);
router.post('/:id/destroy', bookController.destroy);

module.exports = router;