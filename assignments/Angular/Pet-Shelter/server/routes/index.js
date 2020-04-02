const petRoute = require('./pet.routes');
const router = require('express').Router();

module.exports = router.use('/pets', petRoute);
