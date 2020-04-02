const authorController = require('../../controllers/authors');
const router = require('express').Router();

router.get('/', authorController.index);
router.get('//:id', authorController.show);
router.get('/:id/edit', authorController.edit);
router.get('/new', authorController.new);
router.post('/', authorController.create);
router.get('/:id/update', authorController.update);
router.post('/:id/destroy', authorController.destroy);

module.exports = router;