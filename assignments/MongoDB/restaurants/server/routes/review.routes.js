const { reviewController } = require('../controllers');
const router = require('express').Router();

router.post('/', reviewController.create);

module.exports = router;
